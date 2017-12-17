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
		"OCT": [8, /^0?([0-7]+)$/],
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
	if (value === "") {
		document.getElementById("alert1").classList.remove("alert_show");
	}
	if (result === undefined) {
		document.getElementById("result").innerHTML = "";
	} else {
		document.getElementById("result").innerHTML = result + "";
	}
}

function print_column() {
	for (let i=0; i<=50; i++) {	
		var data = [
			i,
			convert(i, "DEC", "BIN"),
			convert(i, "DEC", "OCT"),
			convert(i, "DEC", "HEX")
		];
		print_row(data);
	}
}

function print_row(data) {
	var table = document.getElementById("table_data");
	var row = document.createElement("tr");
	for (var i = 0; i < data.length; i++) {
		var cell = document.createElement("td");
		var text = document.createTextNode(data[i]);
		cell.appendChild(text);
		row.appendChild(cell);
	}
	table.appendChild(row);
}

function toggle() {
	var x = document.getElementById("table_data");
    if (x.style.display === "table") {
        x.style.display = "none";
    } else {
		x.style.display = "table";
	}
	var str = document.getElementById("hide_show").innerHTML; 
	if (str == "HIDE") {
		var res = str.replace("HIDE", "SHOW");
	}
	if (str == "SHOW") {
		var res = str.replace("SHOW", "HIDE");
	}
    document.getElementById("hide_show").innerHTML = res;
}
