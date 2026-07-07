
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

// create an for loop to go through array and perform each calculation 
const problems = [
  [10, 5, "add"],
  [10, 5, "subtract"],
  [10, 5, "multiply"],
  [10, 5, "divide"]
];

// fucntion that goes through 2D array and performs calculations
function arrCalc(array) {
  let num1 = 0;
  let num2 = 0;
  let operator = undefined;

  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
          // console.log(array[i][j]);  
      }
      num1 = array[i][0];
      num2 = array[i][1];
      operator = array[i][2];
      // console.log(num1);
      // console.log(num2); 
      // console.log(operator); 
    
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
  // console.log(num1);
  // console.log(num2); 
  // console.log(operator); 
}

arrCalc(problems);