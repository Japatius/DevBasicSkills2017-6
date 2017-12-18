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

function print_formula() {
	var formula = document.getElementById("formula");
	var type = chooseMath();
	if (type == 1) {
		document.getElementById("type").innerHTML="Permutations"
		formula.src="Images/formula1.jpg";
	}
	if (type == 2) {
		document.getElementById("type").innerHTML="Permutations (n > r)"
		formula.src="Images/formula2.jpg";
	}
	if (type == 3) {
		document.getElementById("type").innerHTML="Combinations (n > r)"
		formula.src="Images/formula3.jpg";
	}
	if (type == 4) {
		document.getElementById("type").innerHTML="Combinations"
		formula.src="Images/formula4.jpg";
	}
}

function factorial(n) {
	if (n == 0 || n == 1) {
	return 1;
    } 
    if (n > 0) {
		var result = 1;
		for (let i = n; i > 0; i--) {
			result *= i;
		}
		return result;
	}
}

function processMath(valueA, valueB, type) {
	document.getElementById("alert2").classList.remove("alert_show");
	var valueA_raw = document.getElementById("valueA").value;
	var valueA = parseInt(valueA_raw);
	var valueB_raw = document.getElementById("valueB").value;
	var valueB = parseInt(valueB_raw);
	var type = chooseMath();
	var formula = print_formula();
	var result = 1;
	if (type == 1) {
		for ( let i = 0; i < valueA; i++ )
		{
			result *= valueB;
		}
	}
	if (type == 2) {
		if ( valueA > valueB) {
			result = "";
			document.getElementById("alert2").classList.add("alert_show");
		} else { 
			result = factorial(valueB)/factorial(valueB - valueA);
		}
	}
	if (type == 3) {
		if ( valueA > valueB) {
			result = "";
			document.getElementById("alert2").classList.add("alert_show");
		} else { 
			result = factorial(valueB)/(factorial(valueB - valueA) * factorial(valueA));
		}
	}
	if (type == 4) {
		result = factorial(valueB + valueA -1)/ (factorial(valueB - 1) * factorial(valueA))
    }
    
	if (isNaN(valueA) == true && valueA_raw != "" || isNaN(valueB) == true  && valueB_raw != "") {
		document.getElementById("result_no2").innerHTML = "";
		document.getElementById("alert2").classList.add("alert_show");
	} else if (result === undefined || isNaN(result) == true 
				|| valueA_raw == "" || valueB_raw == "") {
		document.getElementById("alert2").classList.remove("alert_show");
		document.getElementById("result_no2").innerHTML = "";
	} else {
		document.getElementById("result_no2").innerHTML = result + "";
	}	
}