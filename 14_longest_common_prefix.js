/**
 * @param {string[]} strs
 * @return {string}
 */

// create a common variable starting with the first word
// iterate through the input while iterating through the string to see how much matches the commong word
// return the common variable

var longestCommonPrefix = function (strs) {
    let common = strs[0].split("");

    for (let word of strs) {
        let wordArray = word.split("");

        for (let i = 0; i < common.length; i++) {
            if (wordArray[i] !== common[i]) {
                common.splice(i);
            }
        }
    }

    return common.join("");
};