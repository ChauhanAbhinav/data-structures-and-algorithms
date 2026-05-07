// Given an integer array nums where every element appears three times except for one, 
// which appears exactly once. Find the single element and return it. 
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let result = 0;
    for(let i = 0; i < 32; i++) {
        let sum = 0
        for(let n of nums) {
            sum += ((n >> i) & 1)
        }

        result |= ((sum % 3) << i)
    }
    return result
};

console.log(singleNumber([2,2,5,2,4,5,5]))  
// 4