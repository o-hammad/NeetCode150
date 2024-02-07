/**
 * @param {number} x
 * @return {boolean}
 */

// convert the number to a string
// reverse it
// check if it is a palindrome

var isPalindrome = function (x) {
    const xStringArray = x.toString().split("");
    const reverseString = xStringArray.reverse();

    for (let i = 0; i < xStringArray.length; i++) {
        if (xStringArray[i] !== reverseString[reverseString.length - 1 - i]) {
            return false;
        }
    }

    return true;
};