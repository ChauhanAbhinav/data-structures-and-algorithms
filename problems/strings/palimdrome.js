// Check is string is palimdrome
function isPalindrome(s) {
    // Remove special characters and spaces
    s = s.replace(/[^a-zA-Z\d]/g, "").toLowerCase();
    
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}