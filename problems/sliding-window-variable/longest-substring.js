// Longest Substring Without Repeating Characters - Variable Sliding window
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

console.log("Longest Unique Substring:", lengthOfLongestSubstring("abcabcbb"));
// Output: 3