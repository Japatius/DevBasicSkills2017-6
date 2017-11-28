function converter() {
    
    print_in_binary_form();
    print_in_octal_form();
    print_in_hex_form();

    function print_in_binary_form() {
        var bits = "";
        var dividend = document.getElementById("given_number").value;
        var remainder = 0;
        var result;
        while (dividend > 0)
        {
            remainder = dividend % 2;
            dividend = (dividend - remainder) / 2;
            bits += remainder;
        }
        var result = "";
        for (var i = bits.length - 1; i >= 0; i--) 
        {
            result += bits[i];
        }
        document.getElementById("binary").innerHTML = result;
    }

    function print_in_octal_form() {
        var bits = "";
        var dividend = document.getElementById("given_number").value;
        var remainder = 0;
        var result;
        while (dividend > 0)
        {
            remainder = dividend % 8;
            dividend = (dividend - remainder) / 8;
            bits += remainder;
        }
        var result = "";
        for (var i = bits.length - 1; i >= 0; i--) 
        {
            result += bits[i];
        }
        document.getElementById("oct").innerHTML = result;
    }

    function print_in_hex_form() {
        var bits = "";
        var dividend = document.getElementById("given_number").value;
        var remainder = 0;
        var result;
        while (dividend > 0)
        {
            remainder = dividend % 16;
            dividend = (dividend - remainder) / 16;
            bits += remainder;
        }
        var result = "";
        for (var i = bits.length - 1; i >= 0; i--) 
        {
            result += bits[i];
        }
        document.getElementById("hex").innerHTML = result;
    }
}
