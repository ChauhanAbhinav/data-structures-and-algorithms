// --------------------------
// 9. Divide and Conquer - Maximum Subarray
// --------------------------
function maxSubArray(nums){
  function helper(l,r){
    if(l===r) return nums[l];
    let m=Math.floor((l+r)/2);
    let leftMax=helper(l,m), rightMax=helper(m+1,r);

    let crossMax=nums[m], temp=nums[m];
    for(let i=m-1;i>=l;i--){ temp+=nums[i]; crossMax=Math.max(crossMax,temp); }
    temp=nums[m+1]; crossMax=Math.max(crossMax,temp);
    for(let i=m+2;i<=r;i++){ temp+=nums[i]; crossMax=Math.max(crossMax,temp); }

    return Math.max(leftMax,rightMax,crossMax);
  }
  return helper(0,nums.length-1);
}
console.log("Maximum Subarray Sum:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 6