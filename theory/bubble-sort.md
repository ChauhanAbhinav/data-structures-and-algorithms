# Bubble Sort - Sorting Algorithm in DSA

## Introduction
Bubble Sort is a simple **comparison-based sorting algorithm**.  
It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

## How it works
1. Compare the first two elements.
2. Swap if the first is greater than the second.
3. Move to the next pair and repeat.
4. Repeat the whole process until the array is sorted.

## Time Complexity
- Best Case: O(n) (already sorted)
- Average Case: O(n²)
- Worst Case: O(n²)
- Space Complexity: O(1)

## Example (JavaScript)
```js
let arr = [5, 2, 9, 1, 5];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(arr); // Output: [1, 2, 5, 5, 9]