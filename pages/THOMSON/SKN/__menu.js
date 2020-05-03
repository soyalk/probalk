/*____________________________ __menu_str.js ____________________________*/

var user_level = g_user_level;
var sys_support3g = g_sys_support3g;
var sys_supportsmb = g_sys_supportsmb;
var sys_share_mgt = g_sys_share_mgt;
var sys_disk_mgt = g_sys_disk_mgt;
var sys_supportushare = g_sys_supportsmb;
var sys_supportlpd = g_sys_supportlpd;
var sys_supporttr069 = g_sys_supporttr069;
var layout_style = g_layout_style;
var custom_url = CUSTOMIZATION_URL;
var custom_css = CUSTOMIZATION_CSS;


var mn_wizard = "Setup Wizard";
var mn_wan = "Internet Setup";
var mn_3g_wan = "3G Setup";
var mn_dsl_wan = "DSL Setup";
var mn_wan_dsl = "DSL(ATM)"; //qjz@
var mn_wan_dsl_scan = "DSL Auto Scan List"; /*mcj: multi wan should include ip & ppp*/
var mn_wan_config = "IP/PPP Config"; /*var mn_wan_config ="IP Config";*/

var mn_wan_default_route = "Default Route";
var mn_wan_dynamic_dns = "Dynamic DNS";
var mn_wan_static_route = "Static Route";
var mn_wlan = "Wireless Settings";
var mn_wan_wizard = "Setup Wizard";

//var mn_wl_basic  ="Wireless Setting";
//var mn_wl_sec  ="Wireless Security";

var mn_lan = "Local Network";
var mn_lan_basic = "LAN Setting";
var mn_lan_dhcp = "DHCP Settings";
var mn_lan_re_dhcp = "Reserved DHCP Address";
var mn_lan_dh_clist = "DHCP Client List";
var mn_lan_re_mac = "Recognized MACID Setting";
var mn_time = "Time and Date";
var mn_logout = "Logout";

//var mn_wl       ="Advanced Wireless";

var mn_wl_adv = "Advanced Wireless";
var mn_multi_wan = "Multi-WAN";

var mn_multi_lan = "Advanced-LAN";
var mn_adsl_setting = "ADSL Settings";
var mn_rip_setting = "RIP Settings";
var mn_nat = "NAT";
//var mn_wl_filter = "MAC Filtering";
//var mn_wl_qos = "Wireless QoS";
var mn_vs = "Virtual Server";
var mn_port_trigger = "Port Trigger";
var mn_nat_alg = "ALG";
var mn_vpn = "VPN Passthrough";
var mn_endpoint = "Endpoint Filter";

//var mn_block_web = "Block Website";
//var mn_block_mac = "Block MAC Address";

var mn_spi = "SPI Settings";
var mn_filter = "Firewall";
var mn_filter_mac = "MAC Filter";
var mn_filter_ip = "IP Filter";
var mn_filter_url = "URL Filter"; /*var mn_filter_dos_protection = "Dos Protection";*/
/*mcj*/
var mn_filter_dos_protection = "DOS Protection";
var mn_filter_domain_blocking = "Domain Blocking";
var mn_dmz = "DMZ";

//var mn_firewall ="Firewall Settings";
//var mn_dns   ="DNS";
var mn_fwprofile = "Filters & Rules"
var mn_fwstats = "Statistics";
var mn_packet_filter = "Packet Filter";

var mn_ddns = "Dynamic DNS";
var mn_ethernet_setting = "Ethernet Setting";
var mn_share_ip = "Share Public IP to LAN";
var mn_port_mapping = "Port Mapping";
var mn_network = "Network Tools";
var mn_qos = "Quality of Service";
var mn_qmgmt = "Queue Management";
var mn_qcfg = "Queue Config";
var mn_qapp = "Queue Application";
var mn_qflow = "Queue Flow";
var mn_qclass = "Queue Classification";
var mn_qpolicer = "QoS Policer";
var mn_qstats = "QoS Stats";

//var mn_port_mapping          ="Port Mappping";

var mn_multicast = "Multicast"
var mn_igmp = "IGMP";
var mn_mld = "MLD";
var mn_upnp = "UPnP";
var mn_fon_ap = "FONAP";
var mn_fon_sm = "Status Manager";
var mn_fon_rc = "Radius Config";
var mn_fon_ch = "Coova Chilli";

//var mn_adsl         ="ADSL";
var mn_snmp = "SNMP";
var mn_ipv6 = "IPv6 WAN";
var mn_ipv6_lan_state_service = "IPv6 LAN";
var mn_ushare = "Media Server"
var mn_lpd = "LPD Printer Server"
var mn_tr064 = "TR064 Setting";
var mn_routing = "Routing";
var mn_static_routing = "Static Route";
var mn_default_gw = "Default Route";
//var mn_rip          ="RIP";
//var mn_schedule = "Schedules";

var mn_ipsec = "IPSEC";
var mn_sip = "VOIP";
var mn_sip_basic = "Basic Setting";
var mn_sip_advan = "Advanced Setting";
var mn_sip_nat = "NAT Traversal";
var mn_sip_callser = "Call Service Setting";
var mn_sip_buttonmap = "Button Map";
var mn_sip_dialing = "Dialing Plan Setting";
var mn_sip_numbering = "Numbering Plan Setting";
var mn_print = "Print Server";

var mn_wireless_basic = "Basic Setting";
var mn_wireless_security = "Security Setting";
var mn_wireless_advanced = "Advanced Wireless";
var mn_wireless_mbssid_setting = "MBSSID Setting";
var mn_wireless_wmm_setting = "WMM Settings";
var mn_wireless_mac_filter = "Wireless MAC Filter";
var mn_wps_setting = "WPS Setting";

