// Optimal solution: Kadane Algorithm

function maxSubArray(nums) {

    let maxSum = -Infinity;
    let sum = 0;

    for (let n of nums) {

        sum += n;

        maxSum = Math.max(maxSum, sum);

        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}

console.log("Maximum Subarray Sum:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 6

// simple Kadane:
var maxSubArray = function(nums) {
    let cur = nums[0]
    let max = nums[0]
    for(let i = 1; i < nums.length; i ++){
        cur = Math.max(cur + nums[i], nums[i])
        max = Math.max(cur, max)
    }
    return max
}

console.log("Maximum Subarray Sum:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 6
