/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const normalized = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for (let i = 0; i < normalized.length; i++) {
        if (normalized[i] !== normalized[normalized.length - i - 1]) {
            return false
        }
    }

    return true
};