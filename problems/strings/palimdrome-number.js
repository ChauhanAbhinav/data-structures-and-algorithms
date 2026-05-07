// Check is string is palimdrome
var isPalindrome = function(x) {
    
    let copy = x, reversed=0;
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reversed === copy;
};