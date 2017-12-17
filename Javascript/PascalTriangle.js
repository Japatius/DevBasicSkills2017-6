function createPascalTriangle(numRows) {
    var pascalTriangle = [];
    for (var i = 0; i < numRows; i++) { 
        pascalTriangle[i] = new Array(i+1);
        for (var j = 0; j < i+1; j++) {            
            if (j === 0 || j === i) {
            pascalTriangle[i][j] = 1;
            } else {
            pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
            }
        }
    }
    return pascalTriangle;
}

function print_pascal_in_html() {
    var x = document.getElementById("pascal_n").value;
    console.log(x);
    var triangle = createPascalTriangle(x);
    var table = '<table>';
    for (var i = 0; i < x; i++) {
        table +=  '<tr>'
        for (var j = 0; j < triangle[i].length; j++) {
            table += '<td>'+triangle[i][j]+'</td>'
            if (j == triangle[i].length-1) {
                table +='</tr>'
            }
        }
        table += '</table>';
    }
    document.getElementById("pascal_triangle").innerHTML = table;
}
