// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

const arr1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const arr2 = [2, 5, 6];
const n = 3;

var merge = (nums1, m, nums2, n) => {
  let ans = [];
  for (let i = 0; i < m; i++) {
    if (nums1[i] !== 0) {
      ans.push(nums1[i]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums2[i] !== undefined || nums2[i] !== 0) {
      ans.push(nums2[i]);
    }
  }
  ans.sort((a, b) => a - b);
  return ans;
};

let res = merge(arr1, m, arr2, n);
console.log(res);

const margeTwoArr = (nums1, m, nums2, n) => {
  let ans1 = nums1.concat(nums2);
  ans1.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < ans1.length; i++) {
    if (ans1[i] !== 0) {
      ans.push(ans1[i]);
    }
  }
  return ans;
};
let res1 = margeTwoArr(arr1, m, arr2, n);
console.log(res1);
