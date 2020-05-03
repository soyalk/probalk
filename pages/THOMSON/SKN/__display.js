function DisplayHide(idname)
{    

	var element = document.getElementById(idname);	
    if (element)
    {
        element.style.display="none";
    }
    else if(document.all) /* ie5 */
    {
        document.all[element].style.display = "none";
    }
    else /* ns4 */
    {            
        document.layers[element].display = "none";
    }        
}

function changeBlockState(idname, status)
{
	var i, text_color;
	var block_elem = document.getElementById(idname);
	var child_elems = block_elem.getElementsByTagName("*");

	if (status == false)
		text_color = "black";			
	else
		text_color = "#aca899"; /* Light grey */

	for (i = 0; i < child_elems.length;i++){
		if (child_elems[i].disabled != undefined)
			child_elems[i].disabled = status;

		if (child_elems[i].style.color && child_elems[i].style.color != undefined)
			child_elems[i].style.color = text_color;				
	}

	if (block_elem.disabled != undefined)
		block_elem.disabled = status;

	if (block_elem.style.color && block_elem.style.color != undefined)
		block_elem.style.color = text_color;				

}