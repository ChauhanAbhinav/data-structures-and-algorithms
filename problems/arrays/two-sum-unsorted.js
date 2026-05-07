// Find two number indecies whose sum equal to target, array is not sorted
// Hash Map solution
var twoSum = function(nums, target) {
    let map = {};

    for(let i=0; i<nums.length; i++) {
        let diff = target - nums[i];
        if(map[diff] !== undefined) {
            return [i, map[diff]];
        } else {
            map[nums[i]] = i;
        }
    }

    return [];
};