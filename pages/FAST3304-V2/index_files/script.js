equipmentImages = new Array( "alarm_enable.gif","camera_enable.gif","console_enable.gif","homecinema_enable.gif","key_enable.gif","laptop_enable.gif","mediacenter_enable.gif","mobile_enable.gif","mp3_enable.gif","others_enable.gif","pc_enable.gif","pda_enable.gif","phone_enable.gif","photo_enable.gif","pocketconsole_enable.gif","printer_enable.gif","projector_enable.gif","radio_enable.gif","stereo_enable.gif","tv_enable.gif","unknown_enable.gif","videocamera_enable.gif","visiophone_enable.gif","walkman_enable.gif");
ptrEquipementImage = 0;
imagePath = "/images/hardware/equipement/";


var buttState = new Array();
var seconds = 1000; // nr of milliseconds in a second
var totalProgressDuration = 30; // seconds
var stepDuration = 0;
var progress;

imgexpand = new Image();
imgexpand.src = 'images/menu/expand.png';

imgcollapse = new Image();
imgcollapse.src = 'images/menu/collapse.png';

imgarrowrightwhite = new Image();
imgarrowrightwhite.src = 'images/menu/arrowrightwhite.png';

imgarrowrightorange = new Image();
imgarrowrightorange.src = 'images/menu/arrowrightorange.png';

var oldPasswd = "";

function DisplayMenu(menuID) {
	var i;
	var divobj;
	var imgobj;

	for (i=1; i<=3; i++) {
		divobj = document.getElementById('submenu' + i);
		divobj.style.display = 'none';

		imgobj = document.getElementById('imgmenu' + i);
		imgobj.src = imgexpand.src;
	}

	divobj = document.getElementById('submenu' + menuID);
	divobj.style.display = 'block';

	imgobj = document.getElementById('imgmenu' + menuID);
	imgobj.src = imgcollapse.src;
}

function MouseOnArrow(row, imgName) {
	obj = document.getElementById(imgName);

	row.style.background = '#FF6600';
	obj.src = imgarrowrightwhite.src;
}

function MouseOutArrow(row, imgName) {
	obj = document.getElementById(imgName);

	row.style.background = '#FFFFFF';
	obj.src = imgarrowrightorange.src;
}


function ButtonOver(type, buttName) {
	if (buttState[buttName] == 0)
		return;

	linkobj = document.getElementById('link' + buttName);

	linkobj.style.color = '#FF6600';
}

function ButtonOut(type, buttName) {
	if (buttState[buttName] == 0)
		return;

	//ButtonUp(type, buttName);

	linkobj = document.getElementById('link' + buttName);

	linkobj.style.color = '#000000';
}

function ButtonDown(type, buttName) {
	if (buttState[buttName] == 0)
		return;
	
	rowobj = document.getElementById('row' + buttName);
	imgobj = document.getElementById('img' + buttName);
	linkobj = document.getElementById('link' + buttName);

	rowobj.style.backgroundImage = 'url(images/button/right-clic.gif)';
	imgobj.src = 'images/button/left-' + type + '-clic.gif';
	linkobj.style.color = '#FFFFFF';
}

function ButtonUp(type, buttName) {
	if (buttState[buttName] == 0)
		return;

	rowobj = document.getElementById('row' + buttName);
	imgobj = document.getElementById('img' + buttName);
	linkobj = document.getElementById('link' + buttName);

	rowobj.style.backgroundImage = 'url(images/button/right-normal.gif)';
	imgobj.src = 'images/button/left-' + type + '-normal.gif';
	linkobj.style.color = '#000000';
}

function ButtonEnable(type, buttName) {
	buttState[buttName] = 1;

	rowobj = document.getElementById('row' + buttName);
	imgobj = document.getElementById('img' + buttName);
	linkobj = document.getElementById('link' + buttName);

	rowobj.style.backgroundImage = 'url(images/button/right-normal.gif)';
	imgobj.src = 'images/button/left-' + type + '-normal.gif';
	linkobj.style.color = '#000000';
}