var mn_print_server = "Print Server";

var mn_access_pwd = "Password";
var mn_access_ip = "Remote Management";
var mn_remote_access = "Remote Access";
var mn_tr069 = "TR069 Setting";
var mn_cmdinit = "Init Script";
var mn_remotelog = "SysLog";
var mn_time_sch = "Time Schedule";
//var mn_cli			="CLI";
var mn_firmware = "Firmware Upgrade";
var mn_system_bandr = "Configuration Backup/Restore";
var mn_ping = "Ping";
var mn_test = "Diagnostics";
var mn_system_reboot = "Reboot Device";

var mn_system = "System";
var mn_access_ctl = "Access Controls";

//var mn_access_srv   ="Services";

/*
var mn_admin        ="Password";
var mn_reboot       ="REBOOT";
*/

var mn_devinfo = "Summary";
var mn_adsl_info = "Adsl Info";
var mn_drvver = "Driver Version";
var mn_route = "Routing Table";
var mn_wl_client = "Wireless Clients";
var mn_dhcp_client = "LAN Clients";
var mn_log = "Logs";
var mn_stats = "Statistics";
var mn_stats_basic = "Basic Statistics";
var mn_stats_dsl = "DSL Statistics";
var mn_traffic_meter = "Traffic Meter";

var mn_stats_vgs = "VoIP Global Statistics";

var mn_stats_vrps = "VoIP RTP Packets Statistics";

var mn_stats_vcs = "VoIP Codec Statistics";

var mn_stats_ipv6_info = "IPv6 Info"

//var mn_rtable       ="Routing Info";

/*
var mn_adsl_state   ="ADSL";
var mn_arp          ="ARP Table";
*/

// ----- Julia_100202 -----
var mn_samba = "Samba";

var mn_share_management = "Share Management";
var mn_share_folder = "Share Folder";
var mn_share_user = "User Management";
var mn_share_group = "Group Management";
var mn_share_quota = "Quota Management";

var mn_disk_management = "Disk Management";
var mn_disk_info = "Disk Information";
var mn_disk_format = "Format Disk";
// ================

var mn_help = "HELP";
var mn_setup = "SETUP";
var mn_adv = "ADVANCED";
var mn_share = "SHARE";
var mn_maintenance = "MAINTENANCE";
var mn_status = "STATUS";
var mn_help_menu = "MENU";

/* linkset for sub menu pop-up */
var linkset = new Array();

