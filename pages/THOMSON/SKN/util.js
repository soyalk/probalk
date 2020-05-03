/*******************************
 *  This file is utility function.
 *  1. image swap function
 *       MM_swapImage();
 *  2. check ip DomainName and submask function
 *      isValidIpAddress();
 *      CapitalToSmall();
 *      isValidSubnetMask();
 *  3. check user name  function
 *      isValidName();
 *  4. check port function (1~65535)
 *      isValidPort();
 *  5. check mtu function (128~16384)
 *      isValidMtu();
 *  6. check number function
 *      isValidNum();
 *  7. check MAC function
 *      isNValid(); <----maybe modify
 *  8. check HexString function
 * 	isHexString();
 *  9. check password function
 *	isValidPasswd();
 ********************************/
 var hexcase = 0;
 var chrsz = 8;

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/* check MAC*/
function isUnticast(s)
{
    var j = 0;
    var c = s.charAt(1);
        
    j = parseInt(c,16);
    if ( (j == 1) || (j == 3) || (j == 5) || (j == 7) || (j == 9) || (j == 11) || (j == 13) || (j == 15))
    {
        return false;
    }
    return true;
}

function isBlank(s)
{
	if( 0 == s.length)
	return true;
	for (var i = 0; i < s.length; i++)
	{
		var c = s.charAt(i);
		if ((c ==' ') || (c=='\n') || (c =='\t') || (c =='"') )
		return true;
	}
	if( i == s.length)
	return false;
}

function isHexString(s)
{
	var j,x = 0;
	if(s.length < 1)
		return false;

	for (var i = 0; i < s.length; i++)
	{
		var c = s.charAt(i);
		j = parseInt(c,16);

		if ((j == 0) || (j == 1)|| (j == 2)|| (j == 3)|| (j == 4)|| (j == 5)|| (j == 6)									|| (j == 7)|| (j == 8)|| (j == 9)|| (j == 10)|| (j == 11)|| (j == 12)|| (j == 13)|| (j == 14)|| (j == 15))
		{
			continue;
		}
		else
		{
			return false;
		}
	}
	return true;	
}

function isHex(s)
{
	var j,x = 0;
	if(s.length==1)
	return true;
	for (var i = 0; i < s.length; i++)
	{
		var c = s.charAt(i);
		j = parseInt(c,16);
		if ((j == 0) || (j == 1)|| (j == 2)|| (j == 3)|| (j == 4)|| (j == 5)|| (j == 6)
			|| (j == 7)|| (j == 8)|| (j == 9)|| (j == 10)|| (j == 11)|| (j == 12)|| (j == 13)|| (j == 14)|| (j == 15))
		{
				if(i==1)
				return false;
		}
		else
			  return true;
	}
	
}

function isNValid(s)
{
	if (isBlank(s) || isHex(s))
		return true;
	else
		return false;
	
}

function isValidMAC(mac)
{
    var i = 0;

    var validSTR = "0123456789abcdefABCDEF:";
    var addrSTR = mac;
	var macParts;

    for(i=0; i<addrSTR.length; i++)
    {
        if (validSTR.indexOf(addrSTR.charAt(i)) == -1)
            return false;
    }

    macParts = mac.split(':');
    if ( macParts.length != 6 ) 
        return false;

    for(i = 0; i < 6; i++)
	{
		if(macParts[i].length != 2)
			return false;
	}

	return true;
}

function isValidMacMask(mac)
{
	var mask = [128, 64, 32, 16, 8, 4, 2, 1];
	var MacParts;
	var check = 0;
	var i, j, val;

	if (!isValidMAC(mac))
		return false;

	MacParts = mac.split(':');

	for(i = 0; i < MacParts.length; i++)
	{
		val = parseInt(MacParts[i], 16);

		for(j = 0; j < mask.length; j++)
			if (check == 0)
			{
				if ((val & mask[j]) == 0)
					check = 1;
			}
			else
			{
				if ((val & mask[j]) != 0)
					return false;
			}
	}

	return true;
}

function mac2array(mac, tmp)
{
    var i=0;
    
   addrParts = mac.split(':');
   for (i = 0; i < 6; i++) {
      tmp[i] = addrParts[i];
   }    
   return true;
}