function ButtonDisable(type, buttName) {
	buttState[buttName] = 0;

	rowobj = document.getElementById('row' + buttName);
	imgobj = document.getElementById('img' + buttName);
	linkobj = document.getElementById('link' + buttName);

	rowobj.style.backgroundImage = 'url(images/button/right-disable.gif)';
	imgobj.src = 'images/button/left-' + type + '-disable.gif';
	linkobj.style.color = '#666666';
}

function AllButtonEnable(liste) {
	var i;

	if (liste.length < 2)
		return;

	if (liste.length % 2)
		return;

	for (i=0; i<liste.length; i=i+2)
		ButtonEnable(liste[i], liste[i+1]);
}

function AllButtonDisable(liste) {
	var i;

	if (liste.length < 2)
		return;

	if (liste.length % 2)
		return;

	for (i=0; i<liste.length; i=i+2)
		ButtonDisable(liste[i], liste[i+1]);
}

function MouseDownVignette(num) {
	var obj;

	obj = document.getElementById('vignette' + num);

	obj.style.backgroundImage = 'url(images/hardware/round_bg_clic.gif)';
}

function MouseUpVignette(num) {
	var obj;

	obj = document.getElementById('vignette' + num);

	obj.style.backgroundImage = 'url(images/hardware/round_bg.gif)';
}






function FieldGenericPage() {
	obj = document.form_contents;

	n = obj.length;

	flag = true;

	for (i=0; i<n; i++) {
		if ((obj.elements[i].type == 'text') || (obj.elements[i].type == 'password')) {
			str = obj.elements[i].value;

		//	if (str.length == 0)
		//		flag = false;
		}
	}

	if (flag)
		AllButtonEnable(arguments);
	else
		AllButtonDisable(arguments);
}

function CheckboxGenericPage () {
 AllButtonEnable(arguments);
}

function FieldLivezoomControlChange() {
	obj = document.form_contents;
	flag = false;
	if ((obj.elements[0].checked == true ) || (obj.elements[1].checked == true))
		flag = true;
	

	if (!flag)
		AllButtonEnable(arguments);
	else
		AllButtonDisable(arguments);
}

function FieldCheckboxControl(Controle) {
obj = document.form_contents;
n = obj.length;
var objControle = document.getElementById(Controle);
	for (i=0; i<n; i++)
		if(objControle.checked == false)
		{
			if (obj.elements[i].name != objControle.name)
			obj.elements[i].disabled = true;
			}
			else
			obj.elements[i].disabled = false;
	
}
function FieldCheckboxControlDisabled(Controle) {
obj = document.form_contents;
n = obj.length;
var objControle = document.getElementById(Controle);
	for (i=0; i<n; i++)
		if (obj.elements[i].name != objControle.name)
			obj.elements[i].disabled = true;
}

function FieldWirelessConnectionEnabled() {
	obj = document.form_contents;
	n = obj.length;
	flag = false;
	for (i=0; i<n; i++) 
	{
		if ((obj.elements[i].type == 'text')) {
			str = obj.elements[i].value;
			if (str.length != 0)
				flag = true;
		}
		else if ((obj.elements[i].type == 'list'))
		{
			obj.elements[i].list.option.selectedIndex = true;
			flag = true;
		}
		else
		{
			if((obj.elements[i].type == 'CHECKBOX'))
			{
				obj.elements[i].checked==true;
				flag = true;
			}
		}
	}
	if (flag)
		AllButtonEnable(arguments);
	else
		AllButtonDisable(arguments);	
}

function FieldFirewallControlChange() {
	obj = document.form_contents;
	flag = false;
	if ((obj.elements[0].checked == true ) || (obj.elements[2].checked == true)) 
		flag = true;
	if (!flag)
		AllButtonEnable(arguments);
	else
		AllButtonDisable(arguments);
}

function FieldWirelessControl(Controle,Simple,Butt1,Simple,Butt2) {
obj = document.form_contents;
//n = obj.length;
var objControle = document.getElementById(Controle);
/*
if(objControle.checked == false)
{
	for (i=0; i<n; i++)
	{
		if (obj.elements[i].name != objControle.name)
		obj.elements[i].disabled = true;
	}
}
else
{
	for (i=0; i<n; i++)
	{
		if (obj.elements[i].name != objControle.name)
		obj.elements[i].disabled = false;
	}


}
*/
if (objControle.checked)
	AllButtonEnable(Array(Simple,Butt1,Simple,Butt2));
else
	AllButtonDisable(Array(Simple,Butt1,Simple,Butt2));

}



