var num1;
var num2;

function add(arr) {
    var result = 0;
    for(let i = 0; i < arr.length; i++) {
        result = result + parseInt(arr[i]);
    }
    return result;
}

function sub(num1, num2) {
    var result = 0;
    result = num1 - num2;
    return result;
}

function mul(arr) {
    var result = 1;
    for( var i = 0; i < arr.length; i++) {
        result = result * parseInt(arr[i]);
    }
    return result;
}

function div(num1, num2) {
    var result = 0;
    if (num2 != 0) {
        result = num1 / num2;
        return result;
    }
    else {
        return "Can't divide by 0!";
    }
}

(function() {
    let arr = new Array(); 
    let operand = prompt("Enter Your Operand ( '+' '-' '*' '/' )");
    if (operand == "+" || operand == "*") {
        var amountOfNum = prompt("How many numbers do you want to operate on: ");
        for (let i = 0; i < parseInt(amountOfNum); i++) {
            arr[i] = prompt("Your Number " + (i + 1));
        }
        if (operand == "+") {
            result = add(arr);
            console.log(result);
        }
        else if (operand == "*") {
            result = mul(arr);
            console.log(result);
        }
        else {
            console.log("Invalid");
        }
    }
    else if (operand == "-" || operand == "/") {
        if (operand == "-") {
            var num1 = parseInt(prompt("Enter first number "));
            var num2 = parseInt(prompt("Enter second number "));
            result = sub(num1, num2);
            console.log(result);
        }
        else if (operand == "/") {
            var num1 = parseInt(prompt("Enter first number "));
            var num2 = parseInt(prompt("Enter second number "));
            result = div(num1, num2);
            console.log(result);
        }
    }
    else {
        console.log("Invalid")
    }
})();