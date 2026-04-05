# Quick Sort - Sorting Algorithm in DSA

## Introduction
Quick Sort is a **divide-and-conquer sorting algorithm**.  
It picks a "pivot" and partitions the array into elements **less than** and **greater than** the pivot, then recursively sorts them.

## How it works
1. Choose a pivot (commonly last element).
2. Partition array into left (smaller) and right (larger) than pivot.
3. Recursively apply Quick Sort on left and right subarrays.
4. Combine results.

## Time Complexity
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n²) (already sorted or bad pivot)
- Space Complexity: O(log n) (recursive stack)

## Example (JavaScript)
```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 2, 9, 1, 5])); // Output: [1, 2, 5, 5, 9]