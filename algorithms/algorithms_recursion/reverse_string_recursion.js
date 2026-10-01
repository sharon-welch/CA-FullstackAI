// REVERSE STRING 

// WITH RECURSION 
// start condition
function backwardsString (string, newString="", i=string.length-1) {
  //end condition 
  if (i < 0) return newString;
  
  //body
  newString += string[i];
  console.log(newString)
  
  // iterator 
  backwardsString(string, newString, i-1)
}

backwardsString("hello")


// WITH FOR LOOP 
//start condition 
// function rString(string) {
//   let newString = "";
  
//   //iterator and end 
//   for(i=string.length-1; i >= 0; i--) {
//     // body
//     newString += string[i]; 
//   }
//   console.log(newString)
// }

// rString("hello")