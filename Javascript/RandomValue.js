function compare_random() {
	var n = parseInt(document.getElementById("tests").value);
	var a = parseInt(document.getElementById("numbers1").value);     
	var b = parseInt(document.getElementById("numbers2").value);
	var number_array = [];
	var counter = [];
	var random_test = [];
	var text="";
	for (let i = a; i <= b; i++) {
		number_array.push(i);
		counter.push(0);
	}
	for (let i = 0; i < n; i++) {
		var number_random =  Math.floor( Math.random() * (b-a+1) + a );
		random_test.push(number_random);
	}
	for (let i = 0; i<random_test.length; i++) {
		text += random_test[i]+ ", ";
	}
	document.getElementById("random_tests").innerHTML=text;
	for (let i = 0; i < number_array.length; i++) {	
		for (let u = 0; u < random_test.length; u++) {
			if (random_test[u] == number_array[i]) {
				counter[i] ++;
			}
		}
	}
	var table = '<table>';
	table += '<thead><td>Number</td><td>Appearing Times</td></thead>'
	for (let i = 0; i < number_array.length; i++) {	
		table += '<tr><td>'+number_array[i]+'</td><td>'+counter[i]+'</td></tr>'
	}
	table += '</table>';
	document.getElementById("random_table").innerHTML = table;
	if ( n > 160 ) {
		document.getElementById("random_tests").classList.add("random_test");
	} else {
		document.getElementById("random_tests").classList.remove("random_test");
	}
}
