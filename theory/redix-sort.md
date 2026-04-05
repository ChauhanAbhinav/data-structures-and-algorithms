# Radix Sort - Sorting Algorithm in DSA

## Introduction
Radix Sort is a **non-comparison-based sorting algorithm**.  
It sorts numbers **digit by digit**, starting from the least significant digit to the most significant.

## How it works
1. Find the maximum number to know the number of digits.
2. Sort numbers by each digit using Counting Sort as a subroutine.
3. Repeat for all digits.

## Time Complexity
- Best/Average/Worst Case: O(nk)  
  (n = number of elements, k = number of digits)  
- Space Complexity: O(n + k)

## Example (JavaScript)
```js
function countingSortForRadix(arr, exp) {
  let output = Array(arr.length).fill(0);
  let count = Array(10).fill(0);
  arr.forEach(num => count[Math.floor(num / exp) % 10]++);
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    let idx = Math.floor(arr[i] / exp) % 10;
    output[count[idx] - 1] = arr[i];
    count[idx]--;
  }
  for (let i = 0; i < arr.length; i++) arr[i] = output[i];
}

function radixSort(arr) {
  let max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp);
  }
  return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66])); 
// Output: [2, 24, 45, 66, 75, 90, 170, 802]