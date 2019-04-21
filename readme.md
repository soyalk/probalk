## PROBALK THE FUTURE OF WPA2 ATTACKS
#### :o:  WHAT IS PROBALK SCRIPT AND WHAT IS NEW ON IT ?
-----------------------------------------------------
Probalk  is a script that was made for educationals purposes just to demonstrate how can anyone get in your network even you think that its secured and also to show you some weaknesses of WPA/WPA2 and also i m working on a new attack that is more effective
#### :heavy_check_mark: WHAT ARE THE ATTACKS THAT THIS SCRIPT CAN DO ?
-----------------------------------------------------
  - Heart Bleed Probes Bruteforce Attack (still experimental )
  - WEP Downgrade (evil twin encrypted with wep) [under developement]
  - USB Bad Attack EXE 
  - Bad EXE WiFi Passwords Stealler
  - Pixie Dust Attack  (Reaver/Bully)
  - WPS Pin Bruteforce (Reaver/Bully)
  - Custom WPS PIN CRACKING (Reaver/Bully)
  - All WPS Attacks Against Hiddens Networks
  - Bypass MAC Filter ( Whitelist / Blacklist) 
##### can also do:
  - Increase TX_POWER For Your WiFi Adapter
#### :interrobang: WHAT IS HEART BLEED PROBES ?
-----------------------------------------------------
Heart Bleed Probes Is A Vulnerablity That I Discovered When I Analysed Packets Of My Network , I found The Password Of A WiFi Network Instead of A Probe Frame And For A Period I Found Some Friends Of Mine  who Found The Same Thing  . This Why I Added This Function But Until Now , there is no more Information About This Attack . I Will Try To List The vulnerable Devices . .
#### :heavy_exclamation_mark: REQUERMENT 
-----------------------------------------------------
 - Aircrack-ng
 - Reaver
 - Bully
 - Macchanger
 - libssl
 - libpcap-dev
 - build-essential
 - MDK3 
 ....
#### :heavy_plus_sign: INSTALL 
-----------------------------------------------------
- ```git clone https://github.com/soyalk/probalk.git```
- ```cd probalk```
- ```chmod +x *```
- online recommended :```sudo apt -y install build-essential libpcap-dev aircrack-ng pixiewps bully macchanger mdk3```
- ```bash install.sh```  [ Do not run it if you have latest versions of tools it didn't ready yet ]

#### :heavy_plus_sign: RUN
----------------
- ```./probalk.sh```

-OR

- ```bash probalk.sh```
#### Disclaimer
-----------------------------------------------------
##### To Use The Script You must be Permitted By Network Admin Or must be your network any use out of law is at your responsibility
-----------------------------------------------------
