//  Check Square Elements of Another Array

// Divide and Conquerer Technique
// Find the index of given number in a sorted array = 7
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// Output = index 6

// Condition
// min = 0 ( index ) , element = 1
// max = array.length - 1 ( last index ) , element = 13
// find the midIndex ( ( midIndex = min + max ) / 2 ) => (0+12)/2 => 6 (index), element = 7
// Check the consitions to find the output
// 1. if arr[midIndex] < number(7) => min = midIndex+1
// 2. if arr[midIndex] > number(7) => max = midIndex-1
// 3. midIndex is the output

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
arr.sort((a, b) => a - b);

const number = 8;

const binarySearchAlgo = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);

    if (arr[midIndex] < num) {
      min = midIndex + 1;
    } else if (arr[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }

  return -1;
};

let ans = binarySearchAlgo(arr, number);
console.log(ans);

// Time complexity = o( log(n) )
