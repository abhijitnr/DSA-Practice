// Insertion Sort

// Steps
// 1. Considered that element will start from arr[1]
// 2. We will compare the next element with all previous element on the left hand side of the current element
// 3. If arr[j] > current element than it will swap

const arr = [8, 5, 2, 7, 1];

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
    // console.log(arr[i]);
  }
  return arr;
};

const ans = insertionSort(arr);
console.log(ans);
