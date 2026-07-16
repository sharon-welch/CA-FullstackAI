// Algorithm to reverse string 
// Cat => taC
// BAD =>DAB
// EMMY => YMME

function reverseString(word) {
  let reverseWord = "";
  for(i=word.length-1; i>=0; i--){
    // loop through and add the letter to reverseWord 
    reverseWord += word[i];
  } 
  return reverseWord;
} 
reverseString("");
