var addition = (num1, num2) => num1 + num2;
var subtraction = (num1, num2) => num1 - num2;
var multiplication = (num1, num2) => num1 * num2;
var division = (num1, num2) => num1 / num2;

var bmiMetric = (weight, height) => weight / Math.pow(height, 2);
var bmiImperial = (weight, height) => (weight / Math.pow(height, 2)) * 703;
var convert = (temp) => temp * (9/5) + 32;

while (true) {
    var level = prompt("Would you like the basic or advanced calculator?");
    var operation;
    var unit;
    var num1;
    var num2;
    var height;
    var weight;
    var temp;

    if (level === "basic") {
        operation = prompt("What operator would you like to use?\n 'addition', 'subtraction', 'multiplication' or 'division'");
        num1 = parseFloat(prompt("What is your first input number?"));
        num2 = parseFloat(prompt("What is your second input number?"));
        switch (operation) {
            case "addition":
                alert(`Your answer is: ${addition(num1, num2)}`);
                break;
            case "subtraction":
                alert(`Your answer is: ${subtraction(num1, num2)}`);
                break;
            case "multiplication":
                alert(`Your answer is: ${multiplication(num1, num2)}`);
                break;
            case "division":
                alert(`Your answer is: ${division(num1, num2)}`);
                break;
            default:
                alert("invalid operation");
                break;
        }
    } else if (level === "advanced") {
        operation = prompt("Would you like to calculate 'BMI' or 'convert' celcius to farenheit");
        switch (operation) {
            case "BMI":
                unit = prompt("Which unit of measurement would you like, \n 'Metric' or 'Imperial'");
                weight = parseFloat(prompt("What is your weight?"));
                height = parseFloat(prompt("What is your height?"));
                if (unit === "Metric") {
                    alert(`Your BMI is: ${bmiMetric(weight, height)}`);
                } else if(unit === "Imperial"){
                    alert(`Your BMI is: ${bmiImperial(weight, height)}`);
                }
                break;
            case "convert":
                temp = parseFloat(prompt("What temperature would you like to convert?"));
                alert(`The temperature ${temp} is ${convert(temp)} in Farenheit`);
                break;
            default:
                break;
        }
    }
    var exit = prompt("Would you like to continue using the calculator? yes or no");
    if (exit === "no") {
        break;
    }
}

