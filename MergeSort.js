const arr = [2, 1, 3, 4, 5, 6, 7, 8, 9, 8, 9];

// Steps
// 1. Divide the array in 2 halfs
// 2. Put 1st and 2nd half on recursion to get sorted halfs
// 3. Merge the both half
// 4. Merge based on comparison with 1st half and 2nd half

const mergeRecursion = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let midIndex = Math.floor((0 + arr.length - 1) / 2); // midIndex = 5
  let leftHalf = arr.slice(0, midIndex + 1); // Run from 0 to midIndex
  let rightHalf = arr.slice(midIndex + 1, arr.length); // Run from midIndex to lastIndex
  let sortedLeft = mergeRecursion(leftHalf);
  let sortedRight = mergeRecursion(rightHalf);
  let newMerge = merge(sortedLeft, sortedRight);
  return newMerge;
};

const merge = (sortedLeft, sortedRight) => {
  let ans = [];
  let left = 0;
  let right = 0;

  while (left < sortedLeft.length || right < sortedRight.length) {
    if (left < sortedLeft.length && right < sortedRight.length) {
      if (sortedLeft[left] < sortedRight[right]) {
        ans.push(sortedLeft[left]);
        left++;
      } else {
        ans.push(sortedRight[right]);
        right++;
      }
    } else if (left > sortedLeft.length - 1) {
      ans.push(sortedRight[right]);
      right++;
    } else {
      ans.push(sortedLeft[left]);
      left++;
    }
  }
  return ans;
};

let res = mergeRecursion(arr);
console.log(res);
