element=" ";
function getString(e)
{		
		document.getElementById("expression").value+=e;
		element=element+e;
	
}

function calculateit()
{	if(element==" "){
		alert("Please enter an expression first.");
		return false;
	}
	else{
		document.getElementById("expression").value=eval(element);
		return true;
			}
}

function clearit()
{
	document.getElementById("expression").value="";
	element=" ";
}