function FieldDdnsControlChange() {
	obj = document.form_contents;

	n = obj.length;

	for (i=0; i<n; i++) {
             obj.elements[i].disabled == 'disabled';

	}
}

function my_fun(name, id)
{
	document.getElementById(name).value = id;
	lb_mimic_button('submit: ...', 0, 'butt1');
}


function checkPswdLength(str, id)
{
	var obj=0;
	var len=0;
	obj= document.getElementById(id)
	len = str.length;
	
	if ( (len < 4) || (len > 32) ){
		obj.style.display = 'block'
	}
	else {
		obj.style.display = 'none'
	}	
}

function check_len_password(id_div, len)
{
	var obj, chek_box;
	obj = document.getElementById(id_div);
	chek_box = document.getElementById('checkbox_administration');

	if((len < 4 || len > 32) && chek_box.checked==false)
  	    obj.style.display = 'block';
	else
  	    obj.style.display = 'none';
}

function check_same_password(id_div, conf_pass, olpass)
{
	var obj, chek_box;
	obj = document.getElementById(id_div);
	chek_box = document.getElementById('checkbox_administration');

	if((conf_pass != olpass) && chek_box.checked==false)
 	    obj.style.display = 'block';
	else
	    obj.style.display = 'none';
}

// Reload this page, by submitting the search for firmware form.
function btnSearchFirmware()
{
	document.getElementById("id_dlg_install").style.display = '';
	document.getElementById("id_dlg_failed").style.display = 'none';
	document.getElementById("id_dlg_search").style.display = 'none';
}

function btnhiddenFirmware()
{
	document.getElementById("id_dlg_install").style.display = 'none';
	document.getElementById("id_dlg_failed").style.display = 'none';
	document.getElementById("id_dlg_search").style.display = 'none';
}
function btnloadFirmware()
{
	document.getElementById("id_reinit").style.display = 'none';
	document.getElementById("id_dlg_install").style.display = 'none';
	document.getElementById("id_dlg_failed").style.display = 'none';
	document.getElementById("id_dlg_search").style.display = '';
}

function Detectemptybox()
{
	flag1=true;
	flag2=true;
	str=document.getElementById("username").value;
	if (str.length == 0)
	      flag1 = false;

    str=document.getElementById("password").value;
	if (str.length == 0)
	            flag2 = false;

	if(flag1==false)
	{
		document.getElementById("id_hidden").value="1";
		document.getElementById("alerte-user").style.display = '';
	}
	else
	{
		document.getElementById("id_hidden").value="0";
		document.getElementById("alerte-user").style.display = 'none';

	}

	if(flag2==false)
		document.getElementById("alerte-pass").style.display = '';
	else
		document.getElementById("alerte-pass").style.display = 'none';

	if(flag2==false || flag1==false)
		return false;
	else
		return true;
		

}

//
// Progress bar
//
function initProgressBar()
{
  document.getElementById("progressbar_id").style.width='10px';
  progress=0;
  stepDuration = seconds * totalProgressDuration / 394
}





function startProgressBar()
{
	if (progress < 0) {
		// force the progressbar to stop, don't call onEndProgressBar
	}
	// value of progress = #progressbar.width (see styles.css)  - padding.left - padding.right - 1
	else if (progress <= 394)
	{
		document.getElementById("progressbar_id").style.width = progress + "px";
		setTimeout("startProgressBar();", stepDuration);
		progress++;   
	}
	
}

function btnshowbar()
{
	initProgressBar();
	startProgressBar();

}

function display_remote_access()
{
	var obj, obj2;
	var flag1, flag2, n;
	obj = document.getElementById('hiddensubcontener');

	obj2 = document.form_contents;
	n = obj2.length;
	flag1 = false;
	flag2 = false;

	for (i=0; i<n; i++) 
	{
		if ((obj2.elements[i].type == 'radio')) {
			if ((obj2.elements[i].name == "radio_activation") && (obj2.elements[i].value == 1) && (obj2.elements[i].checked == true))
			flag1 = true;
			if ((obj2.elements[i].name == "radio_mode") && (obj2.elements[i].value == 1) && (obj2.elements[i].checked == true))
			flag2 = true;
		}
	}

	if (flag1 && flag2)
		obj.style.display = 'block';
	else
		obj.style.display = 'none';
}

