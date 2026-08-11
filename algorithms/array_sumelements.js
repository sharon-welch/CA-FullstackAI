// [1,2,3,4] =>  10

function addArray(arr){
  counter = 0; 
  
  for(i=0; i<arr.length; i++) {
    counter += arr[i];
  }
  return counter;
}

addArray([1,2,3,4]);