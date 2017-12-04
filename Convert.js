function openPage(evt, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}

function convert(value, from, to) {
	var data = {
		"BIN": [2, /^(?:0b)?([01]+)$/],
		"OCT": [8, /^0?([1-7][0-7]*)$/],
		"DEC": [10, /^([0-9]+)$/],
		"HEX": [16, /^(?:0x)?([0-9a-fA-F]+)$/]
	};

	value = new String(value);
	
	from = data[from];
	to = data[to];
	var parsed = value.match(from[1]);
	if (parsed != null) {
		value = parsed[1];
		document.getElementById("alert1").classList.remove("alert_show");
		return parseInt(value, from[0]).toString(to[0]);		
	} else {
		document.getElementById("alert1").classList.add("alert_show");
	}
}

function startConvert() {
	var value = document.getElementById("given_number").value;
	var from = document.getElementById("FROM").value;
	var to = document.getElementById("TO").value;
	var result = convert(value, from, to);
	document.getElementById("result").innerHTML = result + "";
}

function print_column() {
	for (let i=0; i<=50; i++)
	{
		document.getElementById("dec").innerHTML += i + "<br>";
		document.getElementById("bin").innerHTML +=convert(i, "DEC", "BIN") + "<br>";
		document.getElementById("oct").innerHTML +=convert(i, "DEC", "OCT") + "<br>";
		document.getElementById("hex").innerHTML +=convert(i, "DEC", "HEX") + "<br>";
	}
}
print_column();

function toggle() {
    var x = document.getElementById("table_data");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
	}
}

function replacing_hide_show() {
    var str = document.getElementById("demo").innerHTML; 
	if (str == "HIDE") {
		var res = str.replace("HIDE", "SHOW");
	}
	if (str == "SHOW") {
		var res = str.replace("SHOW", "HIDE");
	}
    document.getElementById("demo").innerHTML = res;
}

function chooseMath(order,rep) {
	var order = document.getElementById("order").value;
	var rep = document.getElementById("rep").value;
	if (order == "Yes" && rep == "Yes") {
		return 1;
	}
	else if (order == "Yes" && rep == "No") {
		return 2;
	}
	else if (order == "No" && rep == "No") {
		return 3;
	}
	else if (order == "No" && rep == "Yes") {
		return 4;
	}
}

function factorial(n) {
	if (n == 0 || n == 1)
	{
	return 1;
	}
	if (n > 0) 
	{
		var result = 1;
		for (let i = n; i > 0; i--)
		{
			result *= i;
		}
		return result;
	}
}

function processMath(valueA, valueB, type) {
	var valueA_string = document.getElementById("valueA").value;
	var valueA = parseInt(valueA_string);
	var valueB_string = document.getElementById("valueB").value;
	var valueB = parseInt(valueB_string);
	var type = chooseMath();
	if (type == 1)
	{
		var result = 1;
		for ( let i = 0; i < valueA; i++ )
		{
			result *= valueB;
		}
		document.getElementById("result_no2").innerHTML = result;
	}
	if (type == 2)
	{
		if ( valueA > valueB) {
			document.getElementById("alert2").classList.add("alert_show");
		} else { document.getElementById("result_no2").innerHTML = factorial(valueB)/factorial(valueB - valueA);

		}
	}
	if (type == 3)
	{
		if ( valueA > valueB) {
			document.getElementById("alert2").classList.add("alert_show");
		} else { document.getElementById("result_no2").innerHTML = factorial(valueB)/(factorial(valueB - valueA) * factorial(valueA));

		}
	}
	if (type == 4)
	{
		document.getElementById("result_no2").innerHTML = factorial(valueB + valueA -1)/ (factorial(valueB - 1) * factorial(valueA))
	}
}

var elem,expr,vars;
function isboolop(chr){
	return "&|!^".indexOf(chr)!=-1;
}
function varsindexof(chr){
	var i;
	for(i=0;i<vars.length;i++){if(vars[i][0]==chr)return i;}
	return -1
}
function printtruthtable(){
	var i,str;
	elem=document.createElement("pre");
	expr=prompt("Boolean expression:\nAccepts single-character variables (except for \"T\" and \"F\", which specify explicit true or false values), postfix, with \"&\"|\"!\"^\"\" for and, or, not, xor, respectively; optionally seperated by whitespace.").replace(/\s/g,"");
	vars=[];
	for(i=0;i<expr.length;i++)if(!isboolop(expr[i])&&expr[i]!="T"&&expr[i]!="F"&&varsindexof(expr[i])==-1)vars.push([expr[i],-1]);
	if(vars.length==0)return;
	str="";
	for(i=0;i<vars.length;i++)str+=vars[i][0]+" ";
	elem.innerHTML="<b>"+str+expr+"</b>\n";
	vars[0][1]=false;
	truthpartfor(1);
	vars[0][1]=true;
	truthpartfor(1);
	vars[0][1]=-1;
	document.body.appendChild(elem);
}

function truthpartfor(index){
	if(index==vars.length){
		var str,i;
		str="";
		for(i=0;i<index;i++)str+=(vars[i][1]?"<b>T</b>":"F")+" ";
		elem.innerHTML+=str+(parsebool()?"<b>T</b>":"F")+"\n";
		return;
	}
	vars[index][1]=false;
	truthpartfor(index+1);
	vars[index][1]=true;
	truthpartfor(index+1);
	vars[index][1]=-1;
}
function parsebool(){
	var stack,i,idx;
	console.log(vars);
	stack=[];
	for(i=0;i<expr.length;i++){
		if(expr[i]=="T")stack.push(true);
		else if(expr[i]=="F")stack.push(false);
		else if((idx=varsindexof(expr[i]))!=-1)stack.push(vars[idx][1]);
		else if(isboolop(expr[i])){
			switch(expr[i]){
				case "&":stack.push(stack.pop()&stack.pop());break;
				case "|":stack.push(stack.pop()|stack.pop());break;
				case "!":stack.push(!stack.pop());break;
				case "^":stack.push(stack.pop()^stack.pop());break;
			}
		} else alert("Non-conformant character "+expr[i]+" in expression. Should not be possible.");
		console.log(stack);
	}
	return stack[0];
}
