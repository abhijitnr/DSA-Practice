// Counting unique numbers from an array

const arr = [1, 5, 6, 7, 8, 9, 1, 2, 3, 5, 2, 6, 8, 7];
arr.sort((a, b) => a - b);

// Method 1
// 1. Count all the element appear in array
// 2. Store the count of element in an object
// 3. Print the keys of object and it will give you unique element or number in an array
const uniqueNumber = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  //   console.log(obj);
  const unique = [];
  for (let keys in obj) {
    unique.push(+keys);
  }
  return unique.length;
};
// Time complexity = o( n )
let ans = uniqueNumber(arr);
console.log(ans);

// Method 2
// 1. i=0; j=1 ( "i" will start from 0 index and "j" will start from 1 index)
// 2. if arr[i] !== arr[j] then "i" will increment ( i++ ) and arr[i] = arr[j]
// Itration e.g - [1, 2, 3, 4, 4, 6, 7]
//     i     j
// a. [1, 1, 2, 3, 4, 4, 6, 7]
//        i     j
// b. [1, 2, 2, 3, 4, 4, 6, 7]
//           i     j
// c. [1, 2, 3, 3, 4, 4, 6, 7]
//              i        j
// d. [1, 2, 3, 4, 4, 4, 6, 7]
//                 i        j
// e. [1, 2, 3, 4, 6, 4, 6, 7]
//                    i     j
// f. [1, 2, 3, 4, 6, 7, 6, 7] ( final answer is 6 )

const countUniqueNumber = (arr) => {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty !");
  }
};
const res = countUniqueNumber(arr);
console.log(res);
