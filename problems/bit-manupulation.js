// --------------------------
// 6. Bit Manipulation - Single Number
// --------------------------
function singleNumber(nums){
  let res=0;
  for(let n of nums) res^=n;
  return res;
}
console.log("Single Number:", singleNumber([4,1,2,1,2]));
// Output: 4