function enable_remote_mode()
{
	var obj;
	obj = document.form_contents;
	n = obj.length;
	for (i=0; i<n; i++) 
	{
		if ((obj.elements[i].type == 'radio') && (obj.elements[i].name == "radio_mode"))
			obj.elements[i].disabled = false;
	}
}

function disable_remote_mode()
{
	var obj;
	obj = document.form_contents;
	n = obj.length;
	for (i=0; i<n; i++) 
	{
		if ((obj.elements[i].type == 'radio') && (obj.elements[i].name == "radio_mode"))
			obj.elements[i].disabled = true;
	}
}

//progressBar
var progressBarValue;
var progressBarWidth;
var progressBarFG = '#9999FF';
var progressBarBG = '#FFFFFF';
var progressBarBorderColor = '#000000';
var progressBarBorderWidth = 2;
fini = true;

function mainProgressBar(width)
{
	setProgressBar(500);
	progressBarWidth = width;
	document.write('<div id="MyprogressBar" >here will be the progress bar</div>');
	dispProgressBar();
	return true;
}

function dispProgressBar()
{
	var html = '';
	var td1 = '';
	var td2 = '';
	var td3;
	var timer;
	var timer = getProgressBar();

	html += '<div class="borderBody" style="padding: 0px 1px;">';
		html += '<div style="background-color: rgb(255, 102, 51); height: 10px; width: '+ timer +';"></div>';
	html += '</div>';
	writeToLayer('MyprogressBar', html);
}

function setProgressBar(value)
{
	if (value < 0) {
		progressBarValue = 0;
	}
	else if (value > 500) {
		progressBarValue = 500;
	}
	else {
		progressBarValue = value;
	}
	return true;
}

function getProgressBar()
{
	return progressBarValue;
}

function augmenterRegulierement () {

	if (getProgressBar() != 0) {

		setProgressBar(getProgressBar()-1);

		dispProgressBar();

		setTimeout("augmenterRegulierement()", 2000);
	}

	else {

		fini = true;

	}

}

function commencer()
{
	if (fini) {

		fini = false;

		setProgressBar(405);
		dispProgressBar();
		augmenterRegulierement();
	}
}

function stop()
{
	setProgressBar(1);
}

function repeat()
{
	setProgressBar(405);
	commencer();
}

//ProgressBar tools
var isDHTML = 0;
var isLayers = 0;
var isAll = 0;
var isID = 0;
var isBusy = false;

if (document.getElementById) {
	isID = 1; isDHTML = 1;
} else {
	browserVersion = parseInt(navigator.appVersion);
	if ((navigator.appName.indexOf('Netscape') != -1) && (browserVersion == 4)) {
		isLayers = 1; isDHTML = 1;
	} else {
		if (document.all) {
			isAll = 1; isDHTML = 1;
		}
	}
}

function findDOM(objectID,withStyle) {
	if (withStyle == 1) {
		if (isID) {
			return (document.getElementById(objectID).style);
		} else {
			if (isAll) {
				return (document.all[objectID].style);
			} else {
				return getObjNN4(top.document,objectID);
			}
		}
	} else {
		if (isID) {
			return (document.getElementById(objectID));
		} else {
			if (isAll) {
				return (document.all[objectID]);
			} else {
				if (isLayers) {
					return getObjNN4(top.document,objectID);
				}
			}
		}
	}
}

function getObjNN4(obj,name)
{
	var x = obj.layers;
	for (var i=0;i<x.length;i++)
	{
		if (x[i].id == name)
			return x[i];
		else if (x[i].layers.length)
			var tmp = getObjNN4(x[i],name);
		if (tmp) return tmp;
	}
	return null;
}