function initLinkSet()
{
    //menu:setup --> Lan
    linkset[0] = '<DIV id="sidenav_pop"><UL>';
    linkset[0] += '<LI><A href="../home/home_lan_interface.shtml">' + mn_lan_basic + '</A>';
    linkset[0] += '<LI><A href="../home/home_lan_dhcp.shtml">' + mn_lan_dhcp + '</A>';
    linkset[0] += '<LI><A href="../home/home_lan_dhcpreserved.shtml">' + mn_lan_re_dhcp + '</A>';
    //linkset[0]+='<LI><A href="../home/home_lan_dhcpclient.shtml">'+mn_lan_dh_clist+'</A>';
    //linkset[0]+='<LI><A href="../home/home_recognized_macs.shtml">'+mn_lan_re_mac+'</A>';
    linkset[0] += '</LI></UL></DIV>';

    //menu:setup --> Firewall
    linkset[2] = '<DIV id="sidenav_pop"><UL>';
    linkset[2] += '<LI><A href="../advanced/adv_firewall_macfilter.shtml">' + mn_filter_mac + '</A>';
    linkset[2] += '<LI><A href="../advanced/adv_firewall_ipfilter.shtml">' + mn_filter_ip + '</A>';
    linkset[2] += '<LI><A href="../advanced/adv_firewall_urlfilter.shtml">' + mn_filter_url + '</A>';
    linkset[2] += '<LI><A href="../advanced/adv_firewall_dos.shtml">' + mn_filter_dos_protection + '</A>';
    linkset[2] += '<LI><A href="../advanced/adv_firewall_domainblocking.shtml">' + mn_filter_domain_blocking + '</A>';
    linkset[2] += '<LI><A href="../advanced/adv_firewall_dmz.shtml">' + mn_dmz + '</A>';
    //mcj: add spi setting page , include nat_endpoint
    linkset[2] += '<LI><A href="../advanced/adv_firewall_spi.shtml">' + mn_spi + '</A>';
    linkset[2] += '</LI></UL></DIV>';

    linkset[3] = '<DIV id="sidenav_pop"><UL>';
    linkset[3] += '<LI><A href="../advanced/adv_multicast.shtml">' + mn_igmp + '</A>';
    //linkset[3]+='<LI><A href="../advanced/adv_qos.shtml">'+mn_qos+'</A>';
    linkset[3] += '<LI><A href="../advanced/adv_lan_upnp.shtml">' + mn_upnp + '</A>';
    linkset[3] += '<LI><A href="../advanced/adv_fon_sm.shtml">' + mn_fon_ap + '</A>';
    linkset[3] += '<LI><A href="../advanced/adv_snmp.shtml">' + mn_snmp + '</A>';
    // ------ Julia_100202 -------
    linkset[3] += '<LI><A href="../share/share_samba_config.shtml">' + mn_samba + '</A>';
    linkset[3] += '<LI><A href="../share/share_share.shtml">' + mn_share_management + '</A>';
    linkset[3] += '<LI><A href="../share/share_disk.shtml">' + mn_disk_management + '</A>';
    // =====================
    linkset[3] += '<LI><A href="../advanced/adv_ushare.shtml">' + mn_ushare + '</A>';
    if (sys_supporttr069 == 1) linkset[3] += '<LI><A href="../advanced/adv_tr069_setting.shtml">' + mn_tr069 + '</A>';
    linkset[3] += '</LI></UL></DIV>';

    //menu:advanced --> nat
    linkset[4] = '<DIV id="sidenav_pop"><UL>';
    linkset[4] += '<LI><A href="../advanced/adv_nat_virtualserver.shtml">' + mn_vs + '</A>';
    linkset[4] += '<LI><A href="../advanced/adv_nat_porttrigger.shtml">' + mn_port_trigger + '</A>';
    linkset[4] += '<LI><A href="../advanced/adv_nat_alg.shtml">' + mn_nat_alg + '</A>';
    linkset[4] += '<LI><A href="../advanced/adv_nat_vpn_passthrough.shtml">' + mn_vpn + '</A>';
    //mcj: merge endponit to spi page
    //linkset[4]+='<LI><A href="../advanced/adv_nat_endpointfilter.shtml">'+mn_endpoint+'</A>';
    linkset[4] += '</LI></UL></DIV>';

    linkset[5] = '<DIV id="sidenav_pop"><UL>';
    linkset[5] += '<LI><A href="../tools/tools_password.shtml">' + mn_access_pwd + '</A>';
    //linkset[5]+='<LI><A href="../tools/tools_acs_srv.htm">'+mn_access_srv+'</A>';
    linkset[5] += '<LI><A href="../tools/tools_remote_management.shtml">' + mn_access_ip + '</A>';
    linkset[5] += '</LI></UL></DIV>';

    linkset[6] = '<DIV id="sidenav_pop"><UL>';
    //linkset[6]+='<LI><A href="../home/home_wizard_start.shtml">'+mn_wan_wizard+'</A>';
    //linkset[6]+='<LI><A href="../advanced/home_wan_dsl.shtml">'+mn_wan_dsl+'</A>';
    linkset[6] += '<LI><A href="../advanced/adv_wan_dsl_scanning.shtml">' + mn_wan_dsl_scan + '</A>';
    linkset[6] += '<LI><A href="../advanced/adv_wan_ispconfig.shtml">' + mn_wan_config + '</A>';
    linkset[6] += '<LI><A href="../advanced/adv_wan_default_route.shtml">' + mn_wan_default_route + '</A>';
    //linkset[6]+='<LI><A href="../home/home_wan_ddns.shtml">'+mn_wan_dynamic_dns+'</A>';
    //linkset[6]+='<LI><A href="../home/home_wan_static_route.shtml">'+mn_wan_static_route+'</A>';
    linkset[6] += '</LI></UL></DIV>';

    linkset[7] = '<DIV id="sidenav_pop"><UL>';
    linkset[7] += '<LI><A href="adv_voip_basic_config.shtml">' + mn_sip_basic + '</A>';
    linkset[7] += '<LI><A href="adv_voip_advan_config.shtml">' + mn_sip_advan + '</A>';
    linkset[7] += '<LI><A href="adv_voip_nat_config.shtml">' + mn_sip_nat + '</A>';
    linkset[7] += '<LI><A href="adv_voip_callservice.shtml">' + mn_sip_callser + '</A>';
    linkset[7] += '<LI><A href="adv_voip_button_map.shtml">' + mn_sip_buttonmap + '</A>';
    linkset[7] += '<LI><A href="adv_voip_digitmap_config.shtml">' + mn_sip_dialing + '</A>';
    linkset[7] += '<LI><A href="adv_voip_numplan_config.shtml">' + mn_sip_numbering + '</A>';
    linkset[7] += '</LI></UL></DIV>';

    linkset[8] = '<DIV id="sidenav_pop"><UL>';
    linkset[8] += '<LI><A href="../tools/tools_backup_setting.shtml">' + mn_system_bandr + '</A>';
    linkset[8] += '<LI><A href="../tools/tools_reboot.shtml">' + mn_system_reboot + '</A>';
    linkset[8] += '</LI></UL></DIV>';

    linkset[9] = '<DIV id="sidenav_pop"><UL>';
    linkset[9] += '<LI><A href="../status/status_statistic.shtml">' + mn_stats_basic + '</A>';
    linkset[9] += '<LI><A href="../status/status_vdsl_statistic.shtml">' + mn_stats_dsl + '</A>';
    //linkset[9]+='<LI><A href="../status/status_voip_status_summary.shtml">'+mn_stats_vgs+'</A>';
    //linkset[9]+='<LI><A href="../status/status_voip_status_rtp_stat.shtml">'+mn_stats_vrps+'</A>';
    //linkset[9]+='<LI><A href="../status/status_voip_status_codec_stat.shtml">'+mn_stats_vcs+'</A>';
    linkset[9] += '</LI></UL></DIV>';

    linkset[10] = '<DIV id="sidenav_pop"><UL>';
    linkset[10] += '<LI><A href="../home/home_wireless_basic.shtml">' + mn_wireless_basic + '</A>';
    linkset[10] += '<LI><A href="../home/home_wireless_security.shtml">' + mn_wireless_security + '</A>';
    linkset[10] += '</LI></UL></DIV>';

    //menu:advanced --> advanced wireless
    linkset[11] = '<DIV id="sidenav_pop"><UL>';
    linkset[11] += '<LI><A href="../advanced/adv_wireless_advanced.shtml">' + mn_wireless_advanced + '</A>';
    linkset[11] += '<LI><A href="../advanced/adv_wireless_mbssid.shtml">' + mn_wireless_mbssid_setting + '</A>';
    linkset[11] += '<LI><A href="../advanced/adv_wireless_macfilter.shtml">' + mn_wireless_mac_filter + '</A>';
    linkset[11] += '<LI><A href="../advanced/adv_wireless_wps.shtml">' + mn_wps_setting + '</A>';
    linkset[11] += '</LI></UL></DIV>';

    linkset[12] = '<DIV id="sidenav_pop"><UL>';
    linkset[12] += '<LI><A href="../advanced/adv_qos_qmgmt.shtml">' + mn_qmgmt + '</A>';
    linkset[12] += '<LI><A href="../advanced/adv_qos_qcfg.shtml">' + mn_qcfg + '</A>';
    //linkset[12]+='<LI><A href="../advanced/adv_qos_qapp.shtml">'+mn_qapp+'</A>';
    //linkset[12]+='<LI><A href="../advanced/adv_qos_qflow.shtml">'+mn_qflow+'</A>';
    linkset[12] += '<LI><A href="../advanced/adv_qos_qclass.shtml">' + mn_qclass + '</A>';
    //linkset[12]+='<LI><A href="../advanced/adv_qos_qpolicer.shtml">'+mn_qpolicer+'</A>';
    linkset[12] += '<LI><A href="../advanced/adv_qos_qstats.shtml">' + mn_qstats + '</A>';
    linkset[12] += '</LI></UL></DIV>';
	
/*
	linkset[13]='<DIV id="sidenav_pop"><UL>';
	linkset[13]+='<LI><A href="../home/home_inter.shtml">'+mn_dsl_wan+'</A>';
	linkset[13]+='<LI><A href="../home/home_wan_3g_modem.shtml">'+mn_3g_wan+'</A>';
	linkset[13]+='</LI></UL></DIV>';
*/
    // ------- Julia_100202 -----------------
    // share management
    if (sys_share_mgt == 1)
    {
        linkset[14] = '<DIV id="sidenav_pop"><UL>';
        linkset[14] += '<LI><A href="../share/share_folder.shtml">' + mn_share_folder + '</A>';
        linkset[14] += '<LI><A href="../share/share_user.shtml">' + mn_share_user + '</A>';
        linkset[14] += '<LI><A href="../share/share_group.shtml">' + mn_share_group + '</A>';
/* Julia_0311
 * not support resently
 *
		linkset[14]+='<LI><A href="../share/share_quota.shtml">'+mn_share_quota+'</A>';
 */
        linkset[14] += '</LI></UL></DIV>';
    }
    // disk management
    if (sys_disk_mgt == 1)
    {
        linkset[15] = '<DIV id="sidenav_pop"><UL>';
        linkset[15] += '<LI><A href="../share/share_disk_info.shtml">' + mn_disk_info + '</A>';
/* Julia_0311
 * not support resently
 *
		linkset[15]+='<LI><A href="../share/share_disk_format.shtml">'+mn_disk_format+'</A>';
 */
        linkset[15] += '</LI></UL></DIV>';
    }
    // ===============================
    //menu:setup --> Packet Filter
    linkset[16] = '<DIV id="sidenav_pop"><UL>';
    linkset[16] += '<LI><A href="../advanced/adv_packetft_firewall_profile.shtml">' + mn_fwprofile + '</A>';
    linkset[16] += '<LI><A href="../advanced/adv_packetft_firewall_profile_stats.shtml">' + mn_fwstats + '</A>';
    linkset[16] += '</LI></UL></DIV>';

    //menu:advanced --> Multicast
    linkset[17] = '<DIV id="sidenav_pop"><UL>';
    linkset[17] += '<LI><A href="../advanced/adv_multicast_igmp.shtml">' + mn_igmp + '</A>';
    linkset[17] += '<LI><A href="../advanced/adv_multicast_mld.shtml">' + mn_mld + '</A>';
    linkset[17] += '</LI></UL></DIV>';

    //menu:advanced --> FONAP
    //linkset[18] = '<DIV id="sidenav_pop"><UL>';
    //linkset[18] += '<LI><A href="../advanced/adv_fon_sm.shtml">' + mn_fon_sm + '</A>';
    //linkset[18] += '<LI><A href="../advanced/adv_fon_radcon.shtml">' + mn_fon_rc + '</A>';
    //linkset[18] += '<LI><A href="../advanced/adv_fon_chilli.shtml">' + mn_fon_ch + '</A>';
    //linkset[18] += '</LI></UL></DIV>';
}

