# Insertion Sort - Sorting Algorithm in DSA

## Introduction
Insertion Sort builds the sorted array **one element at a time**.  
It picks an element and places it in its correct position relative to already sorted elements.

## How it works
1. Start from the second element.
2. Compare it with elements before it.
3. Shift larger elements to the right.
4. Insert the element in the correct position.
5. Repeat for all elements.

## Time Complexity
- Best Case: O(n) (already sorted)
- Average Case: O(n²)
- Worst Case: O(n²)
- Space Complexity: O(1)

## Example (JavaScript)
```js

for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; // shift
        j--;
    }

    arr[j + 1] = current; // insert
} 

console.log(arr); // Output: [1, 2, 5, 5, 9]