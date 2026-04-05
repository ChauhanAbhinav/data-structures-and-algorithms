// --------------------------
// 3. Dynamic Programming - Longest Increasing Subsequence
// --------------------------
function longestIncreasingSubsequence(nums) {
  let n = nums.length;
  let dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}

console.log("LIS:", longestIncreasingSubsequence([10,9,2,5,3,7,101,18]));
// Output: 4
