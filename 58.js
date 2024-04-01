/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let words = s.split(" ");

    let i = words.length - 1;

    while (i >= 0) {
        if (words[i].length > 0) {
            return words[i].length
        }
        i--;
    }
};

// turn into an array
// find the length of longest non zero