	function sum()
		{
			var x=document.getElementById("x").value;
			var y=document.getElementById("y").value;
			if(x=="")
			{
				alert("input a number as 1st value");
				document.getElementById("x").focus();
				return false;
			}
			if(y=="")
			{
				alert("input a number as 2nd value");
				document.getElementById("y").focus();
				return false;
			}
			document.getElementById("result").value=x*1+y*1;
			return true;
		}
		function substract()
		{
			var x=document.getElementById("x").value;
			var y=document.getElementById("y").value;
			if(x=="")
			{
				alert("input a number as 1st value");
				document.getElementById("x").focus();
				return false;
			}
			if(y=="")
			{
				alert("input a number as 2nd value");
				document.getElementById("y").focus();
				return false;
			}
			document.getElementById("result").value=x*1-y*1;
			return true;
		}
		function multiply()
		{
			var x=document.getElementById("x").value;
			var y=document.getElementById("y").value;
			if(x=="")
			{
				alert("input a number as 1st value");
				document.getElementById("x").focus();
				return false;
			}
			if(y=="")
			{
				alert("input a number as 2nd value");
				document.getElementById("y").focus();
				return false;
			}
			document.getElementById("result").value=(x*1)*(y*1);
			return true;
		}
		function divide()
		{
			var x=document.getElementById("x").value;
			var y=document.getElementById("y").value;
			if(x=="")
			{
				alert("input a number as 1st value");
				document.getElementById("x").focus();
				return false;
			}
			if(y=="")
			{
				alert("input a number as 2nd value");
				document.getElementById("y").focus();
				return false;
			}
			document.getElementById("result").value=(x*1)/(y*1);
			return true;
		}
		function modulo()
		{
			var x=document.getElementById("x").value;
			var y=document.getElementById("y").value;
			if(x=="")
			{
				alert("input a number as 1st value");
				document.getElementById("x").focus();
				return false;
			}
			if(y=="")
			{
				alert("input a number as 2nd value");
				document.getElementById("y").focus();
				return false;
			}
			document.getElementById("result").value=(x*1)%(y*1);
			return true;
		}