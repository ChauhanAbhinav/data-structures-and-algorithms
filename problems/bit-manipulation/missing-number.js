// Missing number in array - 0 to n - XOR Method
let arr = [0, 3, 4 , 1, 2, 5, 7]
function missingNumber(arr) {
    let xor = 0;
    let n = arr.length;

    for (let i = 0; i <= n; i++) xor ^= i; // XOR of 0 to n

    for (let num of arr) xor ^= num; // XOR of array numbers, cancels subsequently and left missing number

    return xor;
}

console.log(missingNumber(arr))

// Note : Property of XOR -> Cancels similar

// 2. Gauss Method
let arr = [0, 3, 4 , 1, 2, 5, 7]
function missingNumber(arr) {
    let n = arr.length;
    let sum = n*(n+1)/2;

    for (let num of arr) sum -=num; // missing number will remain

    return sum;
}

console.log(missingNumber(arr))