/*____________________________ __menu_str.js End ____________________________*/
/***********************************************
 * Pop-it menu- c Dynamic Drive (www.dynamicdrive.com)
 * This notice MUST stay intact for legal use
 * Visit http://www.dynamicdrive.com/ for full source code
 ***********************************************/

////No need to edit beyond here

var ie5 = document.all && !window.opera;
var ns6 = document.getElementById;
var defaultMenuWidth = "130px"; //set default menu width.
var basewidth = 127;
if (user_level == CUSTOMIZATION)
	basewidth = 162;


function iecompattest()
{
    if (document.compatMode && document.compatMode.indexOf("CSS") != -1) return document.documentElement;
    else return document.body;
}



function showmenu(e, which, menuParent)
{
    if (!document.all && !document.getElementById) return;
    clearhidemenu();

    menuobj = document.getElementById("popitmenu"); /* popitmenu div in top of frame */
    menuobj.innerHTML = which;
    menuobj.contentwidth = menuobj.offsetWidth;
    menuobj.contentheight = menuobj.offsetHeight;

    eventX = ie5 ? event.clientX : e.clientX;
    eventY = ie5 ? event.clientY : e.clientY;

    //Find out how close the mouse is to the corner of the window;
    var rightedge = ie5 ? iecompattest().clientWidth - eventX : window.innerWidth - eventX;
    var bottomedge = ie5 ? iecompattest().clientHeight - eventY : window.innerHeight - eventY;
    var menuP = menuParent;
    var baseLeft = 0;
    var baseTop = 0;

    /* Caculate the offset from parenet menu */
    while (menuP != null)
    {
        baseLeft += menuP.offsetLeft;
        baseTop += menuP.offsetTop;
        menuP = menuP.offsetParent;
    }

    menuobj.style.left = baseLeft + basewidth;

    menuobj.style.top = baseTop;

    menuobj.style.visibility = "visible";

    return false;
}


