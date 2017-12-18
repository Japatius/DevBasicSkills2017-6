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
		"BIN (0-1)": [2, /^(?:0b)?([01]+)$/],
		"OCT (0-7)": [8, /^0?([0-7]+)$/],
		"DEC (0-9)": [10, /^([0-9]+)$/],
		"HEX (0-9, A-F)": [16, /^(?:0x)?([0-9a-fA-F]+)$/]
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

function print_table() {
	var table = '<table>';
	table += '<thead><tr><td><b>DEC</b></td><td><b>BIN</b></td><td><b>OCT</b></td> <td><b>HEX</b></td></tr></thead>';
	for (let i=0; i<=50; i++) {	
		table+='<tr><td>'+i+'</td><td>'+convert(i, "DEC (0-9)", "BIN (0-1)")+'</td><td>'+convert(i, "DEC (0-9)", "OCT (0-7)")+'</td><td>'+convert(i, "DEC (0-9)", "HEX (0-9, A-F)")+'</td></tr>'
	}
	document.getElementById("table_data").innerHTML=table
	table += '</table>'
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
