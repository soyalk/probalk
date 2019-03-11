#!/bin/bash
chmod 7777 *
BRed='\e[1;31m'         # Red
BGreen='\e[1;32m'       # Green
installfor64bit (){
 cd dpkg/64/
echo -e "[+]$BGreen  Installing libssl "
dpkg -i libssl.deb
echo -e "[+]$BGreen  Installing Aircrack-ng "
dpkg -i aircrack-ng.deb
echo  -e "[+] $BGreen Installing Reaver "
dpkg -i reaver.deb
echo -e  "[+] Installing  "
dpkg -i  
cd ../..
}

installfor32bit () {
cd dpkg/32/
dpkg -i libssl.deb
echo  -e "[+]$BGreen  Installing Aircrack-ng "
dpkg -i aircrack-ng.deb
echo -e  "[+] $BGreen Installing Reaver "
dpkg -i reaver.deb
echo  -e "[+]$BGreen  Installing  "
dpkg -i
cd ../..
}
processor=`uname -m |grep 64 `
echo -e $BGreen "[+] Installing Needed Packages "
echo -e $BRed  "[!] This script doesn't check if the packages is installed it run just installing proces .dpkg will automaticlly prompt installation if version is old ...  $BGreen " && sleep 2
if [  "$processor" != "" ] ; then
	installfor64bit
else 
	installfor32bit
fi