function contains_ns6(a, b)
{
    while (b.parentNode)
    if ((b = b.parentNode) == a) return true;
    return false;
}

function delayhidemenu()
{
    delayhide = setTimeout("hidemenu()", 300);
}

function clearhidemenu()
{
    if (window.delayhide) clearTimeout(delayhide);
}

function hidemenu()
{
    if (window.menuobj) menuobj.style.visibility = "hidden";
}



function dynamichide(e)
{
    if (ie5 && !menuobj.contains(e.toElement))
    {
        hidemenu();
    }

    else if (ns6 && e.currentTarget != e.relatedTarget && !contains_ns6(e.currentTarget, e.relatedTarget))
    {
        hidemenu();
    }
}

/*____________________________ __popit_menu.js End ____________________________*/


/*____________________________ __menu_list.js ____________________________*/

var filenameExp = /:\/\/\S*\/(\S*)\.shtml\??/;
var result = document.location.href.match(filenameExp);

var thisFilename = result[1] + ".shtml"; // we need the variable in all web pages;

var baseFilename = result[1]; // we need the variable in all web pages;


function menuItem(catalog, thisName, thisURL, showFlag, subLinkIdx)
{
    var theExp = /\S*\/(\S*).shtml/;
    var matchS = thisURL.match(theExp);
    this.catalog = catalog;
    this.name = thisName;
    this.url = thisURL;

    if (matchS) this.basefile = matchS[1]; /* matched string will store in [1] for exp pattern without /q */
    else this.basefile = thisURL;

    this.show = showFlag;
    this.subLinkIdx = subLinkIdx;
}



var MenuList = new Array();

var CataSetup = "SETUP";
var CataAdv = "ADVANCED";
var CataShare = "SHARE";
var CataMan = "MAINTENANCE";
var CataStatus = "STATUS";
var CataHelp = "HELP";

MenuList[CataSetup] = new Array();
MenuList[CataAdv] = new Array();
MenuList[CataShare] = new Array();
MenuList[CataMan] = new Array();
MenuList[CataStatus] = new Array();
MenuList[CataHelp] = new Array();

var CataTab = new Array();

function menuTab(cataName, thisURL, thisImg)
{
    this.cataName = cataName;
    this.url = thisURL;
	this.img = thisImg;
}

/*  
SubLevel:  map to linkset index for pop-up  
*/
function addMenuTab(catalog, thisname, thisURL, ShowTag, SubLevel)
{
//	MenuList[catalog][MenuList[catalog].length] = new menuItem(catalog, thisname, thisURL, ShowTag, SubLevel);
	/* Add the menu item only when the page level is less then the UserLevel */ 
	if (MenuItemUserLevel[thisURL] <= user_level) 
	{ 
		MenuList[catalog][MenuList[catalog].length] = new menuItem(catalog, thisname, thisURL, ShowTag, SubLevel); 
	}
}

function addSetupMenuTab()
{

    if (layout_style != "GENERIC")
    {
        addMenuTab(CataSetup, mn_wizard, "../wizard/wizard_multipvc.shtml", 1, -1);
    }
    addMenuTab(CataSetup, mn_wan, "../home/home_inter.shtml", 1, -1);
    if (sys_support3g == 1) addMenuTab(CataSetup, mn_3g_wan, "../home/home_wan_3g_modem.shtml", 1, -1);
    addMenuTab(CataSetup, mn_wlan, "../home/home_wireless.shtml", 1, 10);
    addMenuTab(CataSetup, mn_lan, "../home/home_lan.shtml", 1, -1);
    addMenuTab(CataSetup, mn_time, "../home/home_time_setting.shtml", 1, -1);
    if (layout_style != "GENERIC")
    {
        addMenuTab(CataSetup, mn_logout, "../logout.shtml", 1, -1);
    }

    CataTab[CataTab.length] = new menuTab(CataSetup, MenuList[CataSetup][0].url, ""); /* Use First page as Tab URL */
}

