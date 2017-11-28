function convert(value, from, to) {
	var data = {
		"BIN": [2, /^(?:0b)?([01]+)$/],
		"OCT": [8, /^0?([1-7]+)$/],
		"DEC": [10, /^([0-9]+)$/],
		"HEX": [16, /^(?:0x)?([0-9a-fA-F]+)$/]
	};
	value = new String(value);
	from = data[from];
	to = data[to];
	var parsed = value.match(from[1]);
	if (parsed != null) {
		value = parsed[1];
		return parseInt(value, from[0]).toString(to[0]);
	} else {
		console.log("Incorrect input");
		return;
	}
}

convert("10011", "BIN", "HEX");