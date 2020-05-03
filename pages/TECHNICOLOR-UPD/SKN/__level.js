var ADMIN = 15;
var USER = 1;
var GUEST = 0;
var CUSTOMIZATION = -1;
var CUSTOMIZATION_URL = "";
var CUSTOMIZATION_CSS = "";

MenuItemUserLevel = new Array();
/*wizard*/
MenuItemUserLevel["../wizard/wizard_multipvc.shtml"] = GUEST;

/*setup*/
MenuItemUserLevel["../home/home_inter.shtml"] = ADMIN;
MenuItemUserLevel["../home/home_wan_3g_modem.shtml"] = ADMIN;
MenuItemUserLevel["../home/home_wireless.shtml"] = USER;
MenuItemUserLevel["../home/home_lan.shtml"] = USER;
MenuItemUserLevel["../home/home_time_setting.shtml"] = USER;

/*advanced*/
MenuItemUserLevel["../advanced/adv_wireless.shtml"] = USER;
MenuItemUserLevel["../advanced/adv_wan.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_lan_interface.shtml"] = USER;
MenuItemUserLevel["../advanced/adv_adsl_setting.shtml"] = ADMIN
MenuItemUserLevel["../advanced/adv_rip_setting.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_nat.shtml"] = USER;
MenuItemUserLevel["../advanced/adv_firewall.shtml"] = USER;
MenuItemUserLevel["../advanced/adv_packetft.shtml"] = USER;
MenuItemUserLevel["../advanced/adv_static_route.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_multicast.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_ddns.shtml"] = USER;
MenuItemUserLevel["../advanced/adv_lan_ethernet_settings.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_port_mapping.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_qos.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_upnp.shtml"] = USER;
MenuItemUserLevel["../advanced/adv_fon_sm.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_snmp.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_ipv6_wan.shtml"] = ADMIN;
MenuItemUserLevel["../advanced/adv_ipv6_lan_state_service.shtml"] = ADMIN;

/*share*/
MenuItemUserLevel["../share/share_samba_config.shtml"] = USER;
MenuItemUserLevel["../share/share_share.shtml"] = USER;
MenuItemUserLevel["../share/share_disk.shtml"] = USER;
MenuItemUserLevel["../share/share_ushare.shtml"] = USER;
MenuItemUserLevel["../share/share_lpd.shtml"] = USER;

/*maintenance*/
MenuItemUserLevel["../tools/tools_password.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_remote_management.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_remote_access.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_tr069_setting.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_command.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_syslog.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_time_schedule.shtml"] = USER;
MenuItemUserLevel["../tools/tools_firmware_upgrade.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_backup_setting.shtml"] = ADMIN;
MenuItemUserLevel["../tools/tools_ping.shtml"] = USER;
MenuItemUserLevel["../tools/tools_diagnostics.shtml"] = USER;
MenuItemUserLevel["../tools/tools_reboot.shtml"] = USER;

/*status*/
MenuItemUserLevel["../status/status_summary.shtml"] = GUEST;
MenuItemUserLevel["../status/status_adsl_info.shtml"] = GUEST;
MenuItemUserLevel["../status/status_wireless_clients.shtml"] = GUEST;
MenuItemUserLevel["../status/status_lan_dhcpclient.shtml"] = GUEST;
MenuItemUserLevel["../status/status_log.shtml"] = GUEST;
MenuItemUserLevel["../status/status_route_statistic.shtml"] = GUEST;
MenuItemUserLevel["../status/status_traffic.shtml"] = GUEST;
MenuItemUserLevel["../status/status_drvver.shtml"] = GUEST;
MenuItemUserLevel["../status/status_states.shtml"] = GUEST;
MenuItemUserLevel["../status/status_ipv6.shtml"] = GUEST;

/*help*/
MenuItemUserLevel["../help/help_menu.shtml"] = GUEST;
MenuItemUserLevel["../help/help_setup.shtml"] = GUEST;
MenuItemUserLevel["../help/help_adv.shtml"] = GUEST;
MenuItemUserLevel["../help/help_share.shtml"] = GUEST;
MenuItemUserLevel["../help/help_tools.shtml"] = GUEST;
MenuItemUserLevel["../help/help_status.shtml"] = GUEST;
