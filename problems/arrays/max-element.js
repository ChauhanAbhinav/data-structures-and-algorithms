// 1. Maximum Element

let maxNumber = function(nums) {

let max = -Infinity;

for(let n of nums) {
    if(n > max) {
        max = n;
    }
}
return max == -Infinity? null: max;
}

console.log(maxNumber([2,2,1,5,19,2,2])); 

// 2. Second Maximum Element

let secondMax = function(nums) {

let max = -Infinity, secMax = -Infinity;

for(let n of nums) {
    if(n > max) {
        secMax = max;
        max = n;
    } else if(n > secMax && n != max) {
        secMax = n;
    }
}
return secMax === -Infinity? null: secMax;
}

console.log(secondMax([2,2,1,5,19,2,2])); 


// 3. 3rd Max element

let thirdMax = function(nums) {

    let max = -Infinity;
    let sMax = -Infinity;
    let tMax = -Infinity;

    for (let n of nums) {

        // Ignore duplicates
        if (n === max || n === sMax || n === tMax) {
            continue;
        }

        // New maximum
        if (n > max) {
            tMax = sMax;
            sMax = max;
            max = n;
        }
        else if (n > sMax) { // New second maximum
            tMax = sMax;
            sMax = n;
        }
        else if (n > tMax) { // New third maximum
            tMax = n;
        }
    }

    return tMax === -Infinity ? null : tMax;
}

console.log(thirdMax([2,2,1,5,19,4,2,2]));

// Kth Largest element
// Quick Selection - Divide and conquer
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

// Sorting approch - Using built in function
var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a);
    return nums[k-1];
};