/* check is vaild IP, without X.X.X.0*/
function isValidIpAddress(address) {
    var i = 0;

    var validSTR = "0123456789.";
    var addrSTR = address;
    for(i=0; i<addrSTR.length; i++)
    {
        if (validSTR.indexOf(addrSTR.charAt(i)) == -1)
            return false;
    }

    addrParts = address.split('.');
    if ( addrParts.length != 4 ) 
        return false;

    if (addrParts[0]==0)
        return false;

    if (addrParts[0]==127)
        return false; //Lookback address
    
    if (addrParts[0]>=224 && addrParts[0]<=239)
        return false; //Class D address

    if (addrParts[0]>=240 && addrParts[0]<=255)
        return false; //Class E address

    if (addrParts[2]==0 && addrParts[3]==0)
        return false;
     
    /* Check IP Class */    
    if ((addrParts[0] <= 127) && (addrParts[0] >= 0))
    {
        if ((addrParts[1] == 255) && (addrParts[2] == 255) && (addrParts[3] == 255))
         return false;
    }
    else if ((addrParts[0] <= 191) && (addrParts[0] >= 128))
    {
        if ((addrParts[2] == 255) && (addrParts[3] == 255))
         return false;
    }
    else if ((addrParts[0] <= 223) && (addrParts[0] >= 192))
    {
        if ((addrParts[3] == 255) || (addrParts[3] == 0))
         return false;
    }


    for (i = 0; i < 4; i++) {
        if (isNaN(addrParts[i]) || addrParts[i] == "" || ((addrParts[i].length > 1) && (addrParts[i].charAt(0) ==0 )))
            return false;
        
        if (( addrParts[i] < 0 || addrParts[i] > 255 ) || (i==3 && addrParts[i] ==0)|| (i==3 && addrParts[i] == 255) || (addrParts[i].indexOf(".")>-1))
            return false;
    }
    
    return true;
}

function CapitalToSmall(capital)
{
	var i;
	var nameParts = capital.split('.');
		
	unlawful = "\"<>%\\^[]()`\+\$\,='#&!*/?: \t";
	
	for(i=0;i<nameParts.length;i++)
    	{
    		if (unlawful.indexOf(nameParts) == -1 && (capital.charCodeAt(0) > 40 && capital.charCodeAt(0) < 123))  
        	{	
        		if (nameParts[i].toLowerCase() == "com" ||  nameParts[i].toLowerCase() == "gov" || nameParts[i].toLowerCase() == "edu" || nameParts[i].toLowerCase() == "mil" || nameParts[i].toLowerCase() == "org" || nameParts[i].toLowerCase() == "arpa")
        		return true;
        	}
    	}
        
    	return false;
}

function isValidrouterIp(address) {
    var i = 0;

    if ( address == '0.0.0.0' )
        return false;

    var validSTR = "0123456789.";
    var addrSTR = address;
    for(i=0; i<addrSTR.length; i++)
    {
        if (validSTR.indexOf(addrSTR.charAt(i)) == -1)
            return false;
    }

    addrParts = address.split('.');
    if ( addrParts.length != 4 ) 
        return false;

    if (addrParts[0]==0)
        return false;

    if (addrParts[0]==127)
        return false; //Lookback address
    
    if (addrParts[0]>=224 && addrParts[0]<=239)
        return false; //Class D address

    if (addrParts[0]>=240 && addrParts[0]<=255)
        return false; //Class E address


    addrParts = address.split('.');
    if ( addrParts.length != 4 ) 
        return false;
    for (i = 0; i < 4; i++) {
        if (isNaN(addrParts[i]) || addrParts[i] =="" || ((addrParts[i].length > 1) && (addrParts[i].charAt(0) ==0 )))
            return false;
        num = parseInt(addrParts[i]);
        if (( num < 0 || num > 255 ) )
            return false;
    }
    return true;
}

function isValidroutermask(address) {
    var i = 0;

    if ( address == '0.0.0.0' )
        return false;

    var validSTR = "0123456789.";
    var addrSTR = address;
    for(i=0; i<addrSTR.length; i++)
    {
        if (validSTR.indexOf(addrSTR.charAt(i)) == -1)
            return false;
    }

    addrParts = address.split('.');
    if ( addrParts.length != 4 ) 
        return false;
    for (i = 0; i < 4; i++) {
        if (isNaN(addrParts[i]) || addrParts[i] =="" || ((addrParts[i].length > 1) && (addrParts[i].charAt(0) ==0 )))
            return false;
        num = parseInt(addrParts[i]);
        if (( num < 0 || num > 255 ) )
            return false;
    }
    return true;
}

