// Insertion Sort 

// PSEUDOCODE 
// function 
// for loop to iterate through array 
// while (conditional) for doing substitution
//   compare our current item to the item to its left and swap if left item is greater than current item 

function insertionSort(arr) {
  for(i=1; i< arr.length-1; i++) {
    let currentItem = arr[i];
    let previousIndex = i-1;
   
    while (previousIndex >= 0 && arr[previousIndex] > currentItem) {
      arr[previousIndex+1] = arr[previousIndex];
      previousIndex--;
    }
    arr[previousIndex+1] = currentItem;
  }
  console.log(arr)
  return arr 
}

insertionSort([5,4,8,7,10])