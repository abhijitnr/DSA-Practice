// Count largest sum of consecutive digits
// [1, 3, 5, 2, 7, 6, 4, 5, 8, 9]
// Total element - 10
// target or number = 4
// answer or sum = 26

// Condition
// 1. target num should be greater than array = (num > array)-> Error
// 2. Number of time time loop will run = arr.length - target num + 1
// e.g -> 10 - 4 + 1 = 7 ( 7 time loop will run)

const arr = [1, 3, 5, 2, 7, 6, 4, 5, 8, 9];
const targetNum = 4;
const findLargestSum = (arr, target) => {
  if (target > arr) {
    throw new Error("Target number is not greater than array!");
  } else {
    let maxSum = 0;

    for (let i = 0; i < arr.length - target + 1; i++) {
      let tempSum = 0;
      for (let j = 0; j < target; j++) {
        // console.log("i", i, "j", j);
        tempSum += arr[i + j];
      }

      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }

    return maxSum;
  }
};

const ans = findLargestSum(arr, targetNum);
console.log(ans);
