# Selection Sort - Sorting Algorithm in DSA

## Introduction
Selection Sort is a simple comparison-based sorting algorithm.  
It repeatedly finds the **minimum element** from the unsorted part and moves it to the beginning.

## How it works
1. Start from the first element.
2. Find the minimum element in the unsorted portion.
3. Swap it with the current element.
4. Move the boundary of the sorted portion one step forward.
5. Repeat until array is sorted.

## Time Complexity
- Best/Average/Worst Case: O(n²)
- Space Complexity: O(1)

## Example (JavaScript)
```js
let arr = [5, 2, 9, 1, 5];
for (let i = 0; i < arr.length - 1; i++) {
  let minIdx = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIdx]) minIdx = j;
  }
  [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
}
console.log(arr); // Output: [1, 2, 5, 5, 9]