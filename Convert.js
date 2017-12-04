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
