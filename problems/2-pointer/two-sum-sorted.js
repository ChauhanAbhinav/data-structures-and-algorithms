// Two sum sorted array
function twoSum(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let sum = nums[left] + nums[right];

        if (sum === target) {
            return [nums[left], nums[right]];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}