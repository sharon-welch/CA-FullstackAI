// remove whatever is at the index with the number after the comma 
// [1,2,3], 1 => [1,3]
// [‘hey’], 0 =>[]
// [1,2,3], 2 => [1,2]

// pseudocode 
// start at the first element in the array 
// count over to the position/index of the element to be removed 
// remove it 
// move elements after it one spot to the left 

function removeElement(arr, index){
  for(i=index; i< arr.length; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  console.log(arr);
}
removeElement([1,2,3], 2)

// OTHER SOLUTION

// Basically, copy up to the element to be deleter (1st for loop)
// Skip the element to be deleted
// Go through the rest of the initial array.

// const arr1 = [1, 2, 3, 4, 5];
// function removeItem(arr, num){
//     let tempArr=[];
//     for(let i = 0; i < num; i++){
//       tempArr.push(arr[i]);
//     }
  
//     for(let i = num+1; i < arr.length; i++){
//       tempArr.push(arr[i]);
//     }
//   return tempArr;
// }

// console.log (arr1);
// console.log(removeItem(arr1, 1));