function isValidroutergwIp(address) {
    var i = 0;

    if ( address == '0.0.0.0' )
        return false;

    var validSTR = "0123456789.";
    var addrSTR = address;
    for(i=0; i<addrSTR.length; i++)
    {
        if (validSTR.indexOf(addrSTR.charAt(i)) == -1)
            return false;
    }

    addrParts = address.split('.');
    if ( addrParts.length != 4 ) 
        return false;

    if (addrParts[0]==0)
        return false;

    if (addrParts[0]==127)
        return false; //Lookback address
    
    if (addrParts[0]>=224 && addrParts[0]<=239)
        return false; //Class D address

    if (addrParts[0]>=240 && addrParts[0]<=255)
        return false; //Class E address


    addrParts = address.split('.');
    if ( addrParts.length != 4 ) 
        return false;
    for (i = 0; i < 4; i++) {
        if (isNaN(addrParts[i]) || addrParts[i] =="" || ((addrParts[i].length > 1) && (addrParts[i].charAt(0) ==0 )))
            return false;
        num = parseInt(addrParts[i]);
        if (( num < 0 || num > 255 ) )
            return false;
    }
    return true;
}


function isTheSameSubNet(address1, address2, submask) {
    var ip1, ip2, mask1, i;
    
    addrParts1 = address1.split('.');
    addrParts2 = address2.split('.');
    mask = submask.split('.');
    
    for (i = 0; i < 4; i++) {
        ip1 = parseInt(addrParts1[i]);
        ip2 = parseInt(addrParts2[i]);
        mask1 = parseInt(mask[i]);
        if ((ip1& mask1)!=(ip2&mask1))
            return false;
    }        
    return true;
}

function isTheSameIP(address1, address2) {
    var ip1, ip2, i;
    
    addrParts1 = address1.split('.');
    addrParts2 = address2.split('.');
 
    
    for (i = 0; i < 4; i++) {
        ip1 = parseInt(addrParts1[i]);
        ip2 = parseInt(addrParts2[i]);
        
        if (ip1 != ip2)
            return false;
    }        
    return true;
}

function checkRouterSubNet(address1, submask) {
    var ip1, ip2, mask1, i;
    
    addrParts1 = address1.split('.');
    
    mask = submask.split('.');
    
    for (i = 0; i < 4; i++) {
        ip1 = parseInt(addrParts1[i]);
        
        mask1 = parseInt(mask[i]);
        if ((ip1& mask1)!=(ip1))
            return false;
    }        
    return true;
}


function isIpRangeCorrect(address1, address2) {
    
    addrParts1 = address1.split('.');
    addrParts2 = address2.split('.');
    
    /*if( parseInt(addrParts1[0]) != parseInt(addrParts2[0]) ||
    		parseInt(addrParts1[1]) != parseInt(addrParts2[1]) ||
    		parseInt(addrParts1[2]) != parseInt(addrParts2[2]) ||
    		parseInt(addrParts1[3]) >  parseInt(addrParts2[3]))
            return false;*/
    if ( parseInt(addrParts1[0]) < parseInt(addrParts2[0]))
    		return true; 
    if ((parseInt(addrParts1[0]) == parseInt(addrParts2[0])) &&
    	 (parseInt(addrParts1[1]) < parseInt(addrParts2[1])))
    	  return true; 
    if ((parseInt(addrParts1[0]) == parseInt(addrParts2[0])) &&
    	 (parseInt(addrParts1[1]) == parseInt(addrParts2[1]))  &&
    	 (parseInt(addrParts1[2]) < parseInt(addrParts2[2])))
    	  return true;
    if ((parseInt(addrParts1[0]) == parseInt(addrParts2[0])) &&
    	 (parseInt(addrParts1[1]) == parseInt(addrParts2[1]))  &&
    	 (parseInt(addrParts1[2]) == parseInt(addrParts2[2])) &&
    	 (parseInt(addrParts1[3]) <=  parseInt(addrParts2[3])))
    	 return true;
    				
    return false;
}

/* check submask */
function getLeftMostZeroBitPos(num) {
   var i = 0;
   var numArr = [128, 64, 32, 16, 8, 4, 2, 1];

   for ( i = 0; i < numArr.length; i++ )
      if ( (num & numArr[i]) == 0 )
         return i;

   return numArr.length;
}

function getRightMostOneBitPos(num) {
   var i = 0;
   var numArr = [1, 2, 4, 8, 16, 32, 64, 128];

   for ( i = 0; i < numArr.length; i++ )
      if ( ((num & numArr[i]) >> i) == 1 )
         return (numArr.length - i - 1);

   return -1;
}

