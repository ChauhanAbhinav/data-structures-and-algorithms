// swapping 2 variables - XOR

// 1. Using XOR operator

let a = 10;
let b = 20;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a,b)

//  Using temp variable

let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a,b)

// using destructuring

let a = 10;
let b = 20;

[b,a] = [a,b]

console.log(a,b)

// Arithmatic Operator

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(a,b)