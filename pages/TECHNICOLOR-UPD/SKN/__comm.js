
//here is the common vars used;
//var m_fwVersion ="1.04.B04"; // this version should be consistent with core\userapps\include\version.h  __CODE_VERSION__
var m_copyright = 1.04.B04;

//for Home_inter.shtml
var a_quit_wiz		="Are you sure you want to quit the Setup Wizard and discard settings?";
var m_pre_title		="| WIRELESS ROUTER | ";
var m_product_page		="Product Page";
var m_hw_ver		="Hardware Version";
var m_fw_ver		="Firmware Version";
var m_nochg_title		="No Change";
var m_nochg_dsc		="Settings are not changed.";
var m_saving_title		="Saving";
var m_saving_dsc		="The settings are saving and taking effect. <br><br> Please wait ...";
var m_back			="Back";
var m_continue		="Continue";
var m_apply	="Apply";
var m_cancel	="Cancel"; //"Reset"
var m_ipaddr		="IP Address";
var m_netmask		="Subnet Mask";

//start of __comm.js
var m_range         =" Range between ";
var m_numeric       ="value must be numeric!";
var m_out_of_range  ="value out of range!";
var m_not_ios_8859_1  ="Found a non-ISO-8859-1 character at position: ";
var m_not_ios_8859_2  =",\nPlease eliminate before continuing."
//end of __comm.js

//start of __ip.js
var m_ip_range   ="IP Range: ";
var m_or              =" or ";
var m_end_less_start   ="Ending IP address is less than the Starting IP address.";
//end of __ip.js

var m_prev			="Back";
var m_next			="Next";
var m_cancel		="Cancel";
var m_save			="Save";
var m_skip			="Skip";
var m_connect		="Connect";
var m_clear		    ="Clear";

var m_name			="Name";
var m_user_name		="Username";
var m_password		="Password";
var m_c_password		="Confirm Password";

var m_port			="Port";
var m_schedule		="Schedule";
var m_traffic_type		="Traffic Type";
var m_macaddr		="MAC Address";
var m_always		="Always";
var m_never		="Never";
var m_auto			="Auto";
var m_none			="None";
var m_disable		="Disable";
var m_enable		="Enable";
var m_disabled		="Disabled";
var m_enabled		="Enabled";

var m_off		    ="Off";
var m_on		    ="On";
var m_add = "Add";
var m_edit			="Edit";
var m_del			="Delete";
var m_restart			="Restart";

var m_reboot        ="Go to <a href=/tools/tools_system.htm>MAINTENANCE -> System</a> and click the Reboot button to restart the device <br>and let your new settings take effect!";
var m_note_reboot = "<font color=red><strong>Note:</strong> "+m_reboot+"</font>";
var a_sure_to_reboot	="Reboot the device ?";
var m_del_msg = "Are you sure you want to delete this entry?";
var m_edit_msg = "Please select an item to edit!";
var m_edit_msg1 = "Please select only one item to edit!";

var m_b_refresh = "Refresh";
var m_remove = "Remove";
var m_select = "(Click to Select)";
var m_er_select = "At least one condition must be specified.";
var m_ppp_con = 		"DSL Router Connection";
var m_ppp_discon = 	"DSL Router Disconnection";
//var m_copyright				="Copyright &copy; 2010 TRENDnet. All Rights Reserved";
var m_sutemap				="Site Map";

var m_blank = "&nbsp;&nbsp;:&nbsp;&nbsp;";
//--Home_inter.shtml

var m_title_mac = "Firewall -- MAC Filter";
var m_title_ip = "Firewall -- IP Filter";
var m_title_url = "Firewall -- Bridge Filtering";
var m_dsc_mac = "Manage incoming traffic.";
var m_dsc_ip = "Inbound";
var m_dsc_url = "Manage outgoing traffic.";
var m_btn_mac = "MAC Filter";
var m_btn_ip = "IP Filter";
var m_btn_url = "URL Filter";

// for home_wizard_start.shtml
var m_btn_next= "Next";
var m_btn_csetup="Cancel";

//for home_wizard_step1.shtml
var m_btn_back="Back";
var m_dsc_step1="Create DSL WAN interface.";
var m_csetup="Cancel";

var m_dsc_step2="Create IP Connection.";
var m_btn_reboot="Reboot";

// for Adv_firewall.shtml
var m_title_mac_filter = "Firewall Setup -- Mac Filter";
var m_dsc_mac_filter = "Click the MAC Filter button to configure the device MAC filter rules.You can block PC access to your network and Internet. ";
var m_btn_mac_filter = "Mac Filter";

var m_title_ip_filter = "Firewall Setup -- IP Filter";
var m_dsc_ip_filter = "Click the IP Filter button to configure the device IP filter rules. You can block PC access to your network and Internet.";
var m_btn_ip_filter = "IP Filter";

var m_title_url_filter = "Firewall Setup -- URL Filter";
var m_dsc_url_filter = "Click the URL Filter button to configure the device URL filter rules such as myspace.com or keywords.";
var m_btn_url_filter = "URL Filter";

