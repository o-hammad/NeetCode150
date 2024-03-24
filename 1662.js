/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let word1Combined = word1.join("");
    let word2Combined = word2.join("");

    return word1Combined === word2Combined;
};