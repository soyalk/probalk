var g_user_level = 15;
var g_sys_feature = "";
var g_sys_support3g = 0;
var g_sys_supportsmb = 0;
var g_sys_share_mgt = 0;
var g_sys_disk_mgt = 0;
var g_sys_hint_style = 0;//0:hide 1:display
var g_sys_supporttr069 = 1;//0:hide 1:display
var g_sys_supportsnmp = 0;
var g_sys_supporttr064 = 0;
var g_layout_style = "";//0:old style, 1:new style
var g_layout_style = "GENERIC";
var g_hostname = "";
var g_fwVersion = "V1.04.C30"; 
var g_copyright;
var g_logoutTime=10;
var g_fonap=0;


function __CheckSysFeature(sysfeature, item)
{
	var i=0;
	var arr = sysfeature.split(" ");
	for (i=0; i<arr.length; i++)
	{
		if (arr[i] == item)
			return 1;
	}
	return 0;
}

g_layout_style = "GENERIC";
g_sys_feature = "fonap=0 wan3g=0 wifi=1 smb=0 share_mgt=0 disk_mgt=0 mp_test=1 lpd=0 wapi=0 hint=1 snmp=1 tr64=0 tr069=0";
g_fwVersion = "V2.05.C17GVD";
g_copyright = "Copyright &copy; 2010 " + "Technicolor" + ". All Rights Reserved";
g_user_level = "-1";
g_sys_support3g = __CheckSysFeature(g_sys_feature, "wan3g=1");
g_sys_supportsmb = __CheckSysFeature(g_sys_feature, "smb=1");
g_sys_share_mgt = __CheckSysFeature(g_sys_feature, "share_mgt=1");
g_sys_disk_mgt = __CheckSysFeature(g_sys_feature, "disk_mgt=1");
g_sys_supportlpd = __CheckSysFeature(g_sys_feature, "lpd=1");
g_sys_wapi = __CheckSysFeature(g_sys_feature, "wapi=1");
g_sys_hint_style = __CheckSysFeature(g_sys_feature, "hint=0");
g_sys_supportsnmp = __CheckSysFeature(g_sys_feature, "snmp=1");
g_sys_supporttr064 = __CheckSysFeature(g_sys_feature, "tr64=1");
g_fonap= __CheckSysFeature(g_sys_feature, "fonap=1");
if(__CheckSysFeature(g_sys_feature, "tr069=0") == 1)
	g_sys_supporttr069 = 0;
else
	g_sys_supporttr069 = 1;
g_hostname = "Wireless N ADSL 2/2+ Modem Router";

top.document.title= g_hostname;	
