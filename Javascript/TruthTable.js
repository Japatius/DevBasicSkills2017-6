function generate_truth_table() {
	var row = [], values = ["", ""]
	var truth_table = [];
	for (let i = 0; i < Math.pow(2, values.length); i++) {
		truth_table[i] = new Array(2);
		for (let j = 0; j < values.length; j++) {
		truth_table[i][j] = (i & Math.pow(2,j)) ? 0 : 1
		}
		if ( truth_table[i][0] == 1) {
			truth_table[i].push(0);
		} if ( truth_table[i][0] == 0) {
			truth_table[i].push(1);
		} if ( truth_table[i][1] == 1) {
			truth_table[i].push(0);
		}
		if ( truth_table[i][1] == 0) {
			truth_table[i].push(1);
		}
		for (let j = 0; j < values.length; j++) {
			}
		if ( truth_table[i][0] == 1 || truth_table[i][1] == 1) {
			truth_table[i].push(1);
		} if ( truth_table[i][0] == 0 && truth_table[i][1] == 0) {
			truth_table[i].push(0);
		} if ( truth_table[i][0] == 0 || truth_table[i][1] == 0) {
			truth_table[i].push(0);
		} if ( truth_table[i][0] == 1 && truth_table[i][1] == 1) {
			truth_table[i].push(1);
		}
	}
	return truth_table;
}

function print_truth_table() {
    var truth_table = generate_truth_table();
	var table = '<table>';
	table += '<thead><td><b>P</b></td><td><b>Q</b></td><td><b>¬P</b></td><td><b>¬P</b></td><td><b>P &or; Q</b></td><td><b>P &and; Q</b></td></thead>'
    for (var i = 0; i < 4; i++) {
        table +=  '<tr>'
        for (var j = 0; j < truth_table[i].length; j++) {
            table += '<td>'+truth_table[i][j]+'</td>'
            if (j == truth_table[i].length-1) {
                table +='</tr>'
            }
		}		
	} 
	table += '</table>';
    document.getElementById("truthtable").innerHTML = table;
}