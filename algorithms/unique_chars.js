// Find Unique Characters in a String
// Given a string, return the characters that appear only once.
// Examples
//     "hello" → "heo"
//     "aabbc" → "c"
//     "apple" → "ale"
//     "racecar" → "e"

// Before writing code, solve the problem like a real person.
// Imagine the word is written in front of you. How would you explain the steps to a 5-year-old?
// You might say:
//     Look at the first letter.
//     Count how many times that letter appears in the whole word.
//     If it appears only once, keep it.
//     If it appears more than once, ignore it.
//     Repeat for every letter.

// Write these steps in plain English first.
// Do not write any code until you can clearly explain how to solve the problem without code.


// place to store letters ==> object
// variable to store new string ==> empty string 
// go through word letter by letter ==> loop 
// if you haven't seen the letter, store + assign to 1 
// if have already seen the letter +1 
// return string of letters that appear once ==> console.log
// go through new object (loop) and anything that appears once add to new string 
// console.log new string


function newWord (string) {
  let letters = {};
  let newString = "";
  
  for(let i=0; i<string.length; i++) {
    if(letters[string[i]]) {
      letters[string[i]] +=1; 
    } else {
      letters[string[i]] = 1;
    }   
  }
  // console.log(letters)
  
  for(let key in letters){
    // console.log(letters[key]);
    if (letters[key] === 1) {
      newString += key;
    }
    // console.log(newString);
  }
  return newString
}

newWord("hello");
