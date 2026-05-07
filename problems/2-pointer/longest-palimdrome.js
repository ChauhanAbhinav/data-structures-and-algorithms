function longestPalindrome(s) {

    let result = "";

    function expand(left, right) {

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {

        // Odd length
        let odd = expand(i, i);

        // Even length
        let even = expand(i, i + 1);

        let longer =
            odd.length > even.length
            ? odd
            : even;

        if (longer.length > result.length) {
            result = longer;
        }
    }

    return result;
}

console.log(longestPalindrome("babad"));