// Problem : Checking sum zero
// Find the first pair whose sum is zero from given array

const arr = [-5, -4, -3, -2, 0, 3, 4, 6, 8];
arr.sort((a, b) => a - b);
// console.log(arr);

// Using Brute force
const getSumPairZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("Outer Loop");
    for (let j = 1; j < arr.length; j++) {
      console.log("Inner Loop");
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// Time Complexcity = o( n^2 )
const ans = getSumPairZero(arr);
console.log("Brute force", ans);

// Using Two pointer
const getPair = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
      break;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// Time Complexcity = o( n )

const res = getPair(arr);
console.log("Two Pointer", res);