function addAdvMenuTab()
{

    addMenuTab(CataAdv, mn_wl_adv, "../advanced/adv_wireless.shtml", 1, 11);
    addMenuTab(CataAdv, mn_multi_wan, "../advanced/adv_wan.shtml", 1, 6);
    addMenuTab(CataAdv, mn_multi_lan, "../advanced/adv_lan_interface.shtml", 1, -1);
    addMenuTab(CataAdv, mn_ipv6, "../advanced/adv_ipv6_wan.shtml", 1, -1);
    addMenuTab(CataAdv, mn_ipv6_lan_state_service, "../advanced/adv_ipv6_lan_state_service.shtml", 1, -1);
    addMenuTab(CataAdv, mn_adsl_setting, "../advanced/adv_adsl_setting.shtml", 1, -1);
    addMenuTab(CataAdv, mn_rip_setting, "../advanced/adv_rip_setting.shtml", 1, -1);
    addMenuTab(CataAdv, mn_nat, "../advanced/adv_nat.shtml", 1, 4);
    addMenuTab(CataAdv, mn_filter, "../advanced/adv_firewall.shtml", 1, 2);
    addMenuTab(CataAdv, mn_packet_filter, "../advanced/adv_packetft.shtml", 1, 16);
    addMenuTab(CataAdv, mn_static_routing, "../advanced/adv_static_route.shtml", 1, -1);
    addMenuTab(CataAdv, mn_multicast, "../advanced/adv_multicast.shtml", 1, 17);
    addMenuTab(CataAdv, mn_ddns, "../advanced/adv_ddns.shtml", 1, -1);
    addMenuTab(CataAdv, mn_ethernet_setting, "../advanced/adv_lan_ethernet_settings.shtml", 1, -1); /*mcj: will reopen this fun later*/
    /*addMenuTab(Idx_adv,mn_share_ip,"../advanced/adv_recognized_macs.shtml",1,-1);*/
    addMenuTab(CataAdv, mn_port_mapping, "../advanced/adv_port_mapping.shtml", 1, -1);
    addMenuTab(CataAdv, mn_qos, "../advanced/adv_qos.shtml", 1, 12);
    addMenuTab(CataAdv, mn_upnp, "../advanced/adv_upnp.shtml", 1, -1);
    if(g_fonap == 1)
	    addMenuTab(CataAdv, mn_fon_ap, "../advanced/adv_fon_sm.shtml", 1, -1);
    if(g_sys_supportsnmp == 1)
	    addMenuTab(CataAdv, mn_snmp, "../advanced/adv_snmp.shtml", 1, -1);

    if (layout_style != "GENERIC")
    {
        addMenuTab(CataAdv, mn_logout, "../logout.shtml", 1, -1);
    }

    CataTab[CataTab.length] = new menuTab(CataAdv, MenuList[CataAdv][0].url, ""); /* Use First page as Tab URL */


}

function addShareMenuTab()
{
	// ------ Julia_100202 -------
    if (sys_supportsmb == 1)
	{
		addMenuTab(CataShare, mn_samba, "../share/share_samba_config.shtml", 1, -1);
	}
	else
	{	//share is base on smb
		return;
	}
    if (sys_share_mgt == 1) addMenuTab(CataShare, mn_share_management, "../share/share_share.shtml", 1, 14);
    if (sys_disk_mgt == 1) addMenuTab(CataShare, mn_disk_management, "../share/share_disk.shtml", 1, 15);
    // =====================

    /*sky for ushare config*/
    if (sys_supportushare == 1) addMenuTab(CataShare, mn_ushare, "../share/share_ushare.shtml", 1, -1);
    if (sys_supportlpd == 1) addMenuTab(CataShare, mn_lpd, "../share/share_lpd.shtml", 1, -1);

    if (layout_style != "GENERIC")
    {
        addMenuTab(CataShare, mn_logout, "../logout.shtml", 1, -1);
    }

    CataTab[CataTab.length] = new menuTab(CataShare, MenuList[CataShare][0].url, ""); /* Use First page as Tab URL */

}

function addManMenuTab()
{

    addMenuTab(CataMan, mn_access_pwd, "../tools/tools_password.shtml", 1, -1);
    addMenuTab(CataMan, mn_access_ip, "../tools/tools_remote_management.shtml", 1, -1);
    addMenuTab(CataMan, mn_remote_access, "../tools/tools_remote_access.shtml", 1, -1);
    if (sys_supporttr069 == 1) addMenuTab(CataMan, mn_tr069, "../tools/tools_tr069_setting.shtml", 1, -1);
    addMenuTab(CataMan, mn_cmdinit, "../tools/tools_command.shtml", 1, -1);
    addMenuTab(CataMan, mn_remotelog, "../tools/tools_syslog.shtml", 1, -1); /*mcj: add unify time schedule for all firewall & nat module */
    addMenuTab(CataMan, mn_time_sch, "../tools/tools_time_schedule.shtml", 1, -1);
    //addMenuTab(Idx_tools,mn_cli,"../tools/tools_clish.shtml",1,-1);
    addMenuTab(CataMan, mn_firmware, "../tools/tools_firmware_upgrade.shtml", 1, -1);
    addMenuTab(CataMan, mn_system_bandr, "../tools/tools_backup_setting.shtml", 1, -1);
    addMenuTab(CataMan, mn_ping, "../tools/tools_ping.shtml", 1, -1);
    addMenuTab(CataMan, mn_test, "../tools/tools_diagnostics.shtml", 1, -1);
    addMenuTab(CataMan, mn_system_reboot, "../tools/tools_reboot.shtml", 1, -1);
    if (layout_style != "GENERIC")
    {
        addMenuTab(CataMan, mn_logout, "../logout.shtml", 1, -1);
    }

    CataTab[CataTab.length] = new menuTab(CataMan, MenuList[CataMan][0].url, ""); /* Use First page as Tab URL */
}

