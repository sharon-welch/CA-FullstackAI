// DELETE ELEMENT 
// NOT DONE 

// WITH RECURSION 
//start
function dEle (arr, index, i=index) {
  
  //end 
  if(i = arr.length-1) {
    return arr;
  }
  
  arr[i] = arr[i+1];
  console.log(arr)
  // arr.pop()
  
  return dEle(arr, index, i+1)
}

dEle([3,4,5,6], 1)


// WITH FOR LOOP 
// count up to index want to delete
// move all elements to the right of element  to be deleted one index to the left (this will overwrite the element to be deleted)
// remove the empty element at the end of the array 

// // start
// function deleteElement(arr, index) {
//   // iterator and body 
//   for(i=index; i < arr.length; i++) {
//     arr[i] = arr[i+1]
//   }
//   // end 
//   arr.pop();
//   console.log(arr)
// }

// deleteElement([3,4,5, 6], 1)