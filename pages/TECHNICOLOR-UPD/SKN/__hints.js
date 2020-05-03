
//wizard
var wizard_pvc_hint = "<br>If you are setting up your modem for the first time, click on <b id=bc>'Setup Wizard'</b>. The step-by-step setup wizard will guide you through to configure your modem and connect to the Internet.For advance user click <b id=bc> Setup> Internet Setup </b>to manually enter settings.<br><br>";
var wizard_pvc_link = "../help/help_setup.shtml#wizard";

var wizard_inter_hint = "<br>If you are setting up your modem for the first time, click on <b id=bc>'Setup Wizard'</b>. The step-by-step setup wizard will guide you through to configure your modem and connect to the Internet.For advance user click <b id=bc> Setup> Internet Setup </b>to manually enter settings.<br><br>";
var wizard_inter_link = "../help/help_setup.shtml#wizard";

var wizard_wireless_hint = "<br>If you are setting up your modem for the first time, click on <b id=bc>'Setup Wizard'</b>. The step-by-step setup wizard will guide you through to configure your modem and connect to the Internet.For advance user click <b id=bc> Setup> Internet Setup </b>to manually enter settings.<br><br>";
var wizard_wireless_link = "../help/help_setup.shtml#wizard";

//setup menu
var internet_setup_help_hint = "<br>Here you can quickly set up your ADSL connection. The required information is provided by your ISP (Internet Service Provider). Most often your account information can be provided with the bundle pack from your ISP.<br><br> United Kingdom users usually require a PPPoA connection. Germany users will usually select PPPoE connection type. Please note that the username and password information are case sensitive. If you are unable to connect, verify your username and password information. <br><br>";
var internet_setup_help_link = "../help/help_setup.shtml#wan";

var setup_3g_hint = "<br>Fill the PIN Number if the using 3G modem protected by PIN number, else leave to blank.<br><br>Access Point Name(APN) provided from the 3G service provider.<br><br>Fill USB device file name if the 3G modem has a special communicate TTY name, else leave to blank.<br><br>After correct setting and click Apply of 3G MODEM, wait for about 30-90 seconds, then click the Refresh button to check the status, if the Link Status if UP that show 3G connection is work now, and we could get some 3G card information from 3G CARD Information.<br><br>The checkbox named ADSL/3G WAN Auto Switch is for 3G connection automatical connect when DSL connection drop.<br><br>3G PPP Connection parameters are like PPPoE settings which sit at Internet Setup.<br><br>";
var setup_3g_link = "../help/help_setup.shtml#3g";

var wireless_basic_setting_hint = "<br>It is recommended to change your wireless Network Name (SSID) and change it to a name you most familiar with. Do not to use any personal information as your network name. Selecting <b id=bc>Auto </b> for wireless channel, allows the device to select the best channel for your wireless network to operate on.<br><br>";
var wireless_basic_setting_link = "../help/help_setup.shtml#wireless";

var wireless_security_setting_hint = "<br>Please make sure you write down your wireless security settings. You will need to enter these settings on to all wireless devices that you want to connect on your network. <br><br>";
var wireless_security_setting_link = "../help/help_setup.shtml#wl_sec";

var local_network_hint = "<br>The IP address settings of the LAN interface and can be referred to as private network setting. These settings are private to your internal network and cannot be seen on the Internet. <br><br>This device has a built in DHCP server that can be disabled if you click <b id=bc>Disable DHCP</b> Server. This is an option if you have want to use another DHCP server on your network or if you choose to statically assign IP addresses on all of your devices. <br><br>";
var local_network_link = "../help/help_setup.shtml#lan";

var time_date_hint = "<br>Please make sure to set the correct time and date to accurately set time restrictions. <br><br>Daylight a Savings option is available to ensure the device maintains the correct time throughout the year.<br><br>";
var time_date_link = "../help/help_setup.shtml#time";

//advanced menu
var advanced_wireless_hint = "<br>Please lease these settings at default settings, adjusting these parameters can limit the performance of the wireless network.<br><br>";
var advanced_wireless_link = "../help/help_adv.shtml#wl_adv";

var mbssid_setting_hint = "<br>This section allows you to configure the device MBSSID settings.<br><br>";
var mbssid_setting_link = "../help/help_adv.shtml#wl_mbssid";