function isValidSubnetMask(mask) {
   var i = 0, num = 0;
   var zeroBitPos = 0, oneBitPos = 0;
   var zeroBitExisted = false;

   if ( mask == '0.0.0.0' )
      return false;

    var validSTR = "0123456789.";
    var maskSTR = mask;
    for(i=0; i<maskSTR.length; i++)
    {
        if (validSTR.indexOf(maskSTR.charAt(i)) == -1)
            return false;
    }        

   maskParts = mask.split('.');
   if ( maskParts.length != 4 ) return false;

   for (i = 0; i < 4; i++) {
     if (isNaN(maskParts[i]) || maskParts[i] == "" || ((maskParts[i].length > 1) && (maskParts[i].charAt(0) ==0 )))
            return false;
      num = parseInt(maskParts[i]);
      if ( num < 0 || num > 255 )
         return false;
      if ( zeroBitExisted == true && num != 0 )
         return false;
      zeroBitPos = getLeftMostZeroBitPos(num);
      oneBitPos = getRightMostOneBitPos(num);
      if ( zeroBitPos < oneBitPos )
         return false;
      if ( zeroBitPos < 8 )
         zeroBitExisted = true;
   }

   return true;
}

/* check port 1~65536*/
function isValidPort(port) {

    if (isBlank(port)== true)   
        return false;
    var validSTR = "0123456789:";
    var portSTR = port;
    for(i=0; i<portSTR.length; i++)
    {
        if (validSTR.indexOf(portSTR.charAt(i)) == -1)
            return false;
    }        
   portrange = port.split(':');
   if ( portrange.length < 1 || portrange.length > 2 ) {
       return false;
   }
   if ( isNaN(portrange[0]) || ((portrange[0].length > 1) && (portrange[0].charAt(0) ==0 )))
       return false;
   
   if ( portrange.length > 1 ) {
       if ( isNaN(portrange[1]) || ((portrange[0].length > 1) && (portrange[0].charAt(0) ==0 )))
          return false;
       if ( parseInt(portrange[1]) <= parseInt(portrange[0]) )
           return false;      
   }
   
   if ( parseInt(portrange[0]) < 1 || parseInt(portrange[0]) > 65535 || parseInt(portrange[1]) < 1 || parseInt(portrange[1]) > 65535)
       return false;
   
   return true;
}

/* check port 1~65536*/
function isValidPortRange(port) {

    if (isBlank(port)== true)   
        return false;
    var validSTR = "0123456789";
    var portSTR = port;
    for(i=0; i<portSTR.length; i++)
    {
        if (validSTR.indexOf(portSTR.charAt(i)) == -1)
            return false;
    }        

   if ( isNaN(portSTR) || ((portSTR.length > 1) && (portSTR.charAt(0) ==0 )))
       return false;
  
   if ( parseInt(portSTR) < 1 || parseInt(portSTR) > 65535 )
       return false;
   
   return true;
}

/* check mtu 128~1492*/
function isValidMtuRange(mtu) {

    if (isBlank(mtu)== true)   
        return false;
    var validSTR = "0123456789";
    var mtuSTR = mtu;
    for(i=0; i<mtuSTR.length; i++)
    {
        if (validSTR.indexOf(mtuSTR.charAt(i)) == -1)
            return false;
    }        

   if ( isNaN(mtuSTR) || ((mtuSTR.length > 1) && (mtuSTR.charAt(0) ==0 )))
       return false;
  
   if ( parseInt(mtuSTR) < 128 || parseInt(mtuSTR) > 1492 )
       return false;
   
   return true;
}

