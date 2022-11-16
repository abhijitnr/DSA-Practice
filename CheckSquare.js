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
