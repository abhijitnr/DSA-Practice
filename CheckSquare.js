//  Check Square Elements of Another Array
// arr1 = [1, 2, 3, 4]
// arr2 = [1, 9, 4, 16]

// Using two loop
// let isSquare = false
// if( arr1[i] * arr1[i] === arr2[j])
// isSquare = true

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 9, 4, 16];

// Method 1
const checkSquareInAnotherArray = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let isSquare = false;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
      }

      if (j === arr2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
};

let ans = checkSquareInAnotherArray(arr1, arr2);
console.log(ans);

// Time Complexity = o( n^2 )

// Method 2

// map array1 => obj1 = {1:1, 2:1, 3:1, 4:1, 5:1}
// map array2 => obj2 = {1:1, 4:1, 9:1, 16:1, 25:1}
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 9, 16, 4, 25];

const checkSquareOptimisation = (arr1, arr2) => {
  let obj1 = {};
  let obj2 = {};

  // for (let i = 0; i < arr1.length; i++) {
  //   if (obj1[arr1[i]] === undefined) {
  //     obj1[arr1[i]] = 1;
  //   } else {
  //     obj1[arr1[i]]++;
  //   }
  // }

  // for (let j = 0; j < arr2.length; j++) {
  //   if (obj2[arr2[j]] === undefined) {
  //     obj2[arr2[j]] = 1;
  //   } else {
  //     obj2[arr2[j]]++;
  //   }
  // }

  for (let item of arr1) {
    obj1[item] = (obj1[item] || 0) + 1;
  }

  for (let item of arr2) {
    obj2[item] = (obj2[item] || 0) + 1;
  }

  for (let key in obj1) {
    if (!obj2[key * key]) {
      return false;
    }

    if (obj1[key] !== obj2[key * key]) {
      return false;
    }
  }

  return true;
};

let res = checkSquareOptimisation(array1, array2);
console.log(res);
