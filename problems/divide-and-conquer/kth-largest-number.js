// Given an integer array nums and an integer k,
// return the kth largest element in the array.

let findKthLargest = function(nums, k) {
    k = nums.length - k;

    const quickSelect = (l, r) =>  {
        const pivot = nums[r];
        let p = l;
    
        for (let i=l;i<r;i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }
        [nums[p], nums[r]] = [nums[r], nums[p]];

        if (p > k) return quickSelect(l, p-1);
        if (p < k) return quickSelect(p+1, r);
        return nums[p];
    }

    return quickSelect(0, nums.length-1);
};

console.log(findKthLargest([3,2,1,5,6,4], 2));