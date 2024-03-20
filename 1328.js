/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length === 1) return "";
    let palindromeArray = palindrome.split("");

    let i = 0;
    while (i < (Math.floor(palindromeArray.length / 2))) {
        if (palindromeArray[i] !== "a") {
            palindromeArray[i] = "a";
            return palindromeArray.join("");
        }
        i++;
    }

    palindromeArray[palindromeArray.length - 1] = "b";
    return palindromeArray.join("");
};
// iterate through palindrome and replace the first non a with a
// if palindome is length 1, return empty string