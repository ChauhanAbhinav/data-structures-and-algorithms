// Check if n is written as power(k) of 2

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8))   

// Note: n & (n − 1) = 0 for powers of 2