var m_title_dos_protection = "Firewall Setup -- Dos Protection";
var m_dsc_dos_protection = "Click the DoS Proection button to configure the device DoS settings.";
var m_btn_dos_protection = "Dos Protection";

var m_title_domain_blocking = "Firewall Setup -- Domain Blocking";
var m_dsc_domain_blocking = "Click the Domain Blocking button to configure the blocking rules.";
var m_btn_domain_blocking = "Domain Blocking";
// for adv_packet_filter.shtml
var m_title_filter_rule = "Packet Filter -- Filters & Rules";
var m_dsc_filter_rule = "Click Filter & Rules button to configure the device filter rules.";
var m_btn_filter_rule = "Filters & Rules";

var m_title_filter_statistics = "Packet Filter -- Statistics";
var m_dsc_filter_statistics = "Click on Statistics button to view the device packet statistics";
var m_btn_filter_statistics = "Statistics"

// for adv_multicast.shtml
var m_title_igmp_rule = "Multicast -- IGMP";
var m_dsc_igmp_rule = "Click IGMP button to configure the device IGMP settings.";
var m_btn_igmp_rule = "IGMP";

var m_title_mld_rule = "Multicast -- MLD";
var m_dsc_mld_rule = "Click MLD button to configure the device MLD settings.";
var m_btn_mld_rule = "MLD";

//mcj: add spi settings page ,merge endpoint settings to here
var m_title_spi = "Firewall Setup -- SPI Settings";
var m_dsc_spi = "Click on the SPI Settings to configure the device SPI (Stateful Packet Inspection) settings.";
var m_btn_spi = "SPI Settings";

var m_title_dmz = "Firewall Setup -- DMZ";
var m_dsc_dmz = "Click the DMZ button to configure the device DMZ settings.";
var m_btn_dmz = "DMZ";

//for Adv_nat.shtml
var m_title_nat_vs = "Nat Setup -- Virtual Server";
var m_dsc_nat_vs = "&nbsp;Click on Virtual Server button to configure or add a virtual server rule.";
var m_btn_nat_vs = "Virtual Server";

var m_title_port_triger = "Nat Setup -- Port Triger";
var m_dsc_port_triger = "&nbsp;Click on Port Trigger button to configure or add trigger rules.";
var m_btn_port_triger = "Port Triger";

var m_title_alg_setting = "Nat Setup -- ALG Setting";
var m_dsc_alg_setting = "&nbsp;Click on ALG Setting to configure the device ALG settings.";
var m_btn_alg_setting = "ALG Setting";

var m_title_vpn_setting = "Nat Setup -- VPN Setting";
var m_dsc_vpn_setting = "&nbsp;Click the VPN Settings button to configure the device VPN settings.";
var m_btn_vpn_setting = "VPN Setting";

var m_title_endpoint_filter = "Nat Setup -- Endpoint Filter";
var m_dsc_endpoint_filter = "Endpoint Filter.";
var m_btn_endpoint_filter = "Endpoint Filter";

//for Adv_qos.shtml
var m_title_qmgmt = "Quality of Service -- Queue Management";
var m_dsc_qmgmt = "Click on Queue Management  to configure the device QoS queue.";
var m_btn_qmgmt = "Queue Management";

var m_title_qcfg = "Quality of Service -- Queue Config";
var m_dsc_qcfg = "Click on Queue Config  to configure the device QoS queue entries.";
var m_btn_qcfg = "Queue Config";

var m_title_qclass = "Quality of Service -- QoS Classification";
var m_dsc_qclass = "Click on QoS Classification button to configure the QoS classification rules.";
var m_btn_qclass = "QoS Classification";

var m_title_qstatus = "Quality of Service -- QoS Status";
var m_dsc_qstatus = "Click on QoS Status button to view the device QoS status.";
var m_btn_qstatus = "QoS Status";

//for Adv_fon_ap
var m_title_fonap_sm = "FONAP of Service -- Status Manager";
var m_dsc_fonap_sm = "Click on Status Manager to configure the parameters of status manager.";
var m_btn_fonap_sm = "Status Manager";

var m_title_fonap_rc = "FONAP of Service -- Radius Config";
var m_dsc_fonap_rc = "Click on Radius Config to configure the parameters of radius config.";
var m_btn_fonap_rc = "Radius Config";

var m_title_fonap_ch = "FONAP of Service -- Coova Chilli";
var m_dsc_fonap_ch = "Click on QoS Coova Chilli button to configure the parameters of coova chilli.";
var m_btn_fonap_ch = "Coova Chilli";

//for Adv_wan.shtml
var m_title_setup="DSL Setup Wizard";
var m_dsc_setup="You can follow the instructions to modify the current WAN settings step by step by clicking the 'Setup Wizard' button.";
var m_btn_wizard="Setup Wizard";

