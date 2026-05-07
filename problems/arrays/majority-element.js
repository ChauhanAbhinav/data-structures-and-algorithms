// Given an array nums of size n, return the majority element
// The majority element is the element that appears more than ⌊n / 2⌋ times
// You may assume that the majority element always exists in the array

// Boyer Moore Solution
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let n of nums) {

        if (count === 0) {
            candidate = n;
        }

        if (n === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};

// Using Map
var majorityElement = function(nums) {

let map = {};
let candidate = nums[0];
for(let a of nums) {

    map[a] = (map[a] || 0) + 1
    
    if(map[a]>nums.length/2) {
        candidate = a;
    }
}
return candidate
}

console.log(majorityElement([2,2,1,1,1,2,2])); 

// n/2 is not specified
// Map Frequency Count

var frequentElement = function(nums) {

let map = {};
let candidate = nums[0];
let maxFreq = 0;

for(let a of nums) {

    map[a] = (map[a] || 0) + 1

    if(map[a]> maxFreq) {
        candidate = a;
        maxFreq = map[a];
    }
}
return candidate
}

console.log(frequentElement([2,2,1,1,1,2,2])); 