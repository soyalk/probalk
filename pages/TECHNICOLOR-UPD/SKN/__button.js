function apply(fn)
{
	if(fn=="")
		document.write("<input type='submit' name='apply' value=\""+m_apply+"\">");
	else
		document.write("<input type='button' name='apply' value=\""+m_apply+"\" onClick='"+fn+"'>");
}
function cancel(fn)
{
	if(fn=="") fn="self.location.reload();";
	document.write("<input type='button' name='cancel' value=\""+m_cancel+"\" onClick='"+fn+"'>");
}
function uiDoRefresh(fn)
{
	if(fn=="") fn="self.location.reload();";
	document.write("<input type='button' name='refresh' value=\""+m_b_refresh+"\" onClick='"+fn+"'>");
}
// button for wizard ---------------------------------------------------------
function prev(fn)
{
	if(fn=="") fn="go_prev()";
	document.write("<input type='button' name='prev' value=\""+m_prev+"\" onClick='"+fn+"'>&nbsp;");
}
function skip(fn)
{
	document.write("<input type='button' name='skip' value=\""+m_skip+"\" onClick='"+fn+"'>&nbsp;");
}
function next(fn)
{
	if(fn=="")
		document.write("<input type='submit' name='next' value=\""+m_next+"\">&nbsp;");
	else
		document.write("<input type='button' name='next' value=\""+m_next+"\" onClick='return "+fn+"'>&nbsp;");
}

function exit()
{
	document.write("<input type='button' name='exit' value=\""+m_cancel+"\" onClick='exit_confirm()'>&nbsp;");
}
function exit_confirm()
{
	if(confirm(a_quit_wiz)==true)
	top.location.href="/";
}
function wiz_save(fn)
{
	if(fn=="") fn="do_save()";
	document.write("<input type='submit' name='save' value=\""+ m_save+"\" onClick='"+fn+"'>&nbsp;");
	
}
function wiz_connect(fn)
{
	if(fn=="") fn="do_save()";
	document.write("<input type='button' name='save' value=\""+m_connect+"\" onClick='"+fn+"'>&nbsp;");
	
}
function bt_continue(fn)
{
	if(fn=="") fn="do_continue()";
	document.write("<input type='button' name='ct' value=\""+m_continue+"\" onClick='"+fn+"'>&nbsp;");
	
}

function bt_gen(name,value,fn)
{
	if(fn=="")
		document.write("<input type='submit' name='"+name+"' id='"+name+"' value=\""+value+"\">");
	else
		document.write("<input type='button' name='"+name+"' id='"+name+"' value=\""+value+"\" onClick='"+fn+"'>");
}
function bt_gen_str(name,value,fn)
{
	var str="";
	if(fn=="")
		str+="<input type='submit' name='"+name+"'value=\""+value+"\">";
	else
		str+="<input type='button' name='"+name+"' value=\""+value+"\" onClick='"+fn+"'>";
	return str;
}

function wizard_next(fn)
{
	if(fn=="")
		document.write("<input type='submit' name='next' value=\""+m_next+"\">");
	else
		document.write("<input type='button' name='next' value=\""+m_next+"\" onClick='"+fn+"'>");
}

function wizard_reboot(fn)
{
	if(fn=="")
		document.write("<input type='submit' name='Reboot' value=\""+m_next+"\">");
	else
		document.write("<input type='button' name='Reboot' value=\""+m_next+"\" onClick='"+fn+"'>");
}


// --------------------------------------------------------------------------
