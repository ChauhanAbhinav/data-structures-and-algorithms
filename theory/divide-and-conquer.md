# Divide and Conquer - DSA Concept

## Introduction
Divide and Conquer is an algorithmic paradigm that **divides a problem into smaller subproblems**, solves them independently, and combines the results.

## How it works
1. Divide the problem into smaller subproblems.
2. Solve each subproblem recursively.
3. Combine the results for the final solution.

## Key Patterns
- Merge Sort
- Quick Sort
- Binary Search
- Maximum subarray problem

## Example (Binary Search - D & D)
```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right)/2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1,2,3,4,5], 4)); // Output: 3


// Recursive version
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    } else {
        return binarySearch(arr, target, left, mid - 1);
    }
}