function utf8_len(str)
{
	var re = /[\w!'\(\)\*\-\.~]/;
	var j = 0;
	for(var i = 0; i < str.length; i++)
	{
		if(re.test(str.charAt(i)))
		{
			j += 2;
		}
	}
	return (encodeURIComponent(str).length + j) / 3;
}


function isValidAscKey(key, lenMin, lenMax)
{
	var len=key.length;
	var ret = false;
	var i = 0;
	var consecutive_blank = 0;

	// 2010-07-06
	if(key.charAt(0) == ' ' || key.charAt(len-1) == ' ')
	{
		alert("Invalid key: Start or end with blank space!");
		return false;
	}

	if(lenMin <= len && len <= lenMax)
	{
		for (i=0; i<len; i++)
		{
			// 2010-07-06
			if(key.charAt(i) == ' ')
				consecutive_blank++;
			else
				consecutive_blank = 0;
			if(consecutive_blank > 1)
			{
				alert("Invalid key: More than 1 consecutive blank space!");
				return false;
			}
			if ( !((key.charAt(i) >= '0' && key.charAt(i) <= '9') ||
			       (key.charAt(i) >= 'a' && key.charAt(i) <= 'z') ||
			       (key.charAt(i) >= 'A' && key.charAt(i) <= 'Z') ||
			       (key.charAt(i) == ' ')  || (key.charAt(i) == '.') || (key.charAt(i) == ':') || (key.charAt(i) == '-') || 
			       (key.charAt(i) == '_') || (key.charAt(i) == '/') || (key.charAt(i) == '@')))
				break;
		}
		if(i==len)
			ret = true;
	}
	return ret;
}

function isValidHexKey(key, lenHex)
{
	var len=key.length;
	var ret = false;

	if(len == lenHex)
	{
		for (var i=0; i<len; i++)
		{
			if ( !((key.charAt(i) >= '0' && key.charAt(i) <= '9') ||
			       (key.charAt(i) >= 'a' && key.charAt(i) <= 'f') ||
			       (key.charAt(i) >= 'A' && key.charAt(i) <= 'F') ))
				break;
		}
		if(i==len)
			ret = true;
	}
	return ret;
}

/* check wireless ssid */
function isValidSsid(ssid)
{
	var invalidStr = "`\"";
	var i = 0;	
	var str_bytes = 0;
   
	if(ssid.length == 0)
	{
		alert("Please enter the SSID!");
		return false;
	}
	 
	for ( i = 0; i < ssid.length; i++ ) 
	{
		if(invalidStr.indexOf(ssid.charAt(i)) != -1 )
		{
			alert("Invalid SSID! Don't include: " + invalidStr );
			return false;
		}
	}
	
	str_bytes = utf8_len(ssid);
	if(  str_bytes > 32)
	{
		alert("Invalid SSID(" + str_bytes + " bytes)! Length of SSID should be equal or less than 32, please enter again!");
		return false;
	}
	return true;
}

/* check name is vaild*/
function isNameUnsafe(compareChar) {
   var unsafeString = "`~!@#$%^&*()=+[]{};:,<>? \b\f\n\r\t\'\"\\/";
	
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}   

function isValidName(name) {
   var i = 0;	
   
   for ( i = 0; i < name.length; i++ ) {
      if ( isNameUnsafe(name.charAt(i)) == true )
         return false;
   }

   return true;
}

// Check if a Number valid, min_num< num <max_num
function isValidNum(num, max_num, min_num) 
{
	var validSTR = "0123456789";
	var numSTR = num;
	
	for(i=0; i<num.length; i++)
    {
        if (validSTR.indexOf(numSTR.charAt(i)) == -1)
            return false;
    } 
    
    if ( isNaN(numSTR) || ((numSTR.length > 1) && (numSTR.charAt(0) ==0 )))
       return false;
       
    if ((num > max_num) || (num < min_num) || isNaN(num))
         return false;
   return true;
}

function isValidNumNew(num) 
{
    if (isBlank(num)== true)   
        return false;
    var validSTR = "0123456789";
    var numSTR = num;
    for(i=0; i<numSTR.length; i++)
    {
        if (validSTR.indexOf(numSTR.charAt(i)) == -1)
            return false;
    }        

   if ( isNaN(numSTR) || ((numSTR.length > 1) && (numSTR.charAt(0) ==0 )))
       return false;
  
   if ( parseInt(numSTR) < 1 || parseInt(numSTR) > 3600 )
       return false;
   
   return true;
}

function isValidInt(str)
{
    if(/^(-|\+)?\d+$/.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isValidIntMinMax(str, min_num, max_num)
{
   if(isValidInt(str) == true)
    {
        if(parseInt(str,10)>=parseInt(min_num,10) && parseInt(str,10) <= parseInt(max_num,10))
            return true;
        else
            return false;
    }
}

function isValidDomainName(domain_name)
{
   var invalid_char, name_parts;

   invalid_char = /[^0-9A-Za-z.-]/g;

    name_parts = domain_name.split(".");

    for(i = 0; i < name_parts.length; i++)
    {
        if(name_parts[i].length == 0)
           return false;

        if(name_parts[i].charAt(0) == "-")
           return false;

        if(name_parts[i].charAt(name_parts[i].length - 1) == "-")
           return false;

        if(invalid_char.test(name_parts[i]) == true)
           return false;
    }

    return true;
}

function isValidSmtpAddress(smtp_addr)
{
    var addr_parts;

    addr_parts = smtp_addr.split(":");

    if(addr_parts.length > 2)
       return false;

    if(isValidIpAddress(addr_parts[0]) == false)
       if(isValidDomainName(addr_parts[0]) == false)
          return false;

    if(addr_parts.length == 2)
       if(isValidPort(addr_parts[1]) == false)
          return false;

    return true;
}

function ConvertEscapeChar(escape_str)
{
     var tmp_str;

    tmp_str = escape_str.replace(/\\/g, "\\\\");

    escape_str = tmp_str;

    tmp_str = escape_str.replace(/\"/g, "\\\"");

    return tmp_str;
}

function isValidAccount(account_str)
{
    var invalid_char;

    invalid_char = /[ ]/g;

    if(invalid_char.test(account_str) == true)
       return;

    account_str = ConvertEscapeChar(account_str);

    return account_str;
}

function isValidMailAddress(mail_addr)
{
    var addr_parts;

    addr_parts = mail_addr.split('@');

    if(addr_parts.length != 2)
       return false;

    if((addr_parts[0] = isValidAccount(addr_parts[0])) == false)
       return false;

    if(isValidDomainName(addr_parts[1]) == false)
       return false;

    mail_addr = addr_parts[0] + "@" + addr_parts[1];

    return mail_addr;
}

function GetLoginInterface(location_object)
{
    var interface_addr;

    interface_addr = location_object.protocol + "//" + location_object.host + "/";

    return interface_addr;
}

function calcMD5(s)
{ 
	return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}

/*
* Convert a string to an array of little-endian words
* If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
*/
function str2binl(str)
{
	var bin = Array();

	var mask = (1 << chrsz) - 1;

	for(var i = 0; i < str.length * chrsz; i += chrsz)

		bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);

	return bin;
}

/*
* Bitwise rotate a 32-bit number to the left.
*/
function bit_rol(num, cnt)
{
	return (num << cnt) | (num >>> (32 - cnt));
}

/*
* These functions implement the four basic operations the algorithm uses.
*/
function md5_cmn(q, a, b, x, s, t)
{
	return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}

function md5_ff(a, b, c, d, x, s, t)
{
	return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function md5_gg(a, b, c, d, x, s, t)
{
	return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function md5_hh(a, b, c, d, x, s, t)
{
	return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5_ii(a, b, c, d, x, s, t)
{
	return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
* Add integers, wrapping at 2^32. This uses 16-bit operations internally
* to work around bugs in some JS interpreters.
*/
function safe_add(x, y)
{
	var lsw = (x & 0xFFFF) + (y & 0xFFFF);

	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);

	return (msw << 16) | (lsw & 0xFFFF);
}

/*
* Calculate the MD5 of an array of little-endian words, and a bit length
*/
function core_md5(x, len)
{
    /* append padding */

	x[len >> 5] |= 0x80 << ((len) % 32);

	x[(((len + 64) >>> 9) << 4) + 14] = len;


	var a = 1732584193;

	var b = -271733879;

	var c = -1732584194;

	var d = 271733878;

	for(var i = 0; i < x.length; i += 16)
	{
		var olda = a;

		var oldb = b;

		var oldc = c;

		var oldd = d;


		a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);

		d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);

		c = md5_ff(c, d, a, b, x[i+ 2], 17, 606105819);

		b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);

		a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);

		d = md5_ff(d, a, b, c, x[i+ 5], 12, 1200080426);

		c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);

		b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);

		a = md5_ff(a, b, c, d, x[i+ 8], 7 , 1770035416);

		d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);

		c = md5_ff(c, d, a, b, x[i+10], 17, -42063);

		b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);

		a = md5_ff(a, b, c, d, x[i+12], 7 , 1804603682);

		d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);

		c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);

		b = md5_ff(b, c, d, a, x[i+15], 22, 1236535329);


		a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);

		d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);

		c = md5_gg(c, d, a, b, x[i+11], 14, 643717713);

		b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);

		a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);

		d = md5_gg(d, a, b, c, x[i+10], 9 , 38016083);

		c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);

		b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);

		a = md5_gg(a, b, c, d, x[i+ 9], 5 , 568446438);

		d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);

		c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);

		b = md5_gg(b, c, d, a, x[i+ 8], 20, 1163531501);

		a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);

		d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);

		c = md5_gg(c, d, a, b, x[i+ 7], 14, 1735328473);

		b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);


		a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);

		d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);

		c = md5_hh(c, d, a, b, x[i+11], 16, 1839030562);

		b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);

		a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);

		d = md5_hh(d, a, b, c, x[i+ 4], 11, 1272893353);

		c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);

		b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);

		a = md5_hh(a, b, c, d, x[i+13], 4 , 681279174);

		d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);

		c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);

		b = md5_hh(b, c, d, a, x[i+ 6], 23, 76029189);

		a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);

		d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);

		c = md5_hh(c, d, a, b, x[i+15], 16, 530742520);

		b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);


		a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);

		d = md5_ii(d, a, b, c, x[i+ 7], 10, 1126891415);

		c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);

		b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);

		a = md5_ii(a, b, c, d, x[i+12], 6 , 1700485571);

		d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);

		c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);

		b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);

		a = md5_ii(a, b, c, d, x[i+ 8], 6 , 1873313359);

		d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);

		c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);

		b = md5_ii(b, c, d, a, x[i+13], 21, 1309151649);

		a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);

		d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);

		c = md5_ii(c, d, a, b, x[i+ 2], 15, 718787259);

		b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);


		a = safe_add(a, olda);

		b = safe_add(b, oldb);

		c = safe_add(c, oldc);

		d = safe_add(d, oldd);
	}

	return Array(a, b, c, d);
}

