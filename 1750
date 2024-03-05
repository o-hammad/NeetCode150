/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right && s[left] === s[right]) {
        let char = s[left];

        while (char === s[left] && left <= right) {
            left++;
        }

        while (char === s[right] && right >= left) {
            right--;
        }
    }

    return (right - left) + 1;  
};