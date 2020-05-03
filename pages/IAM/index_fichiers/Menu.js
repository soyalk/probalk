function FNEmpWz(wz)
{
	return (wz&&wz!="");
}
function AChld(p,c)
{
	if(p&&c)p.appendChild(c);
}
function AImg(mi,wzISrc,wzIAlt)
{
	if(!mi)return;
	if(FNEmpWz(wzISrc))mi.setAttribute("iconSrc",wzISrc);
	if(FNEmpWz(wzIAlt))
		mi.setAttribute("iconAltText",wzIAlt);
	else
		mi.setAttribute("iconAltText","");
}
function CMenu(wzID)
{
	var m=document.getElementById(wzID);
	if (m)
	{
		m._initialized=false;
		m._oContents=null;
		m.innerHTML="";
		return m;
	}
	m=document.createElement("MENU");
	if(!m)return null;
	if(wzID)m.id=wzID;
	m.className="ms-SrvMenuUI";
	AChld(document.body,m);
	return m;
}
function CMItm(wzType)
{
	var mi=document.createElement("SPAN");
	if(!mi)return null;
	mi.setAttribute("type",wzType);
	return mi;
}
function SetInnerText(oNode, wzText)
{
	if (document.createTextNode !=null)
	{
		var parsedText=document.createTextNode(wzText);
		oNode.innerHTML="";
		oNode.appendChild( parsedText );
	}
	else
	{
		oNode.innerText=wzText;
	}
}
function CMOpt(wzText,wzAct,wzISrc,wzIAlt,wzISeq,wzDesc)
{
	var mo=CMItm("option");
	if(!mo)return null;
	mo.setAttribute("text", wzText);
	mo.setAttribute("onMenuClick", wzAct);
	if (wzDesc)mo.setAttribute("description", wzDesc);
	AImg(mo,wzISrc,wzIAlt);
	if(FNEmpWz(wzISeq))mo.setAttribute("sequence",wzISeq);
	return mo;
}
function CAMOpt(p,wzText,wzAct,wzISrc,wzIAlt,wzISeq,wzDesc)
{
	var mo=CMOpt(wzText,wzAct,wzISrc,wzIAlt,wzISeq,wzDesc);
	if(!mo)return null;
	AChld(p,mo);
	return mo;
}
function CIMOpt(p,wzText,wzAct,wzISrc,wzIAlt,wzISeq)
{
	var mo=CMOpt(wzText,wzAct,wzISrc,wzIAlt,wzISeq);
	if(!mo)return null;
	for (var i=0;i<p.childNodes.length;i++)
	{
		var iSeq=p.childNodes[i].getAttribute("sequence");
		if (iSeq)
		{
			if (iSeq > wzISeq)
			{
				p.childNodes[i].parentNode.insertBefore(mo, p.childNodes[i]);
				return mo;
			}
		}
	}
	AChld(p,mo);
	return mo;
}
function CMSep()
{
	var sep=CMItm("separator");
	SetInnerText(sep, "");
	return sep;
}
function CAMSep(p)
{
	var ms=CMSep();
	if(!ms)return null;
	AChld(p,ms);
	return ms;
}
function CSubM(wzText,wzISrc,wzIAlt,wzISeq,wzDesc)
{
	var sm=CMItm("submenu");
	if(!sm)return null;
	sm.setAttribute("text", wzText);
	if (wzDesc)sm.setAttribute("description", wzDesc);
	AImg(sm,wzISrc,wzIAlt);
	if(FNEmpWz(wzISeq))sm.setAttribute("sequence",wzISeq);
	return sm;
}
function CASubM(p,wzText,wzISrc,wzIAlt,wzISeq,wzDesc)
{
	var sm=CSubM(wzText,wzISrc,wzIAlt,wzISeq,wzDesc);
	if(!sm)return null;
	AChld(p,sm);
	return sm;
}
function FRdy(o)
{
	if (!o) return false;
	if (o.readyState==null)
		return true;
	switch (o.readyState)
		{
		case "loaded": case "interactive": case "complete": return true;
		default: return false;
		}
}
function OMenu(m,r,fr,ft,yoff)
{
	if(typeof(m)=="string")m=document.getElementById(m);
	if(m)
		{
			OMenuInt(m,r,fr,ft,yoff);
		}
	return false;
}
function OMenuInt(m,r,fr,ft,yoff)
{
	if(m&&!MenuHtc_isOpen(m)) MenuHtc_show(m,r,fr,ft,yoff);
}
function OMenuEvnt()
{
	var m=event.srcElement;
	if(m&&FRdy(document)&&FRdy(m))
		{
		var r=m.getAttribute("relativeTo");
		var fr=m.getAttribute("forceRefresh");
		var ft=m.getAttribute("flipTop");
		var yoff=m.getAttribute("yOffsetTop");
		if(r!=null)m.removeAttribute("relativeTo");
		if(fr!=null)m.removeAttribute("forceRefresh");
		if(ft!=null)m.removeAttribute("flipTop");
		if(yoff!=null)m.removeAttribute("yOffsetTop");
		m.onreadystatechange=null;
		OMenuInt(m,r,fr,ft,yoff);
		}
}
var kfnDisableEvent=new Function("return false");
var g_menuHtc_lastMenu=null;
var g_uniqueNumber=0;
function IsAccessibilityFeatureEnabledProxy()
{
	if (typeof(IsAccessibilityFeatureEnabled) !="undefined")
		return IsAccessibilityFeatureEnabled();
	return false;
}
function MenuHtc_show(oMaster, oParent, fForceRefresh, fFlipTop, yOffset)
{
	if (!(browseris.ie55up || browseris.nav6up || browseris.safari125up))
		return false;
	MenuHtc_hide();
	MenuHtc_init(oMaster);
	oMaster._oParent=oParent;
	oMaster._fIsRtL=IsElementRtl(oMaster._oParent);
	if ((browseris.ie || browseris.nav) && IsAccessibilityFeatureEnabledProxy())
	{
		var menu=null;
		if(oParent.foa !=null)
		{
			menu=byid(oParent.foa);			
			if(menu==null)
			{
				menu=eval(oParent.foa);	
			}
		}
		if (menu !=null && menu.onblur !=null)
		{
			menu.onblur();
		}
		RenderAccessibleMenu(oMaster, fForceRefresh);
		g_menuHtc_lastMenu=oMaster;
	}
	else
	{
		SetBodyEventHandlers(null);
		AssureId(oParent);
		var result=ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, yOffset);
		g_menuHtc_lastMenu=oMaster;
		NavigateToMenu(oMaster);
		SetBodyEventHandlers(HandleDocumentBodyClick);
	}
	if (browseris.ie)
	{
		if (window.event !=null)
			window.event.cancelBubble=true;
	}
	return false;
}
function MenuHtc_hide()
{
	ClearTimeOutToHideMenu();
	var oMaster=g_menuHtc_lastMenu;
	if (oMaster !=null)
	{
		if (oMaster._accessibleMenu !=null)
		{
			CloseAccessibleMenu(oMaster);
		}
		else
		{
			HideMenu(oMaster);
		}
	}
	g_menuHtc_lastMenu=null;
}
function MenuHtc_isOpen(oMaster)
{
	if (!oMaster || !oMaster._initialized)
		return false;
	var result=IsOpen(oMaster);
	return result;
}
function MenuHtc_item(oMaster, nLevel, nIndex)
{
	MenuHtc_init(oMaster);
	var result=GetItem(oMaster, nLevel, nIndex);
	return result;
}
function TrapMenuClick(e)
{
	if (e !=null)
		e.cancelBubble=true;
	return false;
}
function SetBodyEventHandlers(h)
{
	document.body.onclick=h;
}
function HandleDocumentBodyClick(e)
{
	if (g_menuHtc_lastMenu !=null)
	{
		var oMaster=g_menuHtc_lastMenu;
		if (oMaster !=null)
		{
			HideMenu(oMaster);
		}
	}
	return false;
}
function GetEventPopup(e)
{
	var obj=GetEventSrcElement(e);
	while (obj !=null)
	{
		if (obj.master !=null)
			return obj;
		obj=obj.parentNode;
	}
	return null;
}
function GetUniqueNumber()
{
	g_uniqueNumber++;
	return g_uniqueNumber;
}
function MenuHtc_init(oMaster)
{
	if (oMaster._initialized)
		return;
	oMaster._initialized=true;
	oMaster._wzPrefixID="mp"+GetUniqueNumber();
	if (oMaster.id==null)
		oMaster.id=oMaster._wzPrefixID+"_id";
	oMaster._nLevel=0;
	oMaster._arrPopup=new Array();
	oMaster._arrSelected=new Array();
	if (typeof(oMaster._onDestroy)=="undefined")
		oMaster._onDestroy=null;
	oMaster._fLargeIconMode=false;
	oMaster._fCompactItemsWithoutIcons=false;
}
function PrepContents(oMaster)
{
	oMaster._fLargeIconMode=(oMaster.getAttribute("largeIconMode")=="true");
	oMaster._fCompactItemsWithoutIcons=(oMaster.getAttribute("CompactMode")=="true");
	if (!browseris.safari)
	{
		oMaster._oContents=document.createElement("span");
		oMaster._oContents.style.display="none";
		oMaster._oContents.innerHTML=oMaster.innerHTML;
	}
	else
	{
		oMaster._oContents=oMaster.cloneNode(true);
		oMaster._oContents.style.display="none";
	}
	if (oMaster._fLargeIconMode)
	{
		if (oMaster._fIsRtL)
			oMaster._wzMenuStyle="ms-MenuUILargeRtL";
		else
			oMaster._wzMenuStyle="ms-MenuUILarge";
	}
	else
	{
		if (oMaster._fIsRtL)
			oMaster._wzMenuStyle="ms-MenuUIRtL";
		else
			oMaster._wzMenuStyle="ms-MenuUI";
	}
	oMaster._wzChkMrkPath="/_layouts/images/ChkMrk.gif";
	oMaster._wzMArrPath="/_layouts/images/MArr.gif";
	oMaster._wzMArrPathRtL="/_layouts/images/MArrRtL.gif";
}
function FixUpMenuStructure(oMaster)
{
	var menuNodes=oMaster._oRoot.childNodes;
	var lastGroupId=null;
	var lastMenuSeparatorRow=null;
	for (var nIndex=0; nIndex < menuNodes.length; nIndex++)
	{
		var menuRow=menuNodes[nIndex];
		if (menuRow.nodeType !=1)
			continue;
		var deleteRow=false;
		var displayNone=menuRow.style !=null && menuRow.style.display=='none';
		var jsHidden=FIsIHidden(menuRow);
		if (displayNone || jsHidden)
		{
			deleteRow=true;
		}
		else if (FIsIType(menuRow, "separator"))
		{
			if (lastMenuSeparatorRow !=null || nIndex==0)
				deleteRow=true;
			else
				lastMenuSeparatorRow=menuRow;
		}
		else
		{
			var cGroupId=menuRow.getAttribute("menuGroupId");
			if (cGroupId !=lastGroupId &&
				lastMenuSeparatorRow==null &&
				nIndex !=0)
			{
				var lastMenuSeparatorRow=document.createElement("ie:menuitem");
				lastMenuSeparatorRow.setAttribute("type","separator");
				oMaster._oRoot.insertBefore(lastMenuSeparatorRow,menuRow);
			}
			else if (FIsIType(menuRow, "submenu") && lastMenuSeparatorRow !=null)
			{
				menuRow.parentNode.removeChild(lastMenuSeparatorRow);
				lastMenuSeparatorRow=null;
			}
			else
			{
				lastMenuSeparatorRow=null;
			}
			lastGroupId=cGroupId;
		}
		if (deleteRow)
		{
			menuRow.parentNode.removeChild(menuRow);
			nIndex--;
		}
	}
	if(lastMenuSeparatorRow !=null)
		lastMenuSeparatorRow.parentNode.removeChild(lastMenuSeparatorRow);
}
function IsElementRtl(oCurrent)
{
	while (oCurrent !=null && oCurrent.tagName !=null)
	{
		var dir=oCurrent.getAttribute("dir");
		if ((dir==null || dir=="") && oCurrent.style !=null)
		{
			dir=oCurrent.style.direction;
		}
		if (dir=="rtl")
			return true;
		else if (dir=="ltr")
			return false;
		oCurrent=oCurrent.parentNode;
	}
	return false;
}
function AdjustScrollPosition(element, relativeToElement, result)
{
	var oCurrent=element;
	while (oCurrent !=null &&
		oCurrent !=relativeToElement &&
		oCurrent !=element.offsetParent &&
		oCurrent.tagName !=null &&
		oCurrent.tagName.toLowerCase() !="body" &&
		oCurrent.tagName.toLowerCase() !="html")
	{
		if (oCurrent.scrollWidth > oCurrent.clientWidth &&
			oCurrent.offsetWidth >=oCurrent.clientWidth &&
			oCurrent.clientWidth !=0)
		{
			if (!IsElementRtl(oCurrent))
			{
				if (oCurrent.scrollLeft > 0)
					result.x -=oCurrent.scrollLeft;
			}
			else
			{
				result.x+=(oCurrent.scrollWidth - oCurrent.offsetWidth - oCurrent.scrollLeft);
			}
		}
		if (oCurrent.scrollTop > 0)
			result.y -=oCurrent.scrollTop;
		oCurrent=oCurrent.parentNode;
	}
}
function MenuHtc_GetElementPosition(element, relativeToElement)
{
	var result=new Object();
	result.x=0;
	result.y=0;
	result.width=0;
	result.height=0;
	if (element.offsetParent) {
		var parent=element;
		while (parent !=null &&
			parent !=relativeToElement)
		{
			result.x+=parent.offsetLeft;
			result.y+=parent.offsetTop;
			AdjustScrollPosition(parent, relativeToElement, result);
			var parentTagName=parent.tagName.toLowerCase();
			if (parentTagName !="table" &&
				parentTagName !="body" &&
				parentTagName !="html" &&
				parentTagName !="div" &&
				parent.clientTop &&
				parent.clientLeft) {
				result.x+=parent.clientLeft;
				result.y+=parent.clientTop;
			}
			if (browseris.ie && parentTagName=="td")
			{
				if (parent.runtimeStyle.borderTopStyle !="none" ||
				    parent.currentStyle.borderTopStyle !="none")
				{
					var shift;
					if (parent.runtimeStyle.borderTopWidth !="")
					{
						shift=parseInt(parent.runtimeStyle.borderTopWidth);
					}
					else
					{
						shift=parseInt(parent.currentStyle.borderTopWidth);
					}
					if (!isNaN(shift))
					{
						result.y+=shift;
					}
				}
				if (parent.runtimeStyle.borderLeftStyle !="none" ||
				    parent.currentStyle.borderLeftStyle !="none")
				{
					var shift;
					if (parent.runtimeStyle.borderLeftWidth !="")
					{
						shift=parseInt(parent.runtimeStyle.borderLeftWidth);
					}
					else
					{
						shift=parseInt(parent.currentStyle.borderLeftWidth);
					}
					if (!isNaN(shift))
					{
						result.x+=shift;
					}
				}
			}
			parent=parent.offsetParent;
		}
	}
	else if (element.left && element.top) {
		result.x=element.left;
		result.y=element.top;
	}
	else {
		if (element.x) {
			result.x=element.x;
		}
		if (element.y) {
			result.y=element.y;
		}
	}
	if (element.offsetWidth && element.offsetHeight) {
		result.width=element.offsetWidth;
		result.height=element.offsetHeight;
	}
	else if (element.style && element.style.pixelWidth && element.style.pixelHeight) {
		result.width=element.style.pixelWidth;
		result.height=element.style.pixelHeight;
	}
	return result;
}
function MenuHtcInternal_Show(oMaster, oParent, y, fFlipTop)
{
	var oPopup=oMaster._arrPopup[oMaster._nLevel];	
	var nIndex;							
	var fTopLevel;							
	var oInnerDiv;
	if (!oMaster._oContents) PrepContents(oMaster);
	if (!oMaster._oContents || IsOpen(oMaster)) return;
	if (!oPopup && !oMaster._oRoot)
		{
		oMaster._nLevel=0;
		oMaster._oRoot=oMaster._oContents;
		}
	fTopLevel=oMaster._nLevel==0;
	fFlipTop=fFlipTop && fTopLevel;
	if (!oPopup)
	{
		oMaster._arrPopup[oMaster._nLevel]=document.createElement("DIV");
		oPopup=oMaster._arrPopup[oMaster._nLevel];
		oPopup.isMenu=true;
		oPopup.master=oMaster;
		oPopup.level=oMaster._nLevel;
		oInnerDiv=document.createElement("DIV");
		var oTable=document.createElement("table");
		var oTBody=document.createElement("tbody");
		oInnerDiv.isInner=true;
		oPopup.style.position="absolute";
		oInnerDiv.style.overflow="visible";
		oTable.appendChild(oTBody);
		oInnerDiv.appendChild(oTable);
		oPopup.appendChild(oInnerDiv);
		if (oMaster._fIsRtL)
			oPopup.setAttribute("dir", "rtl");
		else
			oPopup.setAttribute("dir", "ltr");
		document.body.appendChild(oPopup);
		FixUpMenuStructure(oMaster);
		var id=0;
		var childNodeLength=oMaster._oRoot.childNodes.length;
		for (nIndex=0; nIndex < childNodeLength; nIndex++)
		{
			var oNode=oMaster._oRoot.childNodes[nIndex];
			if (oNode.nodeType !=1)
				continue;
			if (!FIsIType(oNode, "label"))
			{
				var oItem=CreateMenuItem(oMaster, oNode, MakeID(oMaster, oMaster._nLevel, id));
				if (oItem) oTBody.appendChild(oItem);
				id++;
			}
		}
		oPopup.className="ms-MenuUIPopupBody";
		oTable.className=oMaster._wzMenuStyle;
		oTable.cellSpacing=0;
		oTable.cellPadding=0;
		oPopup.oncontextmenu=kfnDisableEvent;
		oPopup.ondragstart=kfnDisableEvent;
		oPopup.onselectstart=kfnDisableEvent;
		if (oParent._onmouseover==null)
			oParent._onmouseover=oParent.onmouseover;
		if (oParent._onmouseout==null)
			oParent._onmouseout=oParent.onmouseout;
		if (oParent._onmousedown==null)
			oParent._onmousedown=oParent.onmousedown;
		if (oParent._onclick==null)
			oParent._onclick=oParent.onclick;
		if (browseris.nav)
		{
			oPopup.onkeypress=function(e) {return false; };
			oPopup.onkeyup=function(e) {return false; };
			oPopup.onkeydown=function(e) {PopupKeyDown(e); return false; };
			oPopup.onmousedown=function(e) {TrapMenuClick(e); return false; };
			oPopup.onmouseover=function(e) {PopupMouseOver(e); return false; };
			oPopup.onmouseout=function(e) {PopupMouseLeave(e); return false; };
			oPopup.onclick=function(e) {PopupMouseClick(e); TrapMenuClick(e); return false; };
			oParent.onmouseover=function (e) {PopupMouseOverParent(e); return false; };
			oParent.onmouseout=function(e) {PopupMouseLeaveParent(e); return false; };
			oParent.onmousedown=function(e) {TrapMenuClick(e); return false; };
			oParent.onclick=function(e) {TrapMenuClick(e); return false; };
			oParent.oncontextmenu=function(e) {TrapMenuClick(e); return false; };
		}
		else
		{
			oPopup.onkeydown=new Function("PopupKeyDown(event); return false;");
			oPopup.onmousedown=new Function("TrapMenuClick(event); return false;");
			oPopup.onmouseover=new Function("PopupMouseOver(event); return false;");
			oPopup.onmouseout=new Function("PopupMouseLeave(event); return false;");
			oPopup.onclick=new Function("PopupMouseClick(event); TrapMenuClick(event); return false;");
			oParent.onmouseover=new Function("PopupMouseOverParent(event); return false;");
			oParent.onmouseout=new Function("PopupMouseLeaveParent(event); return false;");
			oParent.onmousedown=new Function("TrapMenuClick(event); return false;");
			oParent.onclick=new Function("TrapMenuClick(event); return false;");
			oParent.oncontextmenu=new Function("TrapMenuClick(event); return false;");
		}
		if (fTopLevel)
		{
			var wzOnUnload=oMaster.getAttribute("onunloadtext");
			if (wzOnUnload) oPopup.onunload=new Function(wzOnUnload);
		}
	}
	else
	{
		var oOld=oMaster._arrSelected[oMaster._nLevel];
		if (oOld) UnselectItem(oOld);
	}
	oMaster._arrSelected[oMaster._nLevel]=null;
	var oBackFrame;
	if (browseris.ie)
	{
		var originalScrollLeft=document.body.scrollLeft;
		oBackFrame=document.createElement("iframe");
		AssureId(oBackFrame);
		oBackFrame.src="/_layouts/blank.htm";
		oBackFrame.style.position="absolute";
		oBackFrame.style.display="none";
		oBackFrame.scrolling="no";
		oBackFrame.frameBorder="0";
		document.body.appendChild(oBackFrame);
		oPopup.style.zIndex=103;
		oPopup._backgroundFrameId=oBackFrame.id;
		if (originalScrollLeft !=document.body.scrollLeft)
		{
			document.body.scrollLeft=originalScrollLeft;
		}
	}
	SetMenuPosition(oMaster, oParent, oPopup, oInnerDiv, fFlipTop, fTopLevel);
	if (browseris.ie)
	{
		SetBackFrameSize(null, oPopup);
		oPopup.onresize=new Function("SetBackFrameSize(event, null);");
		oBackFrame.style.display="block";
		oBackFrame.style.zIndex=101;
	}
}
function SetMenuPosition(oMaster, oParent, oPopup, oInnerDiv, fFlipTop, fTopLevel)
{
	var maxWidth=window.screen.width;
	var maxHeight=window.screen.height;
	if (browseris.nav)
	{
		maxWidth=document.body.clientWidth;
		maxHeight=document.body.clientHeight;
	}
	else if (self.innerHeight)
	{
		maxWidth=self.innerWidth;
		maxHeight=self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
	{
		maxWidth=document.documentElement.clientWidth;
		maxHeight=document.documentElement.clientHeight;
	}
	else if (document.body)
	{
		maxWidth=document.body.clientWidth;
		maxHeight=document.body.clientHeight;
	}
	var nRealWidth=oPopup.scrollWidth+oPopup.offsetWidth - oPopup.clientWidth;
	var nRealHeight=oPopup.scrollHeight+oPopup.offsetHeight - oPopup.clientHeight;
	var widthTooBig=false;
	var heightTooBig=false;
	if (nRealWidth > maxWidth - 50)
	{
		widthTooBig=true;
		nRealWidth=maxWidth - 50;
	}
	if (oMaster._fCompactItemsWithoutIcons && nRealHeight >=375)
	{
		heightTooBig=true;
		nRealHeight=375;
	}
	if (nRealHeight >=maxHeight - 50)
	{
		heightTooBig=true;
		nRealHeight=maxHeight - 50;
	}
	if (!widthTooBig && !heightTooBig)
	{
		oInnerDiv.style.overflow="visible";
	}
	else
	{
		if (browseris.ie)
		{
			if (widthTooBig)
			{
				oPopup.style.width=nRealWidth+"px";
				oInnerDiv.style.width=nRealWidth+"px";
				oInnerDiv.style.overflowX="scroll";
			}
			else
			{
				oInnerDiv.style.width=nRealWidth+"px";
				oInnerDiv.style.overflowX="visible";
			}
			if (heightTooBig)
			{
				oPopup.style.height=nRealHeight+"px";
				oInnerDiv.style.height=nRealHeight+"px";
				oInnerDiv.style.overflowY="scroll";
			}
			else
			{
				oInnerDiv.style.height=nRealHeight+"px";
				oInnerDiv.style.overflowY="visible";
			}
		}
		else
		{
			oPopup.style.height=nRealHeight+"px";
			oInnerDiv.style.height=nRealHeight+"px";
			oPopup.style.width=nRealWidth+"px";
			oInnerDiv.style.width=nRealWidth+"px";
			oInnerDiv.style.overflow="auto";
		}
	}
	nRealWidth=oPopup.scrollWidth+oPopup.offsetWidth - oPopup.clientWidth;
	nRealHeight=oPopup.scrollHeight+oPopup.offsetHeight - oPopup.clientHeight;
	var EdgeLeft=0;
	var EdgeRight=maxWidth;
	var ParentLeft=0;
	var EdgeTop=0;
	var ParentTop=0;
	var oCurrent=oParent;
	if (browseris.safari)
	{
		if (oCurrent.tagName=="TR" && oCurrent.childNodes.length > 0)
			oCurrent=oCurrent.childNodes[0];
	}
	var p=MenuHtc_GetElementPosition(oCurrent);
	ParentLeft=p.x;
	ParentTop=p.y;
	var nParentWidth;
	if (fTopLevel)
	{
		nParentWidth=p.width;
		ParentTop+=p.height;
		ParentTop -=1;
	}
	else
	{
		nParentWidth=p.width+1;
	}
	var fTryGoDefault=!fFlipTop && !document.body.getAttribute("flipped");
	var fFlippedDefault, fFlippedNonDefault;
	var xDefault, xFlipped;
	if (!oMaster._fIsRtL)
	{
		var MenuRightDefault;
		var MenuLeftFlipped;
		if (fTopLevel)
		{
			xDefault=ParentLeft;
			MenuRightDefault=ParentLeft+nRealWidth;
			MenuLeftFlipped=ParentLeft+nParentWidth - nRealWidth;
		}
		else
		{
			xDefault=ParentLeft+nParentWidth;
			MenuRightDefault=ParentLeft+nParentWidth+nRealWidth;
			MenuLeftFlipped=ParentLeft - nRealWidth;
		}
		xFlipped=MenuLeftFlipped;
		fFlippedDefault=MenuRightDefault > EdgeRight && MenuLeftFlipped > EdgeLeft;
		fFlippedNonDefault=!(MenuLeftFlipped < EdgeLeft && MenuRightDefault < EdgeRight);
	}
	else
	{
		var MenuLeftDefault;
		var MenuRightFlipped;
		if (fTopLevel)
		{
			MenuLeftDefault=ParentLeft+nParentWidth - nRealWidth;
			MenuRightFlipped=ParentLeft+nRealWidth;
			xFlipped=ParentLeft;
		}
		else
		{
			MenuLeftDefault=ParentLeft - nRealWidth;
			MenuRightFlipped=ParentLeft+nParentWidth+nRealWidth;
			xFlipped=ParentLeft+nParentWidth;
		}
		xDefault=MenuLeftDefault;
		fFlippedDefault=MenuLeftDefault < EdgeLeft && MenuRightFlipped < EdgeRight;
		fFlippedNonDefault=!(MenuRightFlipped > EdgeRight && MenuLeftDefault > EdgeLeft);
	}
	var fFlipped=fTryGoDefault ? fFlippedDefault : fFlippedNonDefault;
	var x=fFlipped ? xFlipped : xDefault;
	var xOffset;
	var yOffset;
	if (browseris.nav)
	{
		xOffset=window.pageXOffset;
		yOffset=window.pageYOffset;
	}
	else
	{
		var htmlElement=document.body.parentElement;
		if (!IsElementRtl(document.body))
		{
			xOffset=document.body.scrollLeft;
			xOffset+=htmlElement.scrollLeft;
		}
		else
		{
			xOffset=-document.body.scrollWidth+document.body.offsetWidth+document.body.scrollLeft;
			xOffset+=-htmlElement.scrollWidth+htmlElement.offsetWidth+htmlElement.scrollLeft;
		}
		yOffset=document.body.scrollTop;
		yOffset+=htmlElement.scrollTop;
	}
	if (nRealWidth >=maxWidth)
	{
		x=xOffset;
	}
	else if (x - xOffset+nRealWidth >=maxWidth)
	{
		x=xOffset+maxWidth - nRealWidth;
	}
	var y;
	if (nRealHeight >=maxHeight)
	{
		y=yOffset;
	}
	else if (ParentTop+nRealHeight - yOffset >=maxHeight)
	{
		y=yOffset+maxHeight - nRealHeight;
	}
	else
	{
		y=ParentTop;
	}
	oPopup.setAttribute("flipped", fFlipTop ? fFlipped && fFlippedDefault : fFlipped);
	var posLeft=Math.max(x,xOffset);
	var posTop=Math.max(y,yOffset);
	oPopup.style.left=posLeft+"px";
	oPopup.style.top=posTop+"px";
}
function SetBackFrameSize(e, oPopup)
{
	if (oPopup==null)
		oPopup=GetEventSrcElement(e);
	var nRealWidth=oPopup.scrollWidth+oPopup.offsetWidth - oPopup.clientWidth;
	var nRealHeight=oPopup.scrollHeight+oPopup.offsetHeight - oPopup.clientHeight;
	var oBackFrame=document.getElementById(oPopup._backgroundFrameId);
	oBackFrame.style.left=oPopup.offsetLeft+"px";
	oBackFrame.style.top=oPopup.offsetTop+"px";
	oBackFrame.style.width=nRealWidth+"px";
	oBackFrame.style.height=nRealHeight+"px";
}
function HideMenu(oMaster, nPhase)
{
	ClearTimeOutToHideMenu();
	if (nPhase==null)
		nPhase=0;
	if (nPhase==2)
	{
		if (oMaster._onDestroy !=null)
		{
			oMaster._onDestroy();
			oMaster._onDestroy=null;
		}
		return;
	}
	if (IsOpen(oMaster) && !IsAccessibilityFeatureEnabledProxy())
	{
		if (oMaster._oParent !=null)
		{
			oMaster._oParent.onclick=oMaster._oParent._onclick;
			oMaster._oParent.onmouseover=oMaster._oParent._onmouseover;
			oMaster._oParent.onmouseout=oMaster._oParent._onmouseout;
			oMaster._oParent.onmousedown=oMaster._oParent._onmousedown;
		}
		SetBodyEventHandlers(null);
		UpdateLevel(oMaster, 0);
		var oPopup=oMaster._arrPopup[0];
		if (oPopup !=null)
		{
			var oBackFrame=document.getElementById(oPopup._backgroundFrameId);
			if (oBackFrame !=null)
				oBackFrame.parentNode.removeChild(oBackFrame);
			oPopup.parentNode.removeChild(oPopup);
			oMaster._arrPopup[0]=null;
			if (nPhase==0)
			{
				if (oMaster._onDestroy !=null)
				{
					oMaster._onDestroy();
					oMaster._onDestroy=null;
				}
			}
		}
		g_menuHtc_lastMenu=null;
	}
}
function IsOpen(oMaster)
{
	if (oMaster._accessibleMenu && !oMaster._accessibleMenu.closed)
		return true;
	if (!oMaster._arrPopup)
		return false;
	var oPopup=oMaster._arrPopup[oMaster._nLevel];
	return oPopup;
}
function FindLabel(oParent)
{
	var arrNodes=oParent ? oParent.childNodes : null;
	if (arrNodes)
		{
		for (var nIndex=0; nIndex < arrNodes.length; nIndex++)
			{
			var oNode=arrNodes[nIndex];
			if (oNode.nodeType !=1)
				continue;
			if (FIsIType(oNode, "label")) return oNode;
			}
		}
	return null;
}
function ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, yOffset)
{
	UpdateLevel(oMaster, 0);
	if (fForceRefresh)
		{
		oMaster._oContents=null;
		oMaster._oRoot=null;
		oMaster._nLevel=0;
		oMaster._arrPopup=new Array();
		oMaster._arrSelected=new Array();
		}
	else
		{
		oMaster._oRoot=oMaster._oContents;
		}
	var y=0;
	if (oParent) y+=oParent.offsetHeight;
	if (browseris.safari)
	{
		if (oParent.tagName=="TR" && oParent.childNodes.length > 0)
		{
			y+=(oParent.childNodes[0].offsetTop+oParent.childNodes[0].offsetHeight
				- oParent.offsetTop);
		}
	}
	if (yOffset) y+=yOffset;
	fFlipTop=fFlipTop !=false;
	MenuHtcInternal_Show(oMaster, oParent, y, fFlipTop);
}
function ShowSubMenu(oMaster, nLevel, oParent)
{
	if (!oParent) return;
	if (oParent.submenuRoot==null) return;
	UpdateLevel(oMaster, nLevel);
	oMaster._oRoot=oParent.submenuRoot;
	oMaster._nLevel=oMaster._nLevel+1;
	MenuHtcInternal_Show(oMaster, oParent, -1);
}
function ShowSubMenuEvnt(id)
{
	var oMaster=document.getElementById(id);
	var oPopup=oMaster._arrPopup[oMaster._nLevel];
	if (oPopup)
		{
		oPopup.removeAttribute("timeoutID");
		ShowSubMenu(oMaster, oMaster._nLevel, oMaster._arrSelected[oMaster._nLevel]);
		}
}
function SetShowSubMenuEvnt(oMaster)
{
	var oPopup=oMaster._arrPopup[oMaster._nLevel];
	if (oPopup)
	{
		ClearTimeOut("timeoutID");
		document.body.setAttribute("timeoutID", window.setTimeout(new Function("ShowSubMenuEvnt('"+oMaster.id+"');"), 100));
	}
}
function ClearTimeOut(oAttribute)
{
	var id=document.body.getAttribute(oAttribute);
	if (id !=null)
	{
		window.clearTimeout(id);
	}
	document.body.removeAttribute(oAttribute);
}
function ClearShowSubMenuEvnt(oPopup)
{
	ClearTimeOut("timeoutID");
}
function GetEventSrcItem(oMaster, srcElement)
{
	for (var oSrc=srcElement;
		oSrc && !FIStringEquals(oSrc.tagName, "BODY");
		oSrc=oSrc.parentNode)
	{
		if (FIStringEquals(oSrc.tagName, "TR") &&
			oSrc.id.substring(0, oMaster._wzPrefixID.length)==oMaster._wzPrefixID)
		{
			return oSrc;
		}
	}
	return null;
}
function UpdateLevel(oMaster, nLevel)
{
	var oPopup;
	while (oMaster._nLevel > nLevel)
		{
		oPopup=oMaster._arrPopup[oMaster._nLevel];
		if (oPopup)
			{
			ClearShowSubMenuEvnt(oPopup);
			var oBackFrame=document.getElementById(oPopup._backgroundFrameId);
			if (oBackFrame !=null)
				oBackFrame.parentNode.removeChild(oBackFrame);
			oPopup.parentNode.removeChild(oPopup);
			}
		oMaster._arrPopup[oMaster._nLevel]=null;
		oMaster._arrSelected[oMaster._nLevel]=null;
		oMaster._oRoot=oMaster._oRoot.parentNode;
		oMaster._nLevel--;
		}
	oPopup=oMaster._arrPopup[oMaster._nLevel];
	if (oPopup) ClearShowSubMenuEvnt(oPopup);
}
function PopupMouseOver(e)
{
	var oPopup=GetEventPopup(e);
	if (oPopup !=null)
	{
		var oMaster=oPopup.master;
		var nLevel=oPopup.level;
		if (nLevel < 0) return;
		var oSrcElem=GetEventSrcItem(oMaster, GetEventSrcElement(e));
		if (oSrcElem)
		{
			if (oSrcElem !=oMaster._arrSelected[nLevel])
			{
				if (FIsIType(oSrcElem, "separator"))
					return;
				ToggleMenuItem(oMaster, nLevel, oSrcElem);
				if (FIsIType(oSrcElem, "submenu"))
					EngageSelection(oMaster, true, true, false);
			}
			else if (nLevel < oMaster._nLevel)
			{
				UnselectCurrentOption(oMaster);
			}
		}
		ClearTimeOutToHideMenu();
	}
}
function PopupMouseLeave(e)
{
	var oPopup;
	oPopup=GetEventPopup(e);
	if (oPopup !=null)
	{
		UnselectCurrentOption(oPopup.master);
		SetTimeOutToHideMenu();
	}
	return false;
}
function PopupMouseOverParent(e)
{
	if (g_menuHtc_lastMenu !=null)
	{
		ClearTimeOutToHideMenu();
		if (g_menuHtc_lastMenu._oParent !=null && g_menuHtc_lastMenu._oParent._onmouseover !=null)
		{
			g_menuHtc_lastMenu._oParent._onmouseover();
		}
	}
}
function PopupMouseLeaveParent(e)
{
	if (g_menuHtc_lastMenu !=null)
	{
		if (g_menuHtc_lastMenu._oParent !=null && g_menuHtc_lastMenu._oParent._onmouseout !=null)
		{
				g_menuHtc_lastMenu._oParent._onmouseout();
		}		
		SetTimeOutToHideMenu();		
	}
}
function ClearTimeOutToHideMenu()
{
	if (document.body.getAttribute("HideMenuTimeOut") !=null)
	{
		ClearTimeOut("HideMenuTimeOut");
	}
}
function SetTimeOutToHideMenu()
{
	ClearTimeOut("HideMenuTimeOut");
	document.body.setAttribute("HideMenuTimeOut", window.setTimeout(MenuHtc_hide, 1500));
}
function PopupMouseClick(e)
{
	var oPopup=GetEventPopup(e);
	var oMaster=oPopup.master;
	var nLevel=oPopup.level;
	if (nLevel < 0) return;
	var oItem=oMaster._arrSelected[nLevel];
	UpdateLevel(oMaster, nLevel);
	EngageSelection(oMaster, true, false, false);
}
function PopupKeyDown(e)
{
	var oPopup=GetEventPopup(e);
	var oMaster=oPopup.master;
	var nLevel=oPopup.level;
	if (nLevel < 0)
		return;
	var nKeyCode=GetEventKeyCode(e);
	var shiftKey=e.shiftKey;
	if (oMaster._fIsRtL)
		{
		if (nKeyCode==37) nKeyCode=39;
		else if (nKeyCode==39) nKeyCode=37;
		}
	if (nKeyCode==9) nKeyCode=!shiftKey ? 40 : 38;
	ClearShowSubMenuEvnt(oPopup);
	switch (nKeyCode)
		{
	case 38:	
		MoveMenuSelection(oMaster, -1);
		break;
	case 40:	
		MoveMenuSelection(oMaster, 1);
		break;
	case 37:	
	case 27:	
		CloseCurrentLevel(oMaster, nKeyCode==27);
		break;
	case 39:	
	case 13:	
		EngageSelection(oMaster, nKeyCode==13, false, true);
		break;
		}
	e.returnValue=false;
}
function SetNewId(obj)
{
	obj.id="msomenuid"+GetUniqueNumber();
	return obj.id;
}
function AssureId(obj)
{
	if (obj.id==null || obj.id=="")
		obj.id="msomenuid"+GetUniqueNumber();
	return obj.id;
}
function NavigateToMenu(oMaster)
{
	var oMenu=oMaster._arrPopup[oMaster._nLevel].firstChild;
	AssureId(oMenu);
	try
	{		
		var oFirstItem=oMenu.firstChild.firstChild.firstChild;		
		oFirstItem.tabIndex=0;
		if (oFirstItem.setActive !=null)
			oFirstItem.setActive();
		else if (oFirstItem.focus !=null)
			oFirstItem.focus();
	}
	catch (e)
	{
	}
}
function ExecuteOnClick(fnOnClick)
{
	try
	{
		if (browseris.safari)
		{
			if (FIStringEquals(typeof(fnOnClick), "string"))
				eval("var document=window.document; {"+fnOnClick+"}");
			else
				fnOnClick();
		}
		else
		{
			if (FIStringEquals(typeof(fnOnClick), "string"))
			{
				fnOnClick=new Function("var document=window.document; {"+fnOnClick+"}");
			}
			var oTemp=window.document.body.appendChild(window.document.createElement("span"));
			oTemp.onclick=fnOnClick;
			oTemp.onclick();
			oTemp.parentNode.removeChild(oTemp);
		}
	}
	catch (e)
	{
	}
}
function EngageSelection(oMaster, fDoSelection, fDelayExpandSM, fEnterSM)
{
	var oItem=oMaster._arrSelected[oMaster._nLevel];
	if (!oItem || oItem.optionDisabled) return;
	if (FIsIType(oItem, "submenu"))
	{
		if (fDelayExpandSM)
		{
			SetShowSubMenuEvnt(oMaster);
		}
		else
		{
			ShowSubMenu(oMaster, oMaster._nLevel, oItem);
			if (fEnterSM) MoveMenuSelection(oMaster, 1);
		}
	}
	else if (fDoSelection)
	{
		var fEnabled=oItem.getAttribute("enabled");
		if (fEnabled !="false")
		{
			var fnOnClick=oItem.getAttribute("onMenuClick");
			if (fnOnClick)
			{
				HideMenu(oMaster, 1);
				ExecuteOnClick(fnOnClick);
				HideMenu(oMaster, 2);
			}
		}
	}
}
function CloseCurrentLevel(oMaster, fAllowHideRoot)
{
	if (oMaster._nLevel > 0)
	{
		UpdateLevel(oMaster, oMaster._nLevel - 1);
		var obj=oMaster._arrSelected[oMaster._nLevel];
		if (obj !=null)
		{
			if (browseris.nav)
			{
				obj=obj.firstChild.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild;
				if (obj.focus !=null)
					obj.focus();
			}
			else
			{
				if (obj.focus !=null)
					obj.focus();
			}
		}
	}
	else if (fAllowHideRoot)
	{
		HideMenu(oMaster);
		var oParent=oMaster._oParent;
		while (oParent !=null &&
			oParent.tagName=="SPAN" &&
			oParent.getAttribute("contentEditable") !=null)
		{
			oParent=oParent.parentElement;
		}
		if (oParent !=null)
		{
			var focusElement=oParent;
			if (oParent.foa !=null)
			{
				var foa=null;
				foa=eval(oParent.foa);
				if(foa==null)
				{
					foa=byid(oParent.foa );
				}
				if (foa !=null)
				{
					focusElement=foa;
				}
			}
			if (focusElement.setActive !=null)
			{
				focusElement.setActive();
			}
			else if (focusElement.focus !=null)
			{
				focusElement.focus();
			}
		}
	}
}
function UnselectCurrentOption(oMaster)
{
	if (oMaster._nLevel >=0)
		{
		var oItem=oMaster._arrSelected[oMaster._nLevel];
		if (FIsIType(oItem, "option"))
			{
			UnselectItem(oItem);
			oMaster._arrSelected[oMaster._nLevel]=null;
			}
		}
}
function MakeID(oMaster, nLevel, nIndex)
{
	return oMaster._wzPrefixID+"_"+nLevel+"_"+nIndex;
}
function GetItem(oMaster, nLevel, nIndex)
{
	var oPopup=oMaster._arrPopup[nLevel];
	return oPopup ? document.getElementById(MakeID(oMaster, nLevel, nIndex)) : null;
}
function MoveMenuSelection(oMaster, iDir)
{
	var nIndex=-1;
	var nNumItems=oMaster._oRoot.childNodes.length;
	var oSelected=oMaster._arrSelected[oMaster._nLevel];
	if (oSelected)
	{
		var wzSelectedID=oSelected ? oSelected.id : null;
		if (wzSelectedID)
		{
			var nCurIndex=parseInt(wzSelectedID.substring(wzSelectedID.lastIndexOf("_")+1, wzSelectedID.length));
			nIndex=(nCurIndex+nNumItems+iDir) % nNumItems;
		}
	}
	if (nIndex < 0)
		nIndex=iDir > 0 ? 0 : (nNumItems - 1);
	var oItem;
	var nIndexStart=nIndex;
	do
	{
		oItem=GetItem(oMaster, oMaster._nLevel, nIndex);
		nIndex=(nIndex+nNumItems+iDir) % nNumItems;
	}
	while (nIndex !=nIndexStart &&
			 (!oItem || oItem.style.display=="none" ||
			  !(FIsIType(oItem, "option") || FIsIType(oItem, "submenu"))));
	ToggleMenuItem(oMaster, oMaster._nLevel, oItem);
}
function ToggleMenuItem(oMaster, nLevel, oItem)
{
	var oOld=oMaster._arrSelected[nLevel];
	if (!oItem || (oOld && oItem.id==oOld.id)) return;
	if (oOld)
	{
		UnselectItem(oOld);
		oOld.onkeydown=null;
		oOld.onmousedown=null;
		oOld.onmouseover=null;
		oOld.onmouseout=null;
		oOld.oncontextmenu=null;
	}
	UpdateLevel(oMaster, nLevel);
	SelectItem(oItem);
	oMaster._arrSelected[nLevel]=oItem;
	oItem.tabIndex=0;
	if (oItem.setActive !=null)
		oItem.setActive();
	else if (oItem.focus !=null)
		oItem.focus();
	var oPopup=oMaster._arrPopup[nLevel];
	var oDiv=oPopup.childNodes[0];
	var posPopup=MenuHtc_GetElementPosition(oItem, oDiv);
	if (posPopup.y+posPopup.height - oDiv.scrollTop > oDiv.offsetHeight)
	{
		oDiv.scrollTop=posPopup.y+posPopup.height - oDiv.offsetHeight;
	}
	else if (posPopup.y < oDiv.scrollTop)
	{
		oDiv.scrollTop=posPopup.y;
	}
}
function SelectItem(oItem)
{
	if (!oItem) return;
	var oItemTableCell=oItem.firstChild;
	var oItemTable=oItemTableCell.firstChild;
	if (oItemTableCell.className=="ms-MenuUIItemTableCellCompact")
		oItemTableCell.className="ms-MenuUIItemTableCellCompactHover";	
	else
		oItemTableCell.className="ms-MenuUIItemTableCellHover";
	oItemTable.className="ms-MenuUIItemTableHover";
}
function UnselectItem(oItem)
{
	if (!oItem) return;
	var oItemTableCell=oItem.firstChild;
	var oItemTable=oItemTableCell.firstChild;
	if (oItemTableCell.className=="ms-MenuUIItemTableCellCompactHover")
		oItemTableCell.className="ms-MenuUIItemTableCellCompact";	
	else
		oItemTableCell.className="ms-MenuUIItemTableCell";
	oItemTable.className="ms-MenuUIItemTable";
}
function SetImageSize(oMaster, oImg, oSize)
{
	if (oSize==null)
	{
		if (oMaster._fLargeIconMode)
			oSize=32;
		else
			oSize=16;
	}
	oImg.width=oSize;
	oImg.height=oSize;
}
function CreateMenuOption(oMaster, oRow, oNode, wzID, wzHtml)
{
	var oIcon=document.createElement("td");
	var oLabel=document.createElement("td");
	var oAccKey=document.createElement("td");
	var oArrow=document.createElement("td");
	oRow.appendChild(oIcon);
	oRow.appendChild(oLabel);
	oRow.appendChild(oAccKey);
	oRow.appendChild(oArrow);
	if (oMaster._fLargeIconMode)
		oIcon.className=!oMaster._fIsRtL ? "ms-MenuUIIconLarge" : "ms-MenuUIIconRtlLarge";
	else
		oIcon.className=!oMaster._fIsRtL ? "ms-MenuUIIcon" : "ms-MenuUIIconRtL";
	oIcon.align="center";
	if (oMaster._fCompactItemsWithoutIcons && !oNode.getAttribute("iconSrc"))
		oLabel.className=!oMaster._fIsRtL ? "ms-MenuUILabelCompact" : "ms-MenuUILabelCompactRtl";
	else
		oLabel.className=!oMaster._fIsRtL ? "ms-MenuUILabel" : "ms-MenuUILabelRtL";
	oAccKey.className="ms-MenuUIAccessKey";
	oArrow.className="ms-MenuUISubmenuArrow";
	if (!oMaster._fLargeIconMode)
	{
		oLabel.noWrap=true;
	}
	oIcon.noWrap=true;
	oAccKey.noWrap=true;
	oArrow.noWrap=true;
	oLabel.id=oNode.id;
	if (!wzHtml) wzHtml=oNode.innerHTML;
	if (oNode.getAttribute("enabled")=="false")
	{
		oRow.disabled=true;
		oLabel.className+=" ms-MenuUIItemTableCellDisabled";
	}
	var wzIconSrc=null, wzIconAlt=null;
	if (oNode.getAttribute("checked")=="true")
		{
		wzIconSrc=oMaster._wzChkMrkPath;
		wzIconAlt="*";
		}
	else
		{
		wzIconSrc=EvalAttributeValue(oNode, "iconSrc", "iconScript");
		wzIconAlt=oNode.getAttribute("iconAltText");
		}
	var innerHtml=wzHtml;
	var sText=EvalAttributeValue(oNode, "text", "textScript");
	var sDescription=EvalAttributeValue(oNode, "description", "descriptionScript");
	var oMenuItemBody=document.createElement("div");
	if (sDescription !=null && oMaster._fLargeIconMode)
	{
		var oBold=document.createElement("B");
		var oTextSpan=document.createElement("SPAN");
		var oTextNode=document.createTextNode(sText);
		var oBr=document.createElement("BR");
		var oDescSpan=document.createElement("SPAN");
		var oDescNode=document.createTextNode(sDescription);
		oTextSpan.setAttribute("style","white-space: nowrap;");
		oDescSpan.className="ms-menuitemdescription";
		oMenuItemBody.appendChild(oBold);
		oBold.appendChild(oTextSpan);
		oTextSpan.appendChild(oTextNode);
		oMenuItemBody.appendChild(oBr);
		oMenuItemBody.appendChild(oDescSpan);
		oDescSpan.appendChild(oDescNode);
	}
	else if (sText !=null)
	{
		var oTextSpan=document.createElement("SPAN");
		var oTextNode=document.createTextNode(sText);
		oTextSpan.setAttribute("style","white-space: nowrap;");
		oMenuItemBody.appendChild(oTextSpan);
		oTextSpan.appendChild(oTextNode);
	}
	var htmlSpan=document.createElement("SPAN");
	htmlSpan.innerHTML=innerHtml;
	oMenuItemBody.appendChild(htmlSpan);
	if (wzIconSrc)
	{
		var oImg=document.createElement("IMG");
		SetImageSize(oMaster, oImg);
		var oImgLbl=document.createElement("LABEL");
		oIcon.appendChild(oImg);
		oLabel.appendChild(oImgLbl);
		var wzIconId=wzID+"_"+"ICON";
		oImg.id=wzIconId;
		oImg.src=wzIconSrc;
		if (wzIconAlt)
		{
			oImg.alt="";
			oImg.title="";
		}
		oImgLbl.htmlFor=wzIconId;
		oImgLbl.appendChild(oMenuItemBody);
	}
	else
	{
		if (browseris.nav || oMaster._fLargeIconMode)
		{
			var oImg=document.createElement("IMG");
			SetImageSize(oMaster, oImg);
			var oImgLbl=document.createElement("LABEL");
			oIcon.appendChild(oImg);
			oLabel.appendChild(oImgLbl);
			var wzIconId=wzID+"_"+"ICON";
			oImg.id=wzIconId;
			oImg.src="/_layouts/images/blank.gif";
			oImg.alt="";
			oImg.title="";
			oImgLbl.htmlFor=wzIconId;
			oImgLbl.appendChild(oMenuItemBody);
			if (oMaster._fLargeIconMode)
			{
				oImg.width=32;
				oImg.height=16;
			}
			else
			{
				oImg.width=16;
			}
		}
		else
		{
			oIcon.innerHTML="&nbsp;";
			oLabel.appendChild(oMenuItemBody);
		}
	}
	var wzAccKey=oNode.getAttribute("accessKeyText");
	if (wzAccKey) oAccKey.innerHTML=wzAccKey;
	SetIType(oRow, "option");
}
function CreateMenuSeparator(oMaster, oRow)
{
	var oCell=document.createElement("td");
	var oDiv=document.createElement("div");
	oRow.appendChild(oCell);
	oCell.appendChild(oDiv);
	if (oMaster._fLargeIconMode)
		oDiv.className=!oMaster._fIsRtL ? "ms-MenuUISeparatorLarge" : "ms-MenuUISeparatorLargeRtl";
	else
		oDiv.className=!oMaster._fIsRtL ? "ms-MenuUISeparator" : "ms-MenuUISeparatorRtL";
	oDiv.innerHTML="&nbsp;";
	SetIType(oRow, "separator");
}
function CreateSubmenu(oMaster, oRow, oNode, wzID)
{
	var oLabelNode=FindLabel(oNode);
	CreateMenuOption(oMaster, oRow, oNode, wzID, oLabelNode ? oLabelNode.innerHTML : null);
	var oArrow=oRow.childNodes[3];
	var oArrowImg=document.createElement("IMG");
	SetImageSize(oMaster, oArrowImg, 16);
	oArrow.appendChild(oArrowImg);
	oArrowImg.src=!oMaster._fIsRtL ? oMaster._wzMArrPath : oMaster._wzMArrPathRtL;
	oArrowImg.alt=!oMaster._fIsRtL ? ">" : "<";
	oArrowImg.title="";
	SetIType(oRow, "submenu");
	oRow.submenuRoot=oNode;
}
function MergeAttributes(oTarget, oSource)
{
	if (browseris.nav || oTarget.mergeAttributes==null)
	{
		var oAttributes=oSource.attributes;
		for (var i=0; i < oAttributes.length; i++)
		{
			var oAttrib=oAttributes[i];
			if (oAttrib !=null &&
				oAttrib.specified &&
				oAttrib.nodeName !="id" &&
				oAttrib.nodeName !="ID" &&
				oAttrib.nodeName !="name")
			{
				oTarget.setAttribute(oAttrib.nodeName, oAttrib.nodeValue);
			}
		}
		if (oSource.getAttribute("type") !=null)
			oTarget.setAttribute("type", oSource.getAttribute("type"));
		if (oSource.submenuRoot !=null)
			oTarget.submenuRoot=oSource.submenuRoot;
	}
	else
	{
		oTarget.mergeAttributes(oSource);
	}
}
function CreateMenuItem(oMaster, oNode, wzID, wzHtml)
{
	if (FIsIType(oNode, "label")) return;
	var oRow=document.createElement("tr");
	MergeAttributes(oRow, oNode);
	oRow.setAttribute("onMenuClick", oNode.getAttribute("onMenuClick"));
	if (FIsIType(oNode, "separator"))
	{
		CreateMenuSeparator(oMaster, oRow);
		return oRow;
	}
	if (!GetIType(oNode)) SetIType(oNode, "option");
	var oFmtTableRow=document.createElement("tr");
	var oFmtTableCell=document.createElement("td");
	var oFmtTable=document.createElement("table");
	var oFmtTableBody=document.createElement("tbody");
	oFmtTableRow.appendChild(oFmtTableCell);
	oFmtTableCell.appendChild(oFmtTable);
	oFmtTable.appendChild(oFmtTableBody);
	oFmtTableBody.appendChild(oRow);
	if (oMaster._fCompactItemsWithoutIcons && !oNode.getAttribute("iconSrc"))
		oFmtTableCell.className="ms-MenuUIItemTableCellCompact";
	else
		oFmtTableCell.className="ms-MenuUIItemTableCell";
	oFmtTable.className="ms-MenuUIItemTable";
	oFmtTable.width="100%";
	oFmtTable.cellSpacing=0;
	oFmtTable.cellPadding=0;
	if (FIsIType(oNode, "submenu"))
		CreateSubmenu(oMaster, oRow, oNode, wzID);
	else if (FIsIType(oNode, "option"))
		CreateMenuOption(oMaster, oRow, oNode, wzID, wzHtml);
	if (oRow.disabled ||
		oRow.getAttribute("enabled")=="false")
	{
		oRow.disabled=false;
		oRow.className="ms-MenuUIDisabled";
		oRow.disabled=false;
		for (var nIndex=0; nIndex < oRow.childNodes.length; nIndex++)
		{
			if (oRow.childNodes[nIndex].nodeType !=1)
				continue;
			oRow.childNodes[nIndex].disabled=true;
			oFmtTableCell.className+=" ms-MenuUIItemTableCellDisabled";
		}
		oRow.optionDisabled=true;
	}
	MergeAttributes(oFmtTableRow, oRow);
	if (oRow.optionDisabled !=null)
	{
		oFmtTableRow.optionDisabled=oRow.optionDisabled;
	}
	oFmtTableRow.id=wzID;
	SetIType(oFmtTableRow, GetIType(oRow));
	return oFmtTableRow;
}
function GetItems(oMaster)
{
	if (!oMaster._oContents) PrepContents(oMaster);
	return oMaster._oContents.childNodes;
}
function GetIType(oItem)
{
	return oItem ? oItem.getAttribute("type") : null;
}
function FIsIType(oItem, wzType)
{
	return FIStringEquals(GetIType(oItem), wzType);
}
function SetIType(oItem, wzType)
{
	if (oItem) oItem.setAttribute("type", wzType);
}
function FIStringEquals(wzX, wzY)
{
	return wzX !=null && wzY !=null && wzX.toLowerCase()==wzY.toLowerCase();
}
function RenderAccessibleMenu(oMaster, fForceRefresh)
{
	if (fForceRefresh)
	{
		oMaster._oContents=null;
		oMaster._oRoot=null;
		oMaster._nLevel=0;
		oMaster._arrPopup=new Array();
		oMaster._arrSelected=new Array();
	}
	else
	{
		oMaster._oRoot=oMaster._oContents;
	}
	if (!oMaster._oContents) PrepContents(oMaster);
	if (!oMaster._oContents) return;
	if (!oMaster._oRoot)
	{
		oMaster._nLevel=0;
		oMaster._oRoot=oMaster._oContents;
	}
	FixUpMenuStructure(oMaster);
	var menuDir=oMaster._fIsRtL ? "rtl" : "ltr";
	g_menuHtc_html="<html dir='"+menuDir+"'><head><title>"+L_AccessibleMenu_Text+"</title></head><body><ul id='root'>";
	RenderMenuLevel(oMaster, oMaster._oRoot, true);
	g_menuHtc_html=g_menuHtc_html+"</ul></body></html>";
	var oNewWindow=window.open("/_layouts/blank.htm", "_blank", "status=no,toolbar=no,menubar=no,location=no");
	oMaster._accessibleMenu=oNewWindow;
	oNewWindow.document.write(g_menuHtc_html);
	oNewWindow.document.close();
	oNewWindow.focus();
}
function CloseAccessibleMenu(oMaster, n)
{
	if (n==null)
		n=0;
	if (oMaster !=null)
	{
		if (n==0 || n==1)
		{
			if (oMaster._accessibleMenu !=null)
			{
				oMaster._accessibleMenu.close();
				oMaster._accessibleMenu=null;
			}
		}
		if (n==0 || n==2)
		{
			if (oMaster._onDestroy !=null)
			{
				oMaster._onDestroy();
				oMaster._onDestroy=null;
			}
		}
	}
}
function GetMenuItemText(oMaster, oNode, s)
{
	if (s=="")
	{
		s=EvalAttributeValue(oNode, "text", "textScript");
		var description=EvalAttributeValue(oNode, "description", "descriptionScript");
		if (description !=null &&
			description !="" &&
			oMaster._fLargeIconMode)
		{
			if (s !="")
				s=s+": ";
			s=s+description;
		}
	}
	if (oNode.getAttribute("checked")=="true")
		s="* "+s;
	if (oNode.title !=null && oNode.title !="")
		s=s+": "+oNode.title;
	return s;
}
function GetMenuItemEnabled(oNode, fEnabled)
{
	if (!fEnabled)
		return false;
	if (oNode.getAttribute("enabled")=="false")
		return false;
	if (oNode.getAttribute("disabled") !=null && oNode.getAttribute("disabled") !="")
		return false;
	return true;
}
var g_menuHtc_html;
function RenderMenuLevel(oMaster, oRoot, fEnabled)
{
	for (var nIndex=0; nIndex < oRoot.childNodes.length; nIndex++)
	{
		var oNode=oRoot.childNodes[nIndex];
		if (oNode.nodeType !=1)
			continue;
		if (oNode.style.display=="none")
			continue;
		if (FIsIType(oNode, "option"))
		{
			var s=GetMenuItemText(oMaster, oNode, oNode.innerHTML);
			if (!GetMenuItemEnabled(oNode, fEnabled))
			{
				g_menuHtc_html=g_menuHtc_html+"<li><span id=\""
+oNode.id+"\">"
+s+"</span></li>";
			}
			else
			{
				g_menuHtc_html=g_menuHtc_html+"<li><a href=\"#\" id=\""
+oNode.id+"\" "
+"onMenuClick"
+"=\""
+oNode.getAttribute("onMenuClick")
+"\" onclick=\""
+"javascript:opener.ExecuteOnAccessibleClick(this.getAttribute('"+"onMenuClick"+"')); return false;"
+"\">"
+s
+"</a></li>";
			}
		}
		else if (FIsIType(oNode, "submenu"))
		{
			var s=GetMenuItemText(oMaster, oNode, "");
			g_menuHtc_html=g_menuHtc_html+"<li><span id=\""+oNode.id+"\">"+s;
			for (var n=0; n < oNode.childNodes.length; n++)
			{
				var oLabelNode=oNode.childNodes[n];
				if (oLabelNode.nodeType !=1)
					continue;
				if (oLabelNode.style.display=="none")
					continue;
				if (FIsIType(oLabelNode, "label"))
				{
					g_menuHtc_html=g_menuHtc_html+" "+oLabelNode.innerHTML;
					break;
				}
			}
			g_menuHtc_html=g_menuHtc_html+"</span><ul>";
			RenderMenuLevel(oMaster, oNode, GetMenuItemEnabled(oNode, fEnabled));
			g_menuHtc_html=g_menuHtc_html+"</ul></li>";
		}
	}
}
function ExecuteOnAccessibleClick(fnOnClick)
{
	var oMaster=g_menuHtc_lastMenu;
	if (oMaster !=null)
	{
		CloseAccessibleMenu(oMaster, 1);
		window.focus();
		ExecuteOnClick(fnOnClick);
		CloseAccessibleMenu(oMaster, 2);
	}
}
function FIsIHidden(oItem)
{
	if (oItem)
	{
		var hiddenFunc=oItem.getAttribute("hidden");
		if (!hiddenFunc) return false;
		return eval(hiddenFunc);
	}
	else
		return false;
}
function EvalAttributeValue(oNode, sAttribute1, sAttribute2)
{
	var result=oNode.getAttribute(sAttribute2);
	if (result !=null &&
		result.toLowerCase().indexOf("javascript:")==0)
	{
		result=eval(result.substring(11));
		if (result !=null && result !="")
			return result;
	}
	var result=oNode.getAttribute(sAttribute1);
	if (result==null)
		return "";
	return result;
}
var MMU_chDelim=",";
var MMU_chDelimEnc="%2c";
var MMU_postbackPrefix="javascript:__doPostBack(";
var MMU_chDelim2="%";
var MMU_chDelim2Enc="%25";
function MHash_New()
{
	var oMaster=new Object();
	oMaster._keys=new Array();
	oMaster._values=new Array();
	return oMaster;
}
function MHash_Add(oMaster, oKey, oValue)
{
	oMaster._keys.push(oKey);
	oMaster._values.push(oValue);
}
function MHash_Count(oMaster)
{
	return oMaster._keys.length;
}
function MHash_Keys(oMaster)
{
	return oMaster._keys;
}
function MHash_Values(oMaster)
{
	return oMaster._values;
}
function MHash_Exists(oMaster, oKey)
{
	for (var i=0; i < oMaster._keys.length; i++)
	{
		if (oMaster._keys[i]==oKey)
			return true;
	}
	return false;
}
function MHash_Item(oMaster, oKey)
{
	for (var i=0; i < oMaster._keys.length; i++)
	{
		if (oMaster._keys[i]==oKey)
			return oMaster._values[i];
	}
	return null;
}
var MMU_reDelimEnc=new RegExp(MMU_chDelimEnc, "g");
var MMU_reDelim2Enc=new RegExp(MMU_chDelim2Enc, "g");
var MMU_reDelimDec=new RegExp(MMU_chDelim, "g");
var MMU_reDelim2Dec=new RegExp(MMU_chDelim2, "g");
function MMU_EncVal(strDec)
{
	return strDec.replace(MMU_reDelimDec, MMU_chDelimEnc).replace(MMU_reDelim2Dec, MMU_chDelim2Enc);
}
function MMU_DecVal(strEnc)
{
	return strEnc.replace(MMU_reDelim2Enc, MMU_chDelim2).replace(MMU_reDelimEnc, MMU_chDelim);
}
function MMU_ParseNV(rgnv)
{
	var dictNV=MHash_New();
	var rgstrNV=rgnv.split(MMU_chDelim);
	if (rgstrNV !=null)
	{
		var i;
		for (i=0; i < rgstrNV.length; i++)
		{
			var strNV=rgstrNV[i];
			var iEq=strNV.indexOf("=");
			if (iEq==0)
			{
				continue;
			}
			var name=null;
			var value=null;
			if (iEq < 0)
			{
				name=strNV;
			}
			else
			{
				name=strNV.substr(0, iEq);
				if (iEq < strNV.length - 1)
				{
					value=MMU_DecVal(strNV.substr(iEq+1));
				}
				else
				{
					value="";
				}
			}
			MHash_Add(dictNV, name, value);
		}
	}
	return dictNV;
}
function MMU_ParseNVAttr(elem, attr)
{
	var val=elem.getAttribute(attr);
	if (val==null && elem.childNodes.length > 0 && elem.childNodes[0].nodeType==1)
	{
		val=elem.childNodes[0].getAttribute(attr);
	}
	if (val==null)
	{
		return MHash_New();
	}
	return MMU_ParseNV(val);
}
function MMU_ResetMenuState(menu, dis, hid, chk, tokval)
{
	var i;
	for (i=0; i < menu.childNodes.length; i++)
	{
		var mnu=menu.childNodes[i];
		if (mnu.nodeType !=1)
			continue;
		var mnuId=mnu.getAttribute("id");
		if ((mnu !=null) && (mnuId !=null) && (mnuId.length > 0))
		{
			if (mnu.childNodes.length > 0)
			{
				MMU_ResetMenuState(mnu, dis, hid, chk, tokval);
				continue;
			}
			if (MHash_Exists(hid, mnuId))
			{
				mnu.style.display="none";
			}
			else
			{
				mnu.style.display="";
				var enabledOverride=mnu.getAttribute("enabledOverride");
				if ((enabledOverride !=null) && (enabledOverride.length >0))
				{
					mnu.setAttribute("enabled", enabledOverride);
				}
				else
				{
					if (MHash_Exists(dis, mnuId))
					{
						mnu.setAttribute("enabled", "false");
					}
					else
					{
						mnu.setAttribute("enabled", "true");
						if (MHash_Exists(chk, mnuId))
						{
							mnu.setAttribute("checked", "true");
						}
						else
						{
							mnu.setAttribute("checked", "false");
						}
					}
				}
			}
			MMU_ReplTokValAttr(mnu, "onMenuClick", tokval);
			MMU_ReplTokValAttr(mnu, "text", tokval);
			MMU_ReplTokValAttr(mnu, "description", tokval);
			MMU_ReplTokValVal(mnu, tokval)
		}
	}
}
function MMU_ReplTokValAttr(elem, attr, tokval)
{
	var val=elem.getAttribute(attr);
	var orig=elem.getAttribute(attr+"_Original");
	if ((val !=null) && (orig==null) && (MHash_Count(tokval) > 0))
	{
		elem.setAttribute(attr+"_Original", val);
	}
	else if ((val !=null) && (orig !=null) && (val !=orig))
	{
		val=orig;
	}
	if ((val==null) || (val.length <=0))
	{
		return;
	}
	var newVal=MMU_ReplTokVal(val,  tokval);
	if (newVal !=val)
	{
		elem.setAttribute(attr, newVal);
	}
}
function MMU_ReplTokValVal(item, tokval)
{
	if(item.nextSibling==null)
	{
		return;
	}
	var val=item.nextSibling.nodeValue;
	var orig=item.getAttribute("valOrig");
	if ((val !=null) && (orig==null) && (MHash_Count(tokval) > 0))
	{
		orig=val;
		item.setAttribute("valOrig", orig);
	}
	else if ((val !=null) && (orig !=null) && (val !=orig))
	{
		val=orig;
	}
   var newVal=MMU_ReplTokVal(val,  tokval);
	if ((val !=null) && (newVal !=null) && (newVal !=val))
	{
		item.nextSibling.nodeValue=newVal;
	}
}
function MMU_ReplTokVal(toFix, tokval)
{
	if ((toFix !=null) && (toFix.indexOf("%") >=0) && (tokval !=null) && (MHash_Count(tokval) > 0))
	{
		var toks=MHash_Keys(tokval);
		var vals=MHash_Values(tokval);
		var i;
		for (i=0; i < toks.length; i++)
		{
			var tok=toks[i];
			var val=vals[i];
			toFix=toFix.replace("%"+tok+"%", val);
		}
	}
   return toFix;
}
var g_MMU_HighlightedEcbTable=null;
var g_MMU_HighlightedEcbTableOpen=null;
var g_MMU_OpenTimeoutHandle=null;
function MMU_Open(menu, ecbLink, e, fAlignRight, alignId, delay)
{
	try
	{
		if ((menu==null) || (ecbLink==null))
		{
			return;
		}
		if ((ecbLink.getAttribute("suppressBubbleIfPostback") !=null) && (e !=null) && (e.srcElement !=null) && (e.srcElement.href !=null) &&
			(e.srcElement.href.substr(0, MMU_postbackPrefix.length)==MMU_postbackPrefix))
		{
			event.cancelBubble=true;
			return;
		}
		ClearHighlightedEcbTableOpen();
		if (fAlignRight==null)
		{
			fAlignRight=true;
		}
		MMU_ResetMenuState(menu, MMU_ParseNVAttr(ecbLink, "menuItemsDisabled"), MMU_ParseNVAttr(ecbLink, "menuItemsHidden"),
			MMU_ParseNVAttr(ecbLink, "menuItemsChecked"), MMU_ParseNVAttr(ecbLink, "menuTokenValues"));
		var elemAlign=null;
		if ((alignId !=null) && (alignId.length > 0))
		{
			elemAlign=document.getElementById(alignId);
		}
		if (elemAlign==null)
		{
			elemAlign=document.getElementById(ecbLink.id+"_t");
		}
		if (elemAlign==null)
		{
			elemAlign=ecbLink;
		}
		MMU_EcbHighlight(MMU_GetHighlightElement(ecbLink), true);
		var openMenuScript="MenuHtc_show(document.getElementById('"+menu.id+"'), document.getElementById('"+elemAlign.id+				"'), true, "+fAlignRight+", null);";
		openMenuScript+="SetEcbMouseOutAndDestroy('"+menu.id+"');"
		if ((delay !=null) && (delay > 0))
		{
			openMenuScript+=" g_MMU_OpenTimeoutHandle=null;";
			g_MMU_OpenTimeoutHandle=window.setTimeout(openMenuScript, delay, "javascript");
		}
		else
		{
			eval(openMenuScript);
		}
		if (e !=null)
			e.cancelBubble=true;
	}
	catch (ex)
	{
		alert(L_Loading_Error_Text);
	}
}
function SetEcbMouseOutAndDestroy(menuId)
{
		if (g_MMU_HighlightedEcbTable !=null)
		{
			g_MMU_HighlightedEcbTable.onmouseout=null;
			g_MMU_HighlightedEcbTableOpen=g_MMU_HighlightedEcbTable;
			document.getElementById(menuId)._onDestroy=ClearHighlightedEcbTableOpen;
		}
}
function ClearHighlightedEcbTableOpen()
{
	if (g_MMU_HighlightedEcbTableOpen !=null)
	{
		MMU_EcbHighlight(g_MMU_HighlightedEcbTableOpen, false);
		g_MMU_HighlightedEcbTableOpen=null;
	}
}
function MMU_EcbLinkOnFocusBlurDeferCall(menu, ecbLink, fOnFocus)
{
	if (fOnFocus)
	{
		ecbLink.onblur=fOnFocus ? new Function("MMU_EcbLinkOnFocusBlurDeferCall(null, this, false)") : null;
	}
	if (g_MMU_HighlightedEcbTableOpen !=null)
		return;
	var ecbTable=document.getElementById(ecbLink.id+"_t");
	if (ecbTable !=null)
	{
		MMU_EcbHighlight(ecbTable, fOnFocus);
	}
}
function MMU_EcbLinkOnKeyDown(menu, ecbLink, e)
{
	if (e==null)
	{
		e=window.event;
		if (e==null)
			return;
	}
	var hasHref=((ecbLink.href !=null) && (ecbLink.href.length > 0));
	if (((e.shiftKey || !hasHref) && (GetEventKeyCode(e)==13)) || ((e.altKey) && (GetEventKeyCode(e)==40)))
	{
		var image=byid(ecbLink.id+"_ti");
		if(image==null)
		{
			var serverClientId=ecbLink.getAttribute("serverclientid");
			if ((serverClientId !=null) && (serverClientId.length > 0))
			{
				image=byid(serverClientId+"_ti");
			}
		}
		if (image !=null)
		{
			image.click();
		}
		else
		{
			ecbLink.click();
		}
		return false;
	}
	else
	{
		return true;
	}
}
function MMU_EcbTableMouseOverOutDeferCall(ecbTable, fMouseOver)
{
	if (fMouseOver)
	{
		if (ecbTable==g_MMU_HighlightedEcbTableOpen)
		{
			return;
		}
		ecbTable.onmouseout=fMouseOver ? new Function("MMU_EcbTableMouseOverOut(this, false)") : null;
	}
	MMU_EcbHighlight(ecbTable, fMouseOver);
}
function MMU_EcbHighlight(ecbTable, fHighlight)
{
	if ((ecbTable==null) && (!fHighlight))
	{
		ecbTable=g_MMU_HighlightedEcbTableOpen;
	}
	if (ecbTable==null)
	{
		return;
	}
	if (fHighlight==null)
	{
		fHighlight=false;
	}
	var hoverActive=ecbTable.getAttribute("hoverActive");
	var hoverInactive=ecbTable.getAttribute("hoverInactive");
	if ((hoverActive==null))
	{
		hoverActive="ms-selectedtitle";
	}
	if ((hoverInactive==null))
	{
		hoverInactive="ms-unselectedtitle";
	}
	if (fHighlight)
	{
		ecbTable.className=hoverActive;
		g_MMU_HighlightedEcbTable=ecbTable;
	}
	else
	{
		ecbTable.className=hoverInactive;
	}
	var menuFormat=ecbTable.getAttribute("menuformat");
	var imageCell=document.getElementById(ecbTable.id+"i");
	if (imageCell !=null && menuFormat!=null && menuFormat=="ArrowOnHover")
	{
		imageCell.style.visibility=fHighlight ? "visible" : "hidden";
	}
	if (!fHighlight)
	{
		g_MMU_HighlightedEcbTable=null;
	}
}
function MMU_PopMenuIfShowingDeferCall(menuElement)
{
	if (!IsAccessibilityFeatureEnabledProxy() && g_menuHtc_lastMenu)
	{
		var menuType=g_menuHtc_lastMenu.getAttribute("type");
		if (menuType && menuType=="ServerMenu")
			menuElement.onclick();
	}
}
function MMU_HandleArrowSplitButtonKeyDown(e, id, a ,t)
{
	if (!e.shiftKey &&
		!e.altKey &&
		!e.ctrlKey &&
		(GetEventKeyCode(e)==13))
	{
		t.parentNode.click();
		return;
	}
	return MMU_EcbLinkOnKeyDown(byid(id), a, e);
}
function MMU_GetHighlightElement(elem)
{
	var highlightElement=null
	highlightElement=document.getElementById(elem.id+"_t");
	if (highlightElement !=null)
		return highlightElement;
	else
		return elem;
}
function MMU_GetMenuFromClientId(clientId)
{
	return document.getElementById(clientId);
}
var g_MMU_theFormActionAtPageLoad=null;
var g_MMU_theFormActionAtPreMenuOpen=null;
var g_MMU_Form0ActionAtPageLoad=null;
var g_MMU_Form0ActionAtPreMenuOpen=null;
function MMU_CallbackPreMenuOpen(templateClientId, menuClientId, callbackEventReference, timeoutLength, timeoutMessage, e)
{
	try
	{
		g_MMU_theFormActionAtPreMenuOpen=(theForm !=null ? theForm.action : "null");
		g_MMU_Form0ActionAtPreMenuOpen=(document.forms !=null && document.forms.length > 0 ? document.forms[0].action : "null");
		var menuTemplate=document.getElementById(templateClientId);
		var menuLink=document.getElementById(menuClientId);
		if ((menuLink.getAttribute("suppressBubbleIfPostback") !=null) && (e !=null) && (e.srcElement !=null) && (e.srcElement.href !=null) &&
			(e.srcElement.href.substr(0, MMU_postbackPrefix.length)==MMU_postbackPrefix))
		{
			event.cancelBubble=true;
			return;
		}
		MMU_StopPendingTimerEventsFromCallback();
		MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
		var menu=document.getElementById(menuClientId);
		menu.setAttribute("callbackInProgress", "true");
		var loadingMessageMenuItem=CAMOpt(menuTemplate, L_Loading_Text, "null");
		loadingMessageMenuItem.setAttribute("callbackitem", "true");
		loadingMessageMenuItem.setAttribute("enabled", "false");
		var callbackContext=templateClientId+";"+menuClientId+";"+timeoutMessage.replace(/;/g, "%semi%").replace(/\'/g, "%quot%");
		callbackEventReference=callbackEventReference.replace(/__CALLBACKCONTEXT__/g, callbackContext);
		eval(callbackEventReference);
		g_MMU_RequestTimeoutTimeoutHandle=window.setTimeout("MMU_CallbackErrHandler('timeout', '"+callbackContext+"')", timeoutLength, "javascript");
	}
	catch (ex)
	{
		alert(L_Loading_Error_Text);
	}
}
var g_MMU_RequestTimeoutTimeoutHandle=null;
function MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate)
{
	try
	{
		for (var menuChildIndex=0; menuChildIndex < menuTemplate.childNodes.length; menuChildIndex++)
		{
			var menuChild=menuTemplate.childNodes[menuChildIndex];
			if ((menuChild.nodeType==1) && (menuChild.getAttribute("callbackitem")=="true"))
			{
				menuTemplate.removeChild(menuChild);
				--menuChildIndex;
			}
		}
	}
	catch (ex)
	{
		alert(L_Loading_Error_Text);
	}
}
function MMU_StopPendingTimerEventsFromCallback()
{
	if (g_MMU_OpenTimeoutHandle !=null)
	{
		window.clearTimeout(g_MMU_OpenTimeoutHandle);
		g_MMU_OpenTimeoutHandle=null;
	}
	if (g_MMU_RequestTimeoutTimeoutHandle !=null)
	{
		window.clearTimeout(g_MMU_RequestTimeoutTimeoutHandle);
		g_MMU_RequestTimeoutTimeoutHandle=null;
	}
}
function MMU_UpdateMenuTemplateWithErrorItem(menuTemplate, errorString)
{
	MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
	var errorMenuItem=CAMOpt(menuTemplate, errorString, "null");
	loadingMessageMenuItem.setAttribute("callbackitem", "true");
	loadingMessageMenuItem.setAttribute("enabled", "false");
}
function MMU_UpdateOpenedMenuWithErrorItem(menu, menuTemplate, errorString)
{
	MMU_UpdateMenuTemplateWithErrorItem(menuTemplate, errorString);
	HideMenu(menuTemplate);
	MMU_Open(menuTemplate, menu);
}
function MMU_CallbackHandler(result, contextString)
{
	{
		MMU_StopPendingTimerEventsFromCallback();
		var context=MMU_ParseContext(contextString);
		var menuTemplate=document.getElementById(context.TemplateClientId);
		if (menuTemplate==null) { alert(L_Loading_Error_Text); return; }
		var menu=document.getElementById(context.MenuClientId);
		if (menu==null) { alert(L_Loading_Error_Text); return; }
		var disabledIds="";
		var hiddenIds="";
		var checkedIds="";
		var tokensAndValues="";
		var menuItemsHtml="";
		var parts=result.split(MMU_chDelim);
		if ((parts==null) || (parts.length !=5))
		{
			menuItemsHtml=MMU_GenerateErrorMenuItem(L_Loading_Error_Text);
		}
		else
		{
			var re=new RegExp(MMU_chDelimEnc,"g");
			disabledIds=parts[0].replace(re, MMU_chDelim);
			hiddenIds=parts[1].replace(re, MMU_chDelim);
			checkedIds=parts[2].replace(re, MMU_chDelim);
			tokensAndValues=parts[3].replace(re, MMU_chDelim);
			menuItemsHtml=parts[4].replace(re, MMU_chDelim);
		}
		menu.setAttribute("menuItemsDisabled", disabledIds);
		menu.setAttribute("menuItemsHidden", hiddenIds);
		menu.setAttribute("menuItemsChecked", checkedIds);
		menu.setAttribute("menuTokenValues", tokensAndValues);
		MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
		menuTemplate.innerHTML=menuTemplate.innerHTML+menuItemsHtml;
		HideMenu(menuTemplate);
		MMU_Open(menuTemplate, menu);
		menu.setAttribute("callbackInProgress", "");
	}
	{
	}
}
function MMU_CallbackErrHandler(result, contextString)
{
	try
	{
		alert(L_Loading_Error_Text);
		var context=MMU_ParseContext(contextString);
		var menuTemplate=document.getElementById(context.TemplateClientId);
		if (menuTemplate==null) { alert(L_Loading_Error_Text); return; }
		var menu=document.getElementById(context.MenuClientId);
		if (menu==null) { alert(L_Loading_Error_Text); return; }
		menu.setAttribute("callbackInProgress", "");
		var errorMessage=L_Loading_Error_Text;
		if ((result=="timeout") && (context.TimeoutMessage !=null) && (context.TimeoutMessage.length > 0))
		{
			errorMessage=context.TimeoutMessage;
		}
		MMU_UpdateOpenedMenuWithErrorItem(menu, menuTemplate, errorMessage);
		;
	}
	catch (ex)
	{
		alert(L_Loading_Error_Text);
	}
}
function MMU_ParseContext(contextString)
{
	try
	{
		var context=new Object();
		var values=contextString.split(';');
		context.TemplateClientId=values[0];
		context.MenuClientId=values[1];
		context.TimeoutMessage=values[2].replace(/%semi%/g, ";").replace(/%quot%/g, "\'");
		return context;
	}
	catch (ex)
	{
		alert(L_Loading_Error_Text);
	}
}

