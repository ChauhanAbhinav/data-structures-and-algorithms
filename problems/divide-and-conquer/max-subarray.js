// Divide and Conquer - Maximum Subarray

var maxSubArray = function(nums) {
    function solve(left, right){
        if(left === right) return nums[left];

        let mid = Math.floor((left + right) / 2);
        let leftMax = solve(left, mid);
        let rightMax = solve(mid + 1, right);

        // Cross Sum
        let sum = 0;
        let leftSum = -Infinity;
        for(let i=mid; i>=left; i--){
            sum += nums[i];
            leftSum = Math.max(sum, leftSum); // Max suffix sum
        }

        sum = 0;
        let rightSum = -Infinity;
        for(let i=mid+1; i<=right; i++){
            sum += nums[i];
            rightSum = Math.max(sum, rightSum); // Max suffix sum
        }

        let crossSum = leftSum + rightSum;
        
        return Math.max(leftMax, rightMax, crossSum)
    }
    return solve(0, nums.length - 1)
}


console.log("Maximum Subarray Sum:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 6

// optimal solution: Kadane Algorithm

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