function writeToLayer ( id, text )
{
	x = findDOM( id, 0 );

	if ( !x )
		return;
	if ( isLayers ) {
		if ( isBusy ) {
			setTimeout ( "writeToLayer( '" + id + "', '" + text + "' )", 20 );
		} else {
			isBusy = true;
			x.document.write(text);
			x.document.close();
			isBusy = false;
		}
	} else {
		x.innerHTML = text;
	}
}
//end progressbar
 function defaultEnterAction()
 {
	return true;
}

function keypressfunction(e)
 {
 	var keynum;

 	if(window.event) //IE
 	{
 		keynum = e.keyCode;
 	}
 	else
 	{
 		keynum = e.which;
 	}

 	if (keynum == 13)
 	{
 		try
 		{
                        SendPassword();
 			return defaultEnterAction();
 		}
		catch(err)
		{
 			return false;
 		}
 	}
 }


function nextIcon() {
	var imageElement = ptrEquipementImage;
	imageElement ++;

	if(imageElement>=equipmentImages.length)
		imageElement = 0;

	DisplayPicto(imageElement);
}

function previousIcon() {
	var imageElement = ptrEquipementImage;
	imageElement --;

	if(imageElement<0)
		imageElement = equipmentImages.length - 1;

	DisplayPicto(imageElement);
}

function DisplayPicto(value) {
	var imagepicto = document.getElementById('equipmentIcon');
	var filename = imagePath + equipmentImages[value];

	imagepicto.src = filename;
	ptrEquipementImage = value;
	document.getElementById('id_equ').value = value;
}




function display_upnp_table()
{
	var obj, obj1, obj2;
	var flag1, n;
	obj = document.getElementById('hiddensubcontener1');
	obj1 = document.getElementById('hiddensubcontener2');
	obj3 = document.getElementById('hiddensubcontener3');

	obj2 = document.form_contents;
	n = obj2.length;
	flag1 = false;

	for (i=0; i<n; i++) 
	{
		if ((obj2.elements[i].type == 'radio')) {
			if ((obj2.elements[i].name == "radio_activation") && (obj2.elements[i].value == 1) && (obj2.elements[i].checked == true))
			flag1 = true;
			
		}
	}

	if (flag1)
               {
		obj.style.display = 'block';
		obj1.style.display = 'block';
		obj3.style.display = 'block';
	       } 
	else
	       {
		obj.style.display = 'none';
		obj1.style.display = 'none';
		obj3.style.display = 'none';
               }
}

//////////////////////

ptrRoom = 0;
arrayRoom = new Array();
arrayRoom[0] = '/images/hardware/room/bureau_50x50.gif';
arrayRoom[1] = '/images/hardware/room/chambre1_50x50.gif';
arrayRoom[2] = '/images/hardware/room/chambre2_50x50.gif';
arrayRoom[3] = '/images/hardware/room/chambre3_50x50.gif';
arrayRoom[4] = '/images/hardware/room/chambre4_50x50.gif';
arrayRoom[5] = '/images/hardware/room/chambre5_50x50.gif';
arrayRoom[6] = '/images/hardware/room/cuisine_50x50.gif';
arrayRoom[7] = '/images/hardware/room/entree_50x50.gif';
arrayRoom[8] = '/images/hardware/room/garage_50x50.gif';
arrayRoom[9] = '/images/hardware/room/itinerant_50x50.gif';
arrayRoom[10] = '/images/hardware/room/jardin_50x50.gif';
arrayRoom[11] = '/images/hardware/room/salleamanger_50x50.gif';
arrayRoom[12] = '/images/hardware/room/salledebain_50x50.gif';
arrayRoom[13] = '/images/hardware/room/salon_50x50.gif';
arrayRoom[14] = '/images/hardware/room/terrasse_50x50.gif';

function DisplayRoom(value) {
	if (value < 0)
	  value = arrayRoom.length - 1;
	if (value >= arrayRoom.length)
	  value = 0;
	
	document.getElementById('id_room').value = value;
	document.getElementById('id_room_ico').src = arrayRoom[value];

	ptrRoom = value;
}

function DisplayRoomNext() {
	value = ptrRoom + 1;

	DisplayRoom(value);
}

function DisplayRoomPrev() {
	value = ptrRoom - 1;

	DisplayRoom(value);
}


