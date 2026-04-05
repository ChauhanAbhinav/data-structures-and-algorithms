# Heap Sort - Sorting Algorithm in DSA

## Introduction
Heap Sort uses a **heap data structure** (max heap or min heap) to sort elements.  
It repeatedly extracts the maximum (or minimum) element from the heap and builds the sorted array.

## How it works
1. Build a max heap from the array.
2. Swap the root (largest) with the last element.
3. Reduce heap size and heapify root.
4. Repeat until heap is empty.

## Time Complexity
- Best/Average/Worst Case: O(n log n)
- Space Complexity: O(1)

## Example (JavaScript)
```js
function heapSort(arr) {
  let n = arr.length;

  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

console.log(heapSort([5, 2, 9, 1, 5])); // Output: [1, 2, 5, 5, 9]