/*
* Convert an array of little-endian words to a hex string.
*/
function binl2hex(binarray)
{
	var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";

	var str = "";

	for(var i = 0; i < binarray.length * 4; i++)
	{
		str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +

		hex_tab.charAt((binarray[i>>2] >> ((i%4)*8 )) & 0xF);

	}

	return str;
}

function PassPhrase104(key)
{
    var pseed2 = "";

    Length2 = key.length;

    for(p=0; p<64; p++)
    {
        tempCount = p % Length2;

        pseed2 += key.substring(tempCount, tempCount+1);
    }

    md5Str = calcMD5(pseed2);

    return md5Str.substring(0, 26).toUpperCase();
}



function split_display_string(split_str, split_len)
{
    var loc, tmp_str = "";


    if((split_str.length <= 0) || (split_len <= 0))
       return tmp_str;

    if(split_str.length <= split_len)
       tmp_str = split_str;
    else
       for(loc = 0; loc < split_str.length; loc++)
           if(((loc + 1) % split_len) != 0)
              tmp_str += split_str.charAt(loc);
           else
              if((loc + 1) < split_str.length)
                 tmp_str += split_str.charAt(loc) + "-" + "<BR>";

    return tmp_str;
}


function LengthCheck(MaxLength,strTmp)
 
