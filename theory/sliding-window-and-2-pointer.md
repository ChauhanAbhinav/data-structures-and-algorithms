# Two Pointers / Sliding Window - DSA Concept

## Introduction
Two pointers and sliding window are techniques used to **traverse arrays or strings efficiently**.  
They help solve problems in **O(n)** instead of O(n²).

## Two Pointers
- Use two indices to iterate from start/end or in different directions.
- Best for: sorted arrays, pairs, reversing, partitioning

### Key Patterns
- Two sums in sorted arrays
- Palimdrome

### Example (Two sums in sorted arrays)
```js
// Two sums in sorted arrays
function twoSum(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let sum = nums[left] + nums[right];

        if (sum === target) {
            return [nums[left], nums[right]];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}
```

## Sliding Window
- Sliding Window: Maintain a window of elements and slide it to compute results.

### Fixed Sliding Window
Window size remains constant.
window = window + incoming − outgoing

#### Key Patterns
- max/min sum of size k (fixed window of size k)
- average of size k
- sums of subarray (size k)

#### Fixed Window Template

```js
function fixedWindow(nums, k) {

    let window = 0;

    // First window
    for (let i = 0; i < k; i++) {
        window += nums[i];
    }

    let ans = window;

    // Slide window
    for (let i = k; i < nums.length; i++) {

        window += nums[i];       // incoming
        window -= nums[i - k];   // outgoing

        ans = Math.max(ans, window);
    }

    return ans;
}
```

### Example (maximum sum of subarray size)
```js
function maxSumSubarray(nums, k) {

    let windowSum = 0;

    // First window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide window
    for (let i = k; i < nums.length; i++) {

        windowSum += nums[i];
        windowSum -= nums[i - k];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
```

### Variable Sliding Window
Window size changes dynamically.

#### Key Patterns
- longest substring
- smallest subarray
- at most k distinct
- no repeating chars
- container with most water


## Example (Longest substring without repeating characters)
```js
function lengthOfLongestSubstring(s) {

    let set = new Set();

    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {

        // Shrink window
        while (set.has(s[right])) {

            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLen =
        Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3