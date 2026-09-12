// Palindrome Checker
// A palindrome reads the same forward and backward. Write a function that returns true if the string is a palindrome and false if it is not. Example: "racecar" → trueExample: "hello" → false

// THIS SOLUTION IS MORE EFFICIENT THAN THE ONE BELOW
// PSEUDOCODE
// BOOK ENDING 
// 

// THIS SOLUTION IS LESS EFFICIENT BECAUSE YOU HAVE TO STORE A NEW STRING 
// PSEUDOCODE
// you have the forward string and have an empty string  
// loop through the forward string backwards and store values in empty string --> you now have the backwards string 
// use an if statement to check the equality of the forward and backward strings, and return true or false  

function palindrome(string) {
  // you have the forward string and have an empty string 
  let forward = string;
  let backward = "";
  
  console.log(string.length);
  
  // loop through the forward string backwards and store values in empty string   --> you now have the backwards string 
  for (i=forward.length-1; i >= 0; i--){
    backward += forward[i];
  }
  console.log(backward);
  
  // use an if statement to check the equality of the forward and backward strings, and return true or false  
  if (forward === backward) {
    return true;
  } else {
    return false;
  }
}

palindrome("racecar");