var wireless_mac_filter_hint = "<br>Enter a list of MAC addresses to either deny or allow access to your wireless network. Changes on the mac filter list will take effect after you click the Apply button.<br><br>";
var wireless_mac_filter_link = "../help/help_adv.shtml#wl_macfilter";

var wps_setting_hint = "<br>Press the <b id=bc>Reset PIN to Default</b>  to reset the current PIN information or press <b id=bc>Generate New PIN</b> to create new PIN information. <br><br>Please note when manually setting your wireless security settings. WPS can be enabled under WPA-PSK, WPA2-PSK or Open encryption types.<br><br>";
var wps_setting_link = "../help/help_adv.shtml#wl_wps";

var wireless_wmm_hint = "<br>To be done!<br><br>";
var wireless_wmm_link = " ";

var dsl_auto_scan_hint = "<br>Click Edit icon and <b id=bc>Scan</b> to edit the VPI/VCI values.<br><br>";
var dsl_auto_scan_link = "../help/help_adv.shtml#dsl_scan";

var ispconfig_hint = "<br>This section allows you to configure Multi-WAN settings, you can add a IP or a PPP connection<br><br>";
var ispconfig_link = "../help/help_adv.shtml#ispconfig";

var ppp_add_hint = "<br>Config for add a PPP connection.<br><br>";
var ppp_add_link = "../help/help_adv.shtml#ispconfig";


var ppp_edit_hint = "<br>Edit the PPP connection.<br><br>";
var ppp_edit_link = "../help/help_adv.shtml#ispconfig";

var ip_add_hint = "<br>Config for add a new IP connection.<br><br>";
var ip_add_link = "../help/help_adv.shtml#ispconfig";

var ip_edit_hint = "<br>Edit the IP connection.<br><br>";
var ip_edit_link = "../help/help_adv.shtml#ispconfig";

var default_route_hint = "<br>Set default route for the router.<br><br>";
var default_route_link = "../help/help_adv.shtml#default_route";

var adv_lan_hint = "<br>Add Multi-LAN IP address of the device.<br><br>";
var adv_lan_link = "../help/help_adv.shtml#lan_interface";

var adsl_setting_hint = "<br>Please note that adjusting these settings can limit the performance of your ADSL connection. Unless advised by your ISP (Internet Service Provider) it is recommended to leaves these settings at default.<br><br>";
var adsl_setting_link = "../help/help_adv.shtml#adsl";

var rip_setting_hint = "<br>This section allows you to configure parameters to monitor status of performance of the device.<br><br>";
var rip_setting_link = "../help/help_adv.shtml#rip";

var virtual_server_hint = "<br>This section allows you add a virtual server rules based on one of the network applications listed on the pull down menu. Verify the pre-defined applications listed  on the pull down menu.<br><br>";
var virtual_server_link = "../help/help_adv.shtml#virtualserver";

var virtual_server_config_hint = "<br>This section allows you add a virtual server rules based on one of the network applications listed on the pull down menu. Verify the pre-defined applications listed  on the pull down menu.<br><br>";
var virtual_server_config_link = "../help/help_adv.shtml#virtualserver";

var port_trigger_hint = "<br>This section allows to you configure triggering rules of the device.<br><br>";
var port_trigger_link = "../help/help_adv.shtml#porttrigger";

var port_trigger_config_hint = "<br>This section allows to you configure triggering rules of the device. <br><br>";
var port_trigger_config_link = "../help/help_adv.shtml#porttrigger";

var alg_hint = "<br>This section allows you to configure the ALG settings of the device. It is recommended to not touch the default port settings.<br><br>";
var alg_link = "../help/help_adv.shtml#alg";

var vpn_hint = "<br>This section allows you to configure the device for VPN passthrough. It is recommended to not touch the default port settings.<br><br>";
var vpn_link = "../help/help_adv.shtml#vpn";

var mac_filter_hint = "<br>This section allows you to configure the device MAC filter rules. You can deny or allow network device access through your network.<br><br>";
var mac_filter_link = "../help/help_adv.shtml#macfilter";

var ip_filter_hint = "<br>This section allows you to configure the device IP filter  rules. You can deny or allow network device access through your network by IP address.<br><br>";
var ip_filter_link = "../help/help_adv.shtml#ipfilter";

