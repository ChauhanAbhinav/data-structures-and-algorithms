# Merge Sort - Sorting Algorithm in DSA

## Introduction
Merge Sort is a **divide-and-conquer algorithm**.  
It divides the array into halves, sorts each half, and merges them back together.

## How it works
1. Divide the array into two halves.
2. Recursively sort each half.
3. Merge the sorted halves.

## Time Complexity
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)
- Space Complexity: O(n)

## Example (JavaScript)
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left, right);
}

console.log(mergeSort([5, 2, 9, 1, 5])); // Output: [1, 2, 5, 5, 9]