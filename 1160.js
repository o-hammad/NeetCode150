/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let count = 0;

    for (let word of words) {
        if (createWord(word, chars)) {
            count += word.length;
        }
    }

    return count;
};

var createWord = function (word, chars) {
    let charsArray = chars.split("");

    for (let i = 0; i < word.length; i++) {
        if (charsArray.includes(word[i])) {
            let charsIndex = charsArray.indexOf(word[i]);
            charsArray.splice(charsIndex, 1);
        } else {
            return false;
        }
    };

    return true;
};

// have a helper function to see if the word can be made from the chars string
// take out each letter as you use it