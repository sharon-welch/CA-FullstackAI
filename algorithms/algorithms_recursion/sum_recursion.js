// SUM ELEMENTS IN AN ARRAY 

// WITH RECURSION 

//start conditions 
function sumE(arr, i=0, sum=0) {
  //end 
  if(i >= arr.length) return sum;
  
  //body 
  sum += arr[i];
  console.log(sum);

  //iterator 
  return sumE(arr, i+1, sum)                      
}

console.log(sumE([1,2,3]))



// WITH FOR LOOP
// function sumArray(arr) {
//   let counter = 0; 
//   for(i=0; i<= arr.length-1; i++) {
//     console.log(arr[i])
//     counter += arr[i]; 
//   }
//   console.log("counter is " + counter);
// }

// sumArray([1,2,3,4,5])