{
	if(strTmp.length > MaxLength)
		return false;
	else
		return true;
}

function FolderNameLengthCheck(MaxLength,strTmp)
{
	var i,strLength = 0;
	var chTmp;
	for(i=0; i < strTmp.length; i++)
	{
		chTmp = strTmp.substr(i,1);

		if(chTmp >= 'a' && chTmp <= 'z' )
			strLength++;
		else	
		if(chTmp >= 'A' && chTmp <= 'Z' )
			strLength++;
		else	
		if(chTmp >= '0' && chTmp <= '9' )
			strLength++;
		else
		if(chTmp == ' ' )
			strLength++;
		else
		if(chTmp == '~' )
			strLength++;
		else	
		if(chTmp == '!' )
			strLength++;
		else
		if(chTmp == '@' )
			strLength++;
		else			
		if(chTmp == '#' )
			strLength++;
		else	
		if(chTmp == '%' )
			strLength++;
		else	
		if(chTmp == '^' )
			strLength++;
		else	
		if(chTmp == '&' )
			strLength++;
		else		
		if(chTmp == '(' )
			strLength++;
		else		
		if(chTmp == ')' )
			strLength++;
		else					
		if(chTmp == '_' )
			strLength++;
		else		
		if(chTmp == '+' )
			strLength++;
		else			
		if(chTmp == '{' )
			strLength++;
		else	
		if(chTmp == '}' )
			strLength++;
		else								
		if(chTmp == '-' )
			strLength++;
		else	
		if(chTmp == '=' )
			strLength++;
		else	
		if(chTmp == '[' )
			strLength++;
		else		
		if(chTmp == ']' )
			strLength++;
		else	
		if(chTmp == ';' )
			strLength++;
		else		
		if(chTmp == "\'" )
			strLength++;
		else											
		if(chTmp == '.' )
			strLength++;
		else																				
			strLength= strLength+6;
	}
	
	if(strLength > MaxLength)
		return false;
	else
		return true;
}

function support3gcheck(value)
{
	if (value == "3G_Modem_PPP"){
		if (sys_support3g == 1)
			return 1;
		else
		return 0;
	}
	else
		return -1;
}

