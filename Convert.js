function startConvert() {
	var value = document.getElementById("given_number").value;
	var from = document.getElementById("FROM").value;
	var to = document.getElementById( "TO").value;
	convert(value, from, to);
}

function convert(value, from, to) {
	console.log(from);
	console.log(to);

	var data = {
		"BIN": [2, /^(?:0b)?([01]+)$/],
		"OCT": [8, /^0?([1-7]+)$/],
		"DEC": [10, /^([0-9]+)$/],
		"HEX": [16, /^(?:0x)?([0-9a-fA-F]+)$/]
	};

	var result;

	value = new String(value);
	
	from = data[from]; console.log(from);
	to = data[to]; console.log(to);
	var parsed = value.match(from[1]);
	if (parsed != null) {
		value = parsed[1];
		result=parseInt(value, from[0]).toString(to[0]);
		document.getElementById("result").innerHTML = result;
	} else {
		console.log("Incorrect input");
		document.getElementById("result").innerHTML = "Incorrect input";
		return;
	}
}