var ip_filter_config_hint = "<br>This section allows you to configure the device IP filter  rules. You can deny or allow network device access through your network by IP address.<br><br>";
var ip_filter_config_link = "../help/help_adv.shtml#ipfilter";

var url_filter_hint = "<br>This section is used to block Fully Qualified Name (FQDN) or you can filter using keywords.<br><br>";
var url_filter_link = "../help/help_adv.shtml#urlfilter";

var dos_hint = "<br>Click the type DoS protection you would like to enable.<br><br>";
var dos_link = "../help/help_adv.shtml#dos";

var domain_blocking_hint = "<br>This section is used to block domain.<br><br>";
var domain_blocking_link = "../help/help_adv.shtml#domainblocking";

var dmz_hint = "<br>DMZ will forward all IP packets from the WAN to the applied IP address. <br><br>Enter the DMZ host IP address you would like to enable to or select the available client from the pull down menu. <br><br>";
var dmz_link = "../help/help_adv.shtml#dmz";

var spi_setting_hint = "<br>This section allows you to configure the device SPI settings and Endpoint Filter.<br><br>";
var spi_setting_link = "../help/help_adv.shtml#spi";

var pkt_filter_rule_hint = "<br>This section allows you to add filter rules through the deivce.<br><br>";
var pkt_filter_rule_link = "../help/help_adv.shtml#Filters_Rules";

var pkt_filter_config_hint = "<br>This section allows you to add filter rules through the deivce.<br><br>";
var pkt_filter_config_link = "../help/help_adv.shtml#Filters_Rules";

var pkt_rule_config_hint = "<br>This section allows you to add filter rules through the deivce.<br><br>";
var pkt_rule_config_link = "../help/help_adv.shtml#Filters_Rules";

var pkt_statistics_hint = "<br>This section displays all packets going through the device.<br><br>";
var pkt_statistics_link = "../help/help_adv.shtml#Statistics";

var static_route_hint = "<br>This section allows you to configure a static route to the device.<br><br>";
var static_route_link = "../help/help_adv.shtml#static_route";

var static_route_config_hint = "<br>This section allows you to configure a static route to the device.<br><br>";
var static_route_config_link = "../help/help_adv.shtml#static_route";

var multicast_igmp_hint = "<br>IGMP Proxy/Snooping allows a layer 2 devices to make intelligent multicast forwarding to hosts (IPSTBs) which will request to join a specific multicast group. This feature reduces the traffic flooding between interfaces that are not registered as receivers to multicast groups.<br><br>";
var multicast_igmp_link = "../help/help_adv.shtml#igmp";

var multicast_mld_hint = "<br>MLD Proxy/Snooping allows a layer 2 devices to make intelligent multicast forwarding to hosts (IPSTBs) which will request to join a specific multicast group. This feature reduces the traffic flooding between interfaces that are not registered as receivers to multicast groups.<br><br>";
var multicast_mld_link = "../help/help_adv.shtml#mld";

var ddns_hint = "<br>Dynamic DNS (DDNS) allows users to allow the device to point to a static hostname giving you the ability to access the device when using dynamic IP address from anywhere.<br><br>";
var ddns_link = "../help/help_adv.shtml#ddns";

var ddns_config_hint = "<br>Dynamic DNS (DDNS) allows users to allow the device to point to a static hostname giving you the ability to access the device when using dynamic IP address from anywhere.<br><br>";
var ddns_config_link = "../help/help_adv.shtml#ddns";

var eth_setting_hint = "<br>This section allows you to configure the Ethernet settings of the device.<br><br>";
var eth_setting_link = "../help/help_adv.shtml#ethernet";

var port_mapping_hint = "<br>This section allows you to map out ports on the device.<br><br>";
var port_mapping_link = "../help/help_adv.shtml#port_mapping";

var qos_qmgmt_hint = "<br>Enable QoS and choose the default DSCP setting to automatically mark all incoming traffic through the device without reference to a particular classifier..<br><br>";
var qos_qmgmt_link = "../help/help_adv.shtml#qos_qmgmt";

var qos_qcfg_hint = "<br>This section allows you to set the QoS queue entries through the network interface. Each queues can be set with a specific precedence. The entries will be configured by the classifier to place ingress packets appropriately.<br><br>";
var qos_qcfg_link = "../help/help_adv.shtml#qos_qcfg";