function addStatusMenuTab()
{

    addMenuTab(CataStatus, mn_devinfo, "../status/status_summary.shtml", 1, -1);
    addMenuTab(CataStatus, mn_stats_ipv6_info, "../status/status_ipv6.shtml", 1, -1);
    addMenuTab(CataStatus, mn_adsl_info, "../status/status_adsl_info.shtml", 1, -1);
    addMenuTab(CataStatus, mn_wl_client, "../status/status_wireless_clients.shtml", 1, -1);
    addMenuTab(CataStatus, mn_dhcp_client, "../status/status_lan_dhcpclient.shtml", 1, -1);
    addMenuTab(CataStatus, mn_log, "../status/status_log.shtml", 1, -1);
    addMenuTab(CataStatus, mn_route, "../status/status_route_statistic.shtml", 1, -1);
    addMenuTab(CataStatus, mn_traffic_meter, "../status/status_traffic.shtml", 1, -1);
    addMenuTab(CataStatus, mn_drvver, "../status/status_drvver.shtml", 1, -1);
    addMenuTab(CataStatus, mn_stats, "../status/status_states.shtml", 1, 9);
    if (layout_style != "GENERIC")
    {
        addMenuTab(CataStatus, mn_logout, "../logout.shtml", 1, -1);
    }

    CataTab[CataTab.length] = new menuTab(CataStatus, MenuList[CataStatus][0].url, ""); /* Use First page as Tab URL */
}



function addHelpMenuTab()
{
    addMenuTab(CataHelp, mn_help_menu, "../help/help_menu.shtml", 1, -1);
    addMenuTab(CataHelp, mn_setup, "../help/help_setup.shtml", 1, -1);
    addMenuTab(CataHelp, mn_adv, "../help/help_adv.shtml", 1, -1);
    if (sys_supportsmb == 1)
    {
        addMenuTab(CataHelp, mn_share, "../help/help_share.shtml", 1, -1);
    }
    addMenuTab(CataHelp, mn_maintenance, "../help/help_tools.shtml", 1, -1);
    addMenuTab(CataHelp, mn_status, "../help/help_status.shtml", 1, -1);
    if (layout_style != "GENERIC")
    {
        addMenuTab(CataStatus, mn_logout, "../logout.shtml", 1, -1);
    }

    CataTab[CataTab.length] = new menuTab(CataHelp, MenuList[CataHelp][0].url, ""); /* Use First page as Tab URL */
}



function findCatalogBase()
{

    if (baseFilename.indexOf("home_") != -1 || baseFilename.indexOf("wizard_") != -1) return CataSetup;
    else if (baseFilename.indexOf("adv_") != -1) return CataAdv;
    else if (baseFilename.indexOf("share_") != -1) return CataShare;
    else if (baseFilename.indexOf("tools_") != -1) return CataMan;
    else if (baseFilename.indexOf("status_") != -1) return CataStatus;
    else if (baseFilename.indexOf("help_") != -1) return CataHelp;
    else return CataSetup;

}

function GenLeftMenuItem()
{
    if (layout_style == "GENERIC")
    {
        GenVertLeftMenuItem();
    }
    else
    {
        GenHorzLeftMenuItem();

    }
}

function GenVertLeftMenuItem()
{
    initLinkSet();
    cata = findCatalogBase();
    var matched = 0;

    var str = "<ul>";

    if (user_level == ADMIN)
    {
        if (baseFilename.indexOf("wizard_") != -1)
        {
            str += "<li><div id='topnavon'><a href='../wizard/wizard_multipvc.shtml'>" + mn_wan_wizard + "</a></div></li>";
            cata = -1;
        }
        else
        {
            str += "<li><div id='topnavoff'><a href='../wizard/wizard_multipvc.shtml'>" + mn_wan_wizard + "</a></div></li>";
        }
    }

    for (t = 0; t < CataTab.length; t++)
    {
        if (cata == CataTab[t].cataName) div_class = "topnavon";
        else div_class = "topnavoff";

		if (CataTab[t].img == "")
			str += "<div id='" + div_class + "'><a href='" + CataTab[t].url + "'>" + CataTab[t].cataName + "</a></div>";
		else
			str += "<div id='" + div_class + "'><a href='" + CataTab[t].url + "'><img id='" + div_class + "' src='" + CataTab[t].img + "'/></a></div>";
        

        if (cata != CataTab[t].cataName) continue; /* Only show tab for un-matched catalog */

        var cataName = CataTab[t].cataName;

        /* Show menu list belong to this catalog */
        for (i = 0; i < MenuList[cataName].length; i++)
        {
            var menu_item = MenuList[cataName][i];
            if (menu_item.show != 0)
            {
                if ((menu_item.url.indexOf(baseFilename) == 0 || baseFilename.indexOf(menu_item.basefile) == 0) && !matched) //is myself and match first one
                {
                    if (menu_item.subLinkIdx == "-1") str += "<li><div id='sidenavoff'><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>";					
                    else str += "<li><div id='sidenavoff' onMouseover='showmenu(event,linkset[" + menu_item.subLinkIdx + "], this)' onMouseout='delayhidemenu()' ><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>";
                    matched = 1;
                }
                else
                {
                    if (menu_item.subLinkIdx == "-1") str += "<li><div id='sidenavon'><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>"
                    else str += "<li><div id='sidenavon' onMouseover='showmenu(event,linkset[" + menu_item.subLinkIdx + "], this)' onMouseout='delayhidemenu()' ><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>"
                }
            }
        }
        str += "<li><div id='sidenavon'></div></li>"
    }
	if (user_level >= 0)
	{
		str += "<li><div id='topnavoff'><a href='../logout.shtml'>" + mn_logout + "</a></div></li>"
	}
    str += "</ul>";
    document.write(str);
}


