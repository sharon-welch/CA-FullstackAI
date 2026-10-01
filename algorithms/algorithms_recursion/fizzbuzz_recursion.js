// FIZZBUZZ

// INSTRUCTIONS: print numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz"

// WITH RECURSION 
// start condition: num = 0 
function fizzB(num=1) {
  // end condition 
  if (num > 100) return; 
  
  // body
  if(num%3 == 0 && num%5 == 0) {
      console.log("Fizzbuzz");
    } else if (num%3 == 0) {
      console.log("Fizz");
    } else if (num%5 == 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  
  // iterator 
  fizzB(num+1)
}

fizzB()


// WITH WHILE LOOP 
// function fBuzz() {
//   // start condition 
//   let num = 1;
  
//   // end condition num <= 100 
//   while(num <= 100) {
//     // body 
//     if(num%3 == 0 && num%5 == 0) {
//       console.log("Fizzbuzz");
//     } else if (num%3 == 0) {
//       console.log("Fizz");
//     } else if (num%5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(num);
//     }
    
//     // iterator 
//     num += 1;
//   }
// }

// fBuzz()