// Bit Manipulation - Single Number
// Every element occurs exactly twice except for one unique element.

function singleNumber(nums){
  let res=0;
  for(let n of nums) res^=n;
  return res;
}
console.log("Single Number:", singleNumber([1,1,2,3,2])); 
// Output: 4