function GenHorzLeftMenuItem()
{
    initLinkSet();
    cata = findCatalogBase();
    var matched = 0;
    var str = "<ul>"; /* Show menu list belong to this catalog */
    for (i = 0; i < MenuList[cata].length; i++)
    {
        var menu_item = MenuList[cata][i];
        if (menu_item.show != 0)
        {
            if ((menu_item.url.indexOf(baseFilename) == 0 || baseFilename.indexOf(menu_item.basefile) == 0) && !matched) //is myself and match first one
            {
                if (menu_item.subLinkIdx == "-1") str += "<li><div id='sidenavoff'><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>";
                else str += "<li><div id='sidenavoff' onMouseover='showmenu(event,linkset[" + menu_item.subLinkIdx + "], this)' onMouseout='delayhidemenu()' ><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>";
                matched = 1;
            }
            else
            {
                if (menu_item.subLinkIdx == "-1") str += "<li><div id='sidenavon'><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>"
                else str += "<li><div id='sidenavon' onMouseover='showmenu(event,linkset[" + menu_item.subLinkIdx + "], this)' onMouseout='delayhidemenu()' ><a href='" + menu_item.url + "'>" + menu_item.name + "</a></div></li>"
            }
        }
    }

    str += "</ul>";
    document.write(str);
}


function __genTopMenuItem(write)
{
    var cata = findCatalogBase();
    var str = "";

    for (t = 0; t < CataTab.length; t++)
    {
        if (cata == CataTab[t].cataName) div_class = "topnavon rowspan=2";
        else div_class = "topnavoff";

        var width = (100 / CataTab.length);

        str += "<td width=" + width + "% class=" + div_class + "><a href='" + CataTab[t].url + "'>" + CataTab[t].cataName + "</a></td>";
        if (t < CataTab.length - 1) /* Don't add space td after last tab */
        str += "<td style='background-color:#F1F1F1; width:2px;'>&nbsp;</td>";
    }
    if (write == 1) document.write(str);

    return str;
}

function GenTopMenuItem()
{

    __genTopMenuItem(1);
}

function __genTopMenuShadow(write)
{

    var str = 
    "<td></td><td style='background-color:#404343;'></td>" + 
    "<td style='background-color:#404343;'></td><td style='background-color:#404343;'></td>" + 
    "<td style='background-color:#404343;'></td><td style='background-color:#404343;'></td>" + 
    "<td style='background-color:#404343;'></td><td style='background-color:#404343;'></td>" + 
    "<td style='background-color:#404343;'></td><td style='background-color:#404343;'></td>" + 
    "<td style='background-color:#404343;'></td><td style='background-color:#404343;'></td>" + 
    "<td style='background-color:#404343;'></td>";

    if (write == 1) document.write(str);

    return str;

}

function GenTopMenu()
{
    if (layout_style == "GENERIC")
    {
        return;
    }

    var topMenuStr = __genTopMenuItem(0);
    var toMenuShadowStr = __genTopMenuShadow(0);

    var str = 
    "<table id='topmenu_tbl' cellSpacing='0' cellPadding='0' width=838 align='center'>" + 
    "<tr  id=topnav_container2>" + "<td width=2></td>" + 
    "<td id=model ><img src='../graphic/model.gif'></td>" + 
    "<td style='background-color:#F1F1F1; width:2px;'>&nbsp;</td>" + 
    topMenuStr + 
    "</tr>" + 
    "<tr>" + 
    toMenuShadowStr + 
    "</tr>" + 
    "</table>";

    document.write(str);
}



function addMenuTaball()
{
/*    if (layout_style == "GENERIC")
    {
        changeCss("css", "../layout/g_style.css");
    }
*/
    /*-------------------------------------*/
    if (user_level == ADMIN)
    {
        addSetupMenuTab();
        addAdvMenuTab();
        addShareMenuTab();
        addManMenuTab();
        addStatusMenuTab();
        addHelpMenuTab();
    }
    else if (user_level == USER)
    {
		addSetupMenuTab();
        addAdvMenuTab();
        addShareMenuTab();
        addManMenuTab();
        addStatusMenuTab();
        addHelpMenuTab();
    }
    else if (user_level == GUEST)//guset
    {
        addStatusMenuTab();
        addHelpMenuTab();
    }
	else if (user_level == CUSTOMIZATION)
	{
		addCustomizationMenuTab();
	}
}

/*---------------------- Tools ----------------------------*/

function prints(context)
{
    document.write(context);
}

/* From prototype.js for easy element access */
/*  Prototype JavaScript framework, version 1.6.1
 *  (c) 2005-2009 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/
function $(element) {
  if (arguments.length > 1) {
    for (var i = 0, elements = [], length = arguments.length; i < length; i++)
      elements.push($(arguments[i]));
    return elements;
  }
  if (Object.isString(element))
    element = document.getElementById(element);
  return Element.extend(element);
}

function do_timeout()
{
    // logout or something else to do.
	if (user_level >=0)
	{
		url_curr = document.URL;
		location.href = "../logout.shtml" + "?" + url_curr;
	}
}

function changeCss(idname, value)
{
    var css = document.getElementById(idname);
    css.setAttribute("href", value);
}


function loadCSS()
{
    var css_link = '<link href="../layout/d_style.css" type="text/css" rel="stylesheet" id="css">';
    if (layout_style == "GENERIC") css_link = '<link href="../layout/g_style.css" type="text/css" rel="stylesheet" id="css">';

    document.write(css_link);
}

function loadCSS_ex(style_css)
{
    var css_link ;
    css_link = '<link href="../layout/' + style_css + '" type="text/css" rel="stylesheet" id="css">';

    document.write(css_link);
}

/*____________________________ __menu_list.js End ____________________________*/
