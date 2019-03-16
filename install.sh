#!/bin/bash
chmod 7777 *
BRed='\e[1;31m'         # Red
BGreen='\e[1;32m'       # Green
installfor64bit (){
 cd dpkg/64/
echo -e "[+]$BGreen  Installing libssl "
dpkg -i libssl*
#echo -e "[+]$BGreen  Installing Aircrack-ng "
#dpkg -i aircrack-ng*
echo  -e "[+] $BGreen Installing build-essential "
dpkg -i build*
echo -e  "[+] $BGreen Installing  libpcap0.8-dev "
dpkg -i libpcap0.8-dev*
cd ../..
}

installfor32bit () {
cd dpkg/32/
echo -e "[+]$BGreen  Installing libssl "
dpkg -i libssl.deb
#echo  -e "[+]$BGreen  Installing Aircrack-ng "
#dpkg -i aircrack-ng.deb
echo  -e "[+] $BGreen Installing build-essential "
dpkg -i build*
echo  -e "[+]$BGreen  Installing ibpcap0.8-dev  "
dpkg -i libpcap0.8-dev*
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
cd dpkg/make/

unzip reaver* 2>/dev/null
unzip pixiewps* 2>/dev/null
echo -e "[+] installing Pixiewps 1.4"
cd pixiewps-master &&  make &&  make install 2>/dev/null
cd .. 
echo -e "$BGreen[+] installing reaver fork t6x"
cd reaver-wps-fork-t6x-master
cd src
./configure
make 2>/dev/null
make install  2>/dev/null
cd ../../.. 