//move from domainblockimg, for used by domainblcking and ntp
function checkDomain(nname)
{
var arr = new Array(
'.com','.net','.org','.biz','.coop','.info','.museum','.name',
'.pro','.edu','.gov','.int','.mil','.ac','.ad','.ae','.af','.ag',
'.ai','.al','.am','.an','.ao','.aq','.ar','.as','.at','.au','.aw',
'.az','.ba','.bb','.bd','.be','.bf','.bg','.bh','.bi','.bj','.bm',
'.bn','.bo','.br','.bs','.bt','.bv','.bw','.by','.bz','.ca','.cc',
'.cd','.cf','.cg','.ch','.ci','.ck','.cl','.cm','.cn','.co','.cr',
'.cu','.cv','.cx','.cy','.cz','.de','.dj','.dk','.dm','.do','.dz',
'.ec','.ee','.eg','.eh','.er','.es','.et','.fi','.fj','.fk','.fm',
'.fo','.fr','.ga','.gd','.ge','.gf','.gg','.gh','.gi','.gl','.gm',
'.gn','.gp','.gq','.gr','.gs','.gt','.gu','.gv','.gy','.hk','.hm',
'.hn','.hr','.ht','.hu','.id','.ie','.il','.im','.in','.io','.iq',
'.ir','.is','.it','.je','.jm','.jo','.jp','.ke','.kg','.kh','.ki',
'.km','.kn','.kp','.kr','.kw','.ky','.kz','.la','.lb','.lc','.li',
'.lk','.lr','.ls','.lt','.lu','.lv','.ly','.ma','.mc','.md','.mg',
'.mh','.mk','.ml','.mm','.mn','.mo','.mp','.mq','.mr','.ms','.mt',
'.mu','.mv','.mw','.mx','.my','.mz','.na','.nc','.ne','.nf','.ng',
'.ni','.nl','.no','.np','.nr','.nu','.nz','.om','.pa','.pe','.pf',
'.pg','.ph','.pk','.pl','.pm','.pn','.pr','.ps','.pt','.pw','.py',
'.qa','.re','.ro','.rw','.ru','.sa','.sb','.sc','.sd','.se','.sg',
'.sh','.si','.sj','.sk','.sl','.sm','.sn','.so','.sr','.st','.sv',
'.sy','.sz','.tc','.td','.tf','.tg','.th','.tj','.tk','.tm','.tn',
'.to','.tp','.tr','.tt','.tv','.tw','.tz','.ua','.ug','.uk','.um',
'.us','.uy','.uz','.va','.vc','.ve','.vg','.vi','.vn','.vu','.ws',
'.wf','.ye','.yt','.yu','.za','.zm','.zw');

	var mai = nname;
	var val = true;

	var dot = mai.lastIndexOf(".");
	var dname = mai.substring(0,dot);
	var ext = mai.substring(dot,mai.length);

      /*
       * mcj: the max domain length : 50 (follow realtek)
       * should we use 50 for limited ?
       * may be yes
       * so , set dot>2 && dot<50
       */
	if(dot>2 && dot<50)
	{
      /*
       * mcj: check if the domain extension is correctly, like ".com"
       */
		for(var i=0; i<arr.length; i++)
		{
			if(ext == arr[i])
			{
				val = true;
				break;
			}
			else
			{
				val = false;
			}
		}
		if(val == false)
		{
			alert("Your domain extension "+ext+" is not correct");
			return false;
		}
		else
		{
			for(var j=0; j<dname.length; j++)
			{
                    /*
                     * mcj: check if the domain contain special characters
                     */
				var dh = dname.charAt(j);
				var hh = dh.charCodeAt(0);
				if((hh > 47 && hh<59) || (hh > 64 && hh<91) || (hh > 96 && hh<123) || hh==45 || hh==46)
				{
					if((j==0 || j==dname.length-1) && hh == 45)
					{
						alert("Domain name should not begin are end with '-'");
						return false;
					}
				}
				else
				{
					alert("Your domain name should not have special characters");
					return false;
				}
			}
		}
	}
	else
	{
        if(dot<2)
        alert("Your Domain name is too short!");
        if(dot>50)
        alert("Your Domain name is too long!");
		return false;
	}

	return true;
}

function pausecomp(millis)
{
	var date = new Date();
	var curDate = null;

	do {
		curDate = new Date();
	}while(curDate-date < millis);
}

function do_auto_refresh()
{
	location.reload();
}

function isValidVSName(name) {
	var i = 0;	
	var invalidName = "`\b\f\n\r\t\'\"\\/";
	
	if(name.length == 0)
		return false;
	
	for (var i = 0; i < name.length; i++)
	{
		if(invalidName.indexOf(name.charAt(i)) != -1 )
		{
			return false;
		}
	}
	
	return true;
}

/* check password is vaild*/
function isPasswdUnsafe(compareChar) {
   var unsafeString = "\b\f\n\r\t\'\"\\/";
	
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 127 )
      return false; // found no unsafe chars, return false
   else
      return true;
}   

function isValidPasswd(passwd) 
{
   var i = 0;	
   
   for ( i = 0; i < passwd.length; i++ ) {
      if ( isPasswdUnsafe(passwd.charAt(i)) == true )
         return false;
   }

   return true;
}

