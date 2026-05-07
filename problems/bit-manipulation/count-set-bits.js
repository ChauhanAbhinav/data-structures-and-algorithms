// Counting set bits = counting how many 1s in binary representation of a number.
// 5  = 101  → 2 set bits
// 7  = 111  → 3 set bits

// Brian Kernighan’s Algorithm
function countBits(n) {
    let count = 0;

    while (n) {
        n = n & (n - 1); // removes last set bit
        count++;
    }

    return count;
}

// Ordinary Method
function countBits(n) {
    let count = 0;

    while (n > 0) {
        if (n & 1) count++; // check last bit - 1 for odd, 0 for even
        n = n >> 1;         // shift right
    }

    return count;
}

console.log(countBits(5)); // 2