// Classic
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
console.log(fib(10)); // Output: 55

// Dynammic Programming
const memo = {};
function fib(n) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n]; // Memoization
  memo[n] = fib(n-1) + fib(n-2);
  return memo[n];
}
console.log(fib(10)); // Output: 55