function f1(){
	document.getElementById("txbox").value+="1";
}
function f2(){
	document.getElementById("txbox").value+="2";
}
function f3(){
	document.getElementById("txbox").value+="3";
}
function f4(){
	document.getElementById("txbox").value+="4";
}
function f5(){
	document.getElementById("txbox").value+="5";
}
function f6(){
	document.getElementById("txbox").value+="6";
}
function f7(){
	document.getElementById("txbox").value+="7";
}
function f8(){
	document.getElementById("txbox").value+="8";
}
function f9(){
	document.getElementById("txbox").value+="9";
}
function f0(){
	document.getElementById("txbox").value+="0";
}
function fadd(){
	document.getElementById("txbox").value+="+";
}
function fsub(){
	document.getElementById("txbox").value+="-";
}
function fmul(){
	document.getElementById("txbox").value+="*";
}
function fdiv(){
	document.getElementById("txbox").value+="/";
}
function result(){
	var a=document.getElementById("txbox").value;
	var b=eval(a);
	document.getElementById("txbox").value=b;
}
function cl(){
	var a=document.getElementById("txbox").value;
	document.getElementById("txbox").value=a.slice(0,-1);
}	