// Find Maximum Sum Subarray of Size K - Fixed Sliding window
function fixedWindow(nums, k) {

    let sum = 0;

    // First window
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let ans = sum;

    // Slide window
    for (let i = k; i < nums.length; i++) {

        sum += nums[i];       // incoming
        sum -= nums[i - k];   // outgoing

        ans = Math.max(ans, sum);
    }

    return ans;
}

console.log("Max Sum Subarray:", fixedWindow([2,1,5,1,3,2], 3));
// Output: 3