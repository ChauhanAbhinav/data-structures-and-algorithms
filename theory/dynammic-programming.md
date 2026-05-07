# Dynamic Programming (DP) - DSA Concept

## Introduction
Dynamic Programming (DP) is a technique to **optimize recursive solutions** by storing results of subproblems.  
It reduces **time complexity** by avoiding repeated calculations.

## How it works
1. Identify overlapping subproblems.
2. Store solutions (memoization or tabulation).
3. Reuse stored results instead of recalculating.

## Key Patterns
- Fibonacci numbers
- Knapsack problem
- Longest Common Subsequence (LCS)
- Matrix DP problems

## Example (JavaScript - Fibonacci with Memoization)
```js
const memo = {};
function fib(n) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n]; // Memoization
  memo[n] = fib(n-1) + fib(n-2);
  return memo[n];
}
console.log(fib(10)); // Output: 55

// Classic Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;

    let a = 0, b = 1;

    for (let i = 2; i <= n -1; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Example
console.log(fibonacci(7)); // 13