var qos_qcfg_add_hint = "<br>This section allows you to set the QoS queue entries through the network interface. Each queues can be set with a specific precedence. The entries will be configured by the classifier to place ingress packets appropriately.<br><br>";
var qos_qcfg_add_link = "../help/help_adv.shtml#qos_qcfg";

var qos_qclass_hint = "<br>This section allows you to classify the upstream traffic through the device and assign queue, application entries or to overwrite the IP header of the DSCHP byte.<br><br>";
var qos_qclass_link = "../help/help_adv.shtml#qos_qclass";

var qos_qclassadd_hint = "<br>This section allows you to classify the upstream traffic through the device and assign queue, application entries or to overwrite the IP header of the DSCHP byte.<br><br>";
var qos_qclassadd_link = "../hel p/help_adv.shtml#qos_qclass";

var qos_qstats_hint = "<br>This section displays the device QoS queues status.<br><br>";
var qos_qstats_link = "../help/help_adv.shtml#qos_qstats";

var upnp_hint = "<br>UPnP enables the auto discovery of your UPnP enabled devices through the device.<br><br>";
var upnp_link = "../help/help_adv.shtml#upnp";

var snmp_hint = "<br>Simple Network Management Protocol (SNMP) is a the standard operation and maintenance for the internet.<br><br>";
var snmp_link = "../help/help_adv.shtml#snmp";

//share
var samba_hint = "<br>Disable or enable the SAMBA function.<br><br>";
var samba_link = "../help/help_share.shtml#samba";

var share_folder_hint = "<br>Folders Available and Unavailable<br><br>Can add new folder use button Add.<br><br>";
var share_folder_link = "../help/help_share.shtml#share_folder";

var share_folder_add_hint = "<br>Add share folder with the Folder Name.<br><br>Set Read Only to true if want readonly.<br><br>Set Folder Type to Private Folder can set the folder owner, then others can not write to this folder.<br><br>";
var share_folder_add_link = "../help/help_share.shtml#share_folder";

var share_user_hint = "<br>user management<br><br>Use Add button to add new user.<br><br>Use Edit/Delete icon to edit or delete user.<br><br>The default username admin does not have Delte icon.<br><br>";
var share_user_link = "../help/help_share.shtml#share_user";

var share_user_add_hint = "<br>user management config<br><br><br><br>";
var share_user_add_link = "../help/help_share.shtml#share_user";

var share_group_hint = "<br>group management<br><br>This page include all group and this group's users.<br><br>Use Add button to add new group.<br><br>";
var share_group_link = "../help/help_share.shtml#share_group";

var share_group_add_hint = "<br>group management edit<br><br>Select a member user from User Lis.<br><br>Use the Add New User buton to append selected user to group.<br><br>";
var share_group_add_link = "../help/help_share.shtml#share_group";

var disk_info_hint = "<br>Disk Information show<br><br>FAT32, EXT2, NTFS supported.<br><br>";
var disk_info_link = "../help/help_share.shtml#share_disk";

var media_server_hint = "<br>The Media Server configure UI.<br><br>";
var media_server_link = "../help/help_share.shtml#media_server";

var lpd_hint = "<br>Configure the non-spooling printer server which use LPD(Line Printer Daemon protocol)<br><br>";
var lpd_link = "../help/help_share.shtml#lpd";

//maintenance
var password_hint = "<br>This section allows you to change the login password of the device. For additional security of your network, it is recommended to change the password. Please do not forget the assigned password information to avoid resetting the device.<br><br>";
var password_link = "../help/help_tools.shtml#password";

var remote_mgt_hint = "<br>Remote management allows you to access the device remotely through the WAN interface.<br><br>";
var remote_mgt_link = "../help/help_tools.shtml#remote_management";

var remote_access_hint = "<br>This section allows you to restrict who can access the local management of the device using IP address.<br><br>";
var remote_access_link = "../help/help_tools.shtml#remote_management";

var remote_access_add_hint = "<br>This section allows you to restrict who can access the local management of the device using IP address.<br><br>";
var remote_access_add_link = "../help/help_tools.shtml#remote_management";

var tr069_setting_hint = "<br>TR069 is a management protocol that allows the Auto-Configuration Server (ACS) to conduct the auto-provisioning of settings, firmware updates, status, performance monitoring, and diagnostic collection.<br><br><p>";
var tr069_setting_link = "../help/help_tools.shtml#tr069";

var cmd_hint = "<br>This section allows you to import shell scripts for executing from start to end.<br><br><p>";
var cmd_link = "../help/help_tools.shtml#init_commad";

var syslog_hint = "<br>This section allows you to set both log level and display level events of the device. Emergency is set to the highest level and Debugging at the lowest.<br><br>";
var syslog_link = "../help/help_tools.shtml#syslog";

var syslog_config_hint = "<br>You can set both the Log Level and Display Level to match your needs, with Emergency as the highest level and Debugging as the lowest. <br><br>";
var syslog_config_link = "./help/help_tools.shtml#syslog";

var time_schedule_hint = "<br>This section allows you to create schedules for rules applied in firewall and NAT settings.<br><br>";
var time_schedule_link = "../help/help_tools.shtml#schedule";

var fw_upgrade_hint = "<br>This section allows you to upload periodically released firmwares that improves the device¡¯s performance and or functionality. Any disruption during the firmware process can damage the device, it is not recommended to perform a firmware upgrade through a wireless connection.<br><br>";
var fw_upgrade_link = "../help/help_tools.shtml#fw_upgrade";

var backup_setting_hint = "<br>This section allows you backup the current applied settings of the device or to load backup settings into the device. You can also restore the device back to default settings.<br><br>";
var backup_setting_link = "../help/help_tools.shtml#backup";

var ping_hint = "<br>This section allows you to conduct a ping to a host IP address and verify any response.<br><br>";
var ping_link = "../help/help_tools.shtml#ping";

var diagnostics_hint = "<br>This section allows you to run diagnostic test of the device¡¯s ADSL connection.<br><br>";
var diagnostics_link = "../help/help_tools.shtml#diagnostics";

var reboot_hint = "<br>This section allows you to reboot the device, causing it to power off and on.<br><br>";
var reboot_link = "./help/help_tools.shtml#reboot";

//stauts
var summary_hint = "<br>This section displays all the device information (Firmware version, MAC address, IP address) and all applied settings (WAN, LAN, WLAN) <br><br>";
var summary_link = "../help/help_status.shtml#devinfo";

var adsl_info_hint = "<br>This page displays the status of your DSL line.<br><br>";
var adsl_info_link = "../help/help_status.shtml#stats";

var wireless_client_hint = "<br>This section show wireless LAN clients that are currently connected to your wireless Router.<br><br>";
var wireless_client_link = "../help/help_status.shtml#wl_client";

var lan_client_hint = "<br>This section show all LAN clients that are currently connected to your wireless Router.<br><br>";
var lan_client_link = "../help/help_status.shtml#dhcp_client";

var log_hint = "<br>This page allows you to view, clear, and backup system logs.<br><br>";
var log_link = "../help/help_status.shtml#log";

var route_table_hint = "<br>The section displays the Routing Table.<br><br>";
var route_table_link = "../help/help_status.shtml#stats";

var traffic_hint = "<br>This page displays the transmission and reception statistics of packets that pass through the specified interface.<br><br>";
var traffic_link = "../help/help_status.shtml#traffic_meter";

var driver_version_hint = "<br>The section displays the System Driver version.<br><br>";
var driver_version_link = "../help/help_status.shtml#stats";

var basic_statistic_hint = "<br>This page displays the transmission and reception statistics of the Internet connection, LAN device, wireless port, and the LAN ports.<br><br>";
var basic_statistic_link = "../help/help_status.shtml#stats";

var dsl_statistic_hint = "<br>This page displays the transmission and reception statistics of the DSL line.<br><br>";
var dsl_statistic_link = "../help/help_status.shtml#stats";


//help
var help_menu_hint = "<br>help ...<br><br>";
var help_menu_link = "";

var help_setup_hint = "<br>help ...<br><br>";
var help_setup_link = "";

var help_adv_hint = "<br>help ...<br><br>";
var help_adv_link = "";

var help_share_hint = "<br>help ...<br><br>";
var help_share_link = "";

var help_maintenance_hint = "<br>help ...<br><br>";
var help_maintenance_link = "";

var help_status_hint = "<br>help ...<br><br>";
var help_status_link = "";






