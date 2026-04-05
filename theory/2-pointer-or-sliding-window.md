# Two Pointers / Sliding Window - DSA Concept

## Introduction
Two pointers and sliding window are techniques used to **traverse arrays or strings efficiently**.  
They help solve problems in **O(n)** instead of O(n²).

## How it works
- Two Pointers: Use two indices to iterate from start/end or in different directions.
- Sliding Window: Maintain a window of elements and slide it to compute results.

## Key Patterns
- Pair sums in sorted arrays
- Longest substring without repeating characters
- Subarray sums, max/min in window
- Container with most water

## Example (JavaScript - Longest substring without repeating characters)
```js
function lengthOfLongestSubstring(s) {
  let set = new Set(), left=0, maxLen=0;
  for(let right=0; right<s.length; right++){
    while(set.has(s[right])) set.delete(s[left++]);
    set.add(s[right]);
    maxLen = Math.max(maxLen, right-left+1);
  }
  return maxLen;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3