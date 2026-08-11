// any number greater than 5 is changed to hello
// [1,6,0], 5 => [1, ‘hello’, 0]
// any number greater than 1 is changed to hello
// [2,0,0], 1 => [‘hello’, 0,0]

// PSEUDOCODE
//function that takes in arr and value 
// loop through full array
// use if statement to check if the element is great er thatn 5
// if it is, change value to "hello"
// end loop 
// return arr

function changeHello(arr, value){
  for(i=0; i<=arr.length; i++){
    if(arr[i] > value){
      arr[i] = "hello";
    }
  }
  return arr; 
} 
changeHello([1,6,0], 5)