# Recursion & Backtracking - DSA Concept

## Introduction
Recursion is a programming technique where a function **calls itself** to solve smaller subproblems.  
Backtracking is an extension of recursion used to **explore all possible solutions** and undo choices if needed.

## How it works
- Recursion solves a problem by dividing it into smaller subproblems.
- Backtracking explores decision trees and **prunes invalid paths**.

## Key Patterns
- Subset generation
- Permutations and combinations
- N-Queens problem
- Word search problems

## Example (JavaScript - Factorial)
```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120