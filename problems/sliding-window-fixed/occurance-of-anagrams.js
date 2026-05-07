// Find occurances of anagram - String
// text = "forxxorfxdofr"
// pattern = "for"


// Basic sliding window - Not optimal
function fixedWindow(string, pattern) {

    let window = string.slice(0, pattern.length);
    
    let count = checkAnagrams(window, pattern)? 1: 0;


    // Slide window
    for (let i = pattern.length; i < string.length; i++) {
        window += string[i];       // incoming
        window = window.slice(1);   // outgoing
        if(checkAnagrams(window, pattern)) {
            count++;
        }
    }

    // Check Anagrams
    function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let map = {};
    for (let char of str1) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!map[char]) return false;
        map[char]--;
    }
    return true;
    }

    return count;
}

console.log("Count Subarray:", fixedWindow("forxxorfxdofr","for"));


// Optimal sliding window
function countAnagrams(text, pattern) {

    let map = {};

    for (let ch of pattern) {
        map[ch] = (map[ch] || 0) + 1;
    }

    let count = Object.keys(map).length;

    let i = 0;
    let j = 0;

    let ans = 0;

    while (j < text.length) {

        // Acquire
        let ch = text[j];

        if (map[ch] !== undefined) {

            map[ch]--;

            if (map[ch] === 0) {
                count--;
            }
        }

        // Window size smaller
        if (j - i + 1 < pattern.length) {

            j++;
        }

        // Window complete
        else if (j - i + 1 === pattern.length) {

            if (count === 0) {
                ans++;
            }

            // Release
            let leftChar = text[i];

            if (map[leftChar] !== undefined) {

                if (map[leftChar] === 0) {
                    count++;
                }

                map[leftChar]++;
            }

            i++;
            j++;
        }
    }

    return ans;
}

console.log("Count Subarray:", countAnagrams("forxxorfxdofr","for"));