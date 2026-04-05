# Bit Manipulation - DSA Concept

## Introduction
Bit manipulation works with **binary representations** of numbers.  
It is highly efficient for certain numeric and combinatorial problems.

## How it works
- Use operators: AND (&), OR (|), XOR (^), NOT (~), shifts (<<, >>)
- Solve problems using binary properties

## Key Patterns
- Find single non-repeating element
- Count set bits
- Check power of two
- Generate subsets using bits

## Example (JavaScript - Single number using XOR)
```js
let arr = [2,3,5,3,2];
let res = 0;
for(let num of arr) res ^= num;
console.log(res); // Output: 5