var m_title_dsl = "Wan Setup -- DSL(ATM)";
var m_dsc_dsl = "Configure the CPE DSL setting for WAN interface.";
var m_btn_dsl = "DSL Config";
/*
var m_title_dsl_setup = "Internet Setup -- DSL";
var m_dsc_dsl_setup = "Configure the CPE DSL setting for WAN interface.";
var m_btn_dsl_setup = "DSL Setup";

var m_title_3g_setup = "Internet Setup -- 3G Modem";
var m_dsc_3g_setup = "Configure the CPE 3G Modem setting for WAN interface.";
var m_btn_3g_setup = "3G Setup";
*/
var m_title_dsl_scan = "Wan Setup -- DSL Auto Scan List";
var m_dsc_dsl_scan = "Click Auto Scan button below to edit scan list values.";
var m_btn_dsl_scan = "DSL Auto Scan List";

var m_title_wan = "Wan Setup -- WAN Config";
var m_dsc_wan = "Click WAN Config button to configure WAN settings.";
var m_btn_wan = "WAN Config";

var m_title_default_route = "Wan Setup -- Default Route";
var m_dsc_default_route = "Click Default Route button to set the route of the device.";
var m_btn_default_route = "Default Route";

//for Adv_wireless.shtml
var m_title_adv_setting = "Advanced Wireless Setup -- Advanced Setting";
var m_dsc_adv_setting = "Click on Advanced Setting button to configure the wireless interface.";
var m_btn_adv_setting = "Advanced Setting";

var m_title_mbssid_setting = "Advanced Wireless Setup -- MBSSID Setting";
var m_dsc_mbssid_setting = "Click on MBSSID Setting button to configure the MBSSID settings";
var m_btn_mbssid_setting = "MBSSID Setting";

var m_title_wmm_setting = "Advanced Wireless Setup -- WMM Setting";
var m_dsc_wmm_setting = "WMM Setting.";
var m_btn_wmm_setting = "WMM Setting";

//var m_title_mac_filter = "Advanced Wireless Setup -- MAC Filter";
//var m_dsc_mac_filter = "Click on MAC Filter button to configure the device wireless MAC filter.";
//var m_btn_mac_filter = "MAC Filter";

var m_title_wps_setting = "Advanced Wireless Setup -- WPS Setting";
var m_dsc_wps_setting = "Click on the WPS Setting button to configure the device WPS settings.";
var m_btn_wps_setting = "WPS Setting";

// ----- Julia_100202 -----
// Share Management
// Share Folder
var m_title_share_folder = "Share Management -- Share Folder";
var m_dsc_share_folder = " Show the current share folders, and Allow you to add/delete folders";
var m_btn_share_folder = "Share Folder";
// User Management
var m_title_user_management = "Share Management -- User Management";
var m_dsc_user_management = " Show users' private folders, and Allow you to add/delete folders";
var m_btn_user_management = "User Managment";
// Group Management
var m_title_group_management = "Share Management -- Group Management";
var m_dsc_group_management = " Show the current group and user list, and Allow you to add/delete groups";
var m_btn_group_management = "Group Management";
// Quota Management
var m_title_quota_management = "Share Management -- Quota Management";
var m_dsc_quota_management = " Show user and group quota disk and size, and Allow you to add/delete";
var m_btn_quota_management = "Quota Management";

// Disk Utility
// Disk Information
var m_title_disk_info = "Disk Utility -- Disk Information";
var m_dsc_disk_info = " Show hard and USB disk information, and S.M.A.R.T. status";
var m_btn_disk_info = "Disk Information";
// Format Disk
var m_title_disk_format = "Disk Utility -- Format Disk";
var m_dsc_disk_format = " Format hard disk and USB disk";
var m_btn_disk_format = "Format Disk";
// ===================

function ShowHelpHints(help_hint, help_link, style_hide)
{
	if (style_hide == 1)
	{
		document.write("<td id='help_text' class='h_td' style=display:none> ");		
	}
	else
	{
		document.write("<td id='help_text' class='h_td'> ");
	}
	document.write("<strong>Hints:</strong><br>");
	document.write(help_hint);
	document.write("<A href='" + help_link + "'>More..</A></td>");
}
function CheckSysFeature(sysfeature, item)
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


function GenProductHead()
{
    var fwStr;
    var FWTmp = g_fwVersion.split("_");

    if (FWTmp.length == 4) fwStr = FWTmp[0] + "_" + FWTmp[2];
    else fwStr = g_fwVersion;

    var str = '<td width="100%">' + m_product_page + '&nbsp;:&nbsp;' + g_hostname + '&nbsp;&nbsp;&nbsp;' +
    //	'<a href="/logout.shtml">' + m_context_title + '</a>' +
    '</td>' +
    //	'<td noWrap align="right">ADSL PHY Version&nbsp;:&nbsp;&nbsp;</td>' +
    '<td noWrap align="right">' + window.parent.logininfo + '&nbsp;&nbsp;' + '<IMG src="../graphic/img_arrow.gif"><a href="/sitemap.shtml"><u>' + m_sutemap + '</u></a>&nbsp;&nbsp;&nbsp;' + m_fw_ver + '&nbsp;:&nbsp;&nbsp;' + fwStr + '</td>';
    
    document.write(str);
}

function btnApply(arg)
{
	self.location.href=arg;
}
