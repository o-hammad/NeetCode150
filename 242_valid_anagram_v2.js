/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Convert strings to arrays of characters and sort them
    const ss = s.split('').sort();
    const tt = t.split('').sort();

    // Check if the sorted arrays are equal
    return ss.join('') === tt.join('');
}