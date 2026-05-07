// Find occurances of substring - String
// text = "forxxforxdfor"
// pattern = "for"

function fixedWindow(string, pattern) {

    let window = string.slice(0, pattern.length);
    
    let count = window === pattern? 1: 0;


    // Slide window
    for (let i = pattern.length; i < string.length; i++) {
        window += string[i];       // incoming
        window = window.slice(1);   // outgoing
        if(window === pattern) {
            count++;
        }
    }

    return count;
}

console.log("Count Subarray:", fixedWindow("forxxforxdfor","for"));