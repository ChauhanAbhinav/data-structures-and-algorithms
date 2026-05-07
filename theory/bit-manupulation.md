# Bit Manipulation - DSA Concept

## Introduction
Bit manipulation works with **binary representations** of numbers.  
It is highly efficient for certain numeric and combinatorial problems.

## How it works
- Use operators: AND (&), OR (|), XOR (^), NOT (~), shifts (<<, >>)
- Solve problems using binary properties

## Key Patterns
- Find single non-repeating element (XOR)
- Count set bits
- Check power of two ( n&(n-1) )
- Check even number ( n&1 -> 1 and 0 )
- Generate subsets using bits

## Binary Number
0: 00
1: 01
2: 10
3: 11
4: 100
5: 101
6: 110
7: 111
8: 1000
9: 1001
10: 1010

Even Number - Ending 0
Odd Number - Ending 1
Power of 2 - 10, 100, 1000, 1000

## Bit Operations

### AND (&)
```js
let a = 5;
let b = 3;
let res = a & b; // 0101 & 0011 = 0001 → 1

console.log(res); // Output: 1
```  
Notes: 
n & (n − 1) = 0 -> for powers of 2
n & 1 -> Odd 1, Even 0
n & (n - 1) -> Remove Last Set Bit
n & -n -> Get Lowest Set Bit

### OR (|)
```js
let a = 5;
let b = 3;
let res = a | b; // 0101 | 0011 = 0111 → 7

console.log(res); // Output: 7
``` 

### XOR (^)
```js
let a = 5;
let b = 3;
let res = a ^ b; // 0101 ^ 0011 = 0110 → 1 (cancel duplicates)

console.log(res); // Output: 6
``` 
Notes:
single number problem
swap without temp
remove duplicates

### NOT (~)
```js
let a = 5;
let res = ~a; // 0101 -> 1010 → -6

console.log(res); // Output: 1
``` 
Note: Compliment

### Left Shift (<<)
```js
let a = 5;
let res = a << 1; // 0101 -> 1010 → 10

console.log(res); // Output: 1
``` 
Note: 
Multiple by 2 
Shift bits left
5 << 1 -> Adds zeros to right
(num >> i) & 1 -> Gives Ith Bit
n ^ (1 << i) -> Toggle ith Bit

### Right Shift (>>)
```js
let a = 5;
let res = a >> 1; // 0101 -> 0010 → 2 

console.log(res); // Output: 1
```
Note: Divide by 2 

## Example (Single number)
```js
let arr = [2,3,5,3,2];
let res = 0;
for(let num of arr) res ^= num;
console.log(res); // Output: 5
``` 
Property of XOR: Cancels similar
a ^ a = 0
a ^ 0 = a

arr = [2, 2, 3, 4, 4]

result = 0

0 ^ 2 = 2
2 ^ 2 = 0   ← cancels
0 ^ 3 = 3
3 ^ 4 = 7
7 ^ 4 = 3   ← cancels

Final = 3
