
// calculator takes in two numbers and an operator as a string and performs the calculation indicated by the operator
function calculator(num1, num2, operator) {
    if (operator === "add") {
        console.log(num1 + num2);
    } else if (operator === "subtract"){
        console.log(num1 - num2);
    } else if (operator === "multiply") {
        console.log(num1 * num2);
    } else if (operator === "divide") {
        console.log(num1 / num2)
    } else {
        console.log("Invalid operator.")
    }
}

calculator(10,2,"multiply");
console.log(3+2);