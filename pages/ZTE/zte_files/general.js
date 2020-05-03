function doValidIPAndMask(Address, Mask, Where)
{
	if((Address == "") && (Mask != ""))
	{
		if(Where == 1){
		alert("Invalid destination IP address: " + Address);		}else if(Where == 2){
		alert("Invalid Source IP Address: "+Address);		}else {
   		alert("IP address is empty or wrong format!");		}	    	        				         
        return false; 
	}
	else if((Address != "") && (Mask == ""))
	{
		if(Where == 1){
		alert("Invalid Destination network mask!");		}else if(Where == 2){
		alert("Invalid Source network mask!");		}else{
   		alert("Invalid subnet mask: " + Mask);		}     	  
	  	return false;
	}
	else
		return true;
} 

function chineseCheck(object, objectId)
{
	var obj = document.getElementById(objectId);
	var objName = obj.innerText;
	var inputStr = object.value;
	var i;
	
	if(objName == undefined)
		objName = "Warning : input";
	for(i = 0; i < inputStr.length; i++)
	{
		if(inputStr.charCodeAt(i) < 0 || inputStr.charCodeAt(i) > 255)
		{
		alert(objName + " can not contains character which not ASCII!!");			return true;
		}
	} 
	return false;
}

function navigationFontChange(divName)
{
	return;
}
