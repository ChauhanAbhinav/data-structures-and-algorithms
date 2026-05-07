// Find if has valid Parenthesis in string or not.

function isValid(s) {

    let stack = [];

    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of s) {

        // Opening bracket
        if (
            ch === '(' ||
            ch === '{' ||
            ch === '['
        ) {
            stack.push(ch);
        }

        // Closing bracket
        else {
            if (stack.pop() !== map[ch]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[]{}"));