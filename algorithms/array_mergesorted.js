// Merge Two Sorted Arrays — Group Algorithm Exercise

// INSTRUCTIONS
// Your group is given two arrays that are already sorted from smallest to largest. Your goal is to combine them into one sorted array.

// Example:
// Array 1: [1, 4, 7]
// Array 2: [2, 3, 8]
// Result: [1, 2, 3, 4, 7, 8]

// BEFORE YOU CODE
// 1. Diagram your solution first.
// Do not write any code until your group has a working diagram that you can manually run from beginning to end.
// 2. NO CODE in the diagram.

// Explain everything in normal, everyday language.
// Imagine the numbers are objects sitting on two shelves in front of you. How would you physically combine them into one shelf while keeping everything in order?
// Think about:
//     Which objects do you look at first?
//     How do you decide which one to move?
//     What do you look at next?
//     What happens when one shelf runs out of objects?
//     How do you know when you’re finished?

// Your diagram should be detailed enough that another group could follow your instructions step by step without seeing any code.

// DIAGRAM 
// Two sets of numbered books, each on their own shelf 
// have an empty shelf to move books onto 
// look at first book on each shelf and compare their numbers. 
// Place the one with the lower value on the new shelf
// From the shelf that you removed a book from, move to the next book on that shelf. Compare its value to the first value in the other shelf. Place the lower value on the new shelf. 
// Continue this proces until there are no books left. 

// PSEUDOCODE 
// Create an empty array 
// in a while loop ... 
// i to track array 1
// j to track array 2 
// Compare the first elements in each array 
// while counters are less than the arr.length we compare the values
// start on position 0 on both arrays and compare values arr[i] < arr[j]
// push whichever is lower to new array
// increment on counter on the one that we pushed from and compare again arr[i] < arr[j]


function mergeArrs(arr1, arr2){
  let pointer1 = 0; 
  let pointer2 = 0; 
  const returnArr = [];
  
  while(pointer1 < arr1.length && pointer2 <arr2.length) {
    if(arr1[pointer1] < arr2[pointer2]) {
      returnArr.push(arr1[pointer1]);
      pointer1 += 1; 
    } else {
      returnArr.push(arr2[pointer2]);
      pointer2 += 1;
    }
    console.log(returnArr);
  }
  
  while(pointer1 < arr1.length && pointer2 >= arr2/length) {
    returnArr.push(arr1[pointer1]);
    pointer1 += 1;
  }
  
  while(pointer2 < arr2.length && pointer1 >= arr1/length) {
    returnArr.push(arr2[pointer1]);
    pointer2 += 1;
  }
}

mergeArrs([1,5,6], [3,8,20, 80])


//TODO: control for condition of values being equal, and for if the arrays aren't the same length 
// function mergeArrays(arr1, arr2) {
//   let mergedArray = [];
//   let i = 0;
//   let j = 0; 
  
//   while(i < arr1.length || j < arr2.length) {
//     if(arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i])
//       i++
//     } else { 
//       mergedArray.push(arr2[j])
//       j++
//     }
//     console.log(mergedArray)
//   }
// }

// mergeArrays([1, 4, 7], [2, 3, 8]);

// TODO: test, control for arrays not being the same length 
// while(i < arr1.length || j < arr2.length) {
//     if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {          
//         mergedArray.push(arr1[i]); 
//         i++; 
//     } else { 
//         mergedArray.push(arr2[j]);
//         j++;
//     }
// }
