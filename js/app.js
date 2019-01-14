var addition = (num1, num2) => num1 + num2;
var subtraction = (num1, num2) => num1 - num2;
var multiplication = (num1, num2) => num1 * num2;
var division = (num1, num2) => num1 / num2;

while (true) {
    var level = prompt("Would you like the basic or advanced calculator?");
    var operation;
    var num1;
    var num2;
    if (level === "basic") {
        operation = prompt("What operator would you like to use?\n addition, subtraction, multiplication or division");
        num1 = parseInt(prompt("What is your first input number?"));
        num2 = parseInt(prompt("What is your second input number?"));
        switch (operation) {
            case "addition":
                console.log(`Your answer is: ${addition(num1, num2)}`);
                break;
            case "subtraction":
                console.log(`Your answer is: ${subtraction(num1, num2)}`);
                break;
            case "multiplication":
                console.log(`Your answer is: ${multiplication(num1, num2)}`);
                break;
            case "division":
                console.log(`Your answer is: ${division(num1, num2)}`);
                break;
            default:
                console.log("invalid operation");
                break;
        }
    } else if (level === "advanced") {

    }
    var exit = prompt("Would you like to continue using the calculator? yes or no");
    if (exit === "no") {
        break;
    }
}

