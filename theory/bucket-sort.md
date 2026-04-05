# Bucket Sort - Sorting Algorithm in DSA

## Introduction
Bucket Sort distributes elements into **buckets** and then sorts each bucket individually.  
It works well when input is **uniformly distributed** over a range.

## How it works
1. Divide elements into buckets based on a range.
2. Sort each bucket (using another sort, like Insertion Sort).
3. Concatenate all sorted buckets.

## Time Complexity
- Best Case: O(n + k)  
- Average Case: O(n + n²/k + k)  
- Worst Case: O(n²)  
- Space Complexity: O(n + k)

## Example (JavaScript)
```js
let arr = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47];
let n = arr.length;
let buckets = Array.from({ length: n }, () => []);
arr.forEach(num => buckets[Math.floor(num * n)].push(num));
buckets.forEach(bucket => bucket.sort((a, b) => a - b));
let sortedArr = [].concat(...buckets);
console.log(sortedArr); 
// Output: [0.23, 0.25, 0.32, 0.42, 0.47, 0.52]