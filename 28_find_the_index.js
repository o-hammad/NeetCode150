/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let start = 0;
    let end = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        let substring = haystack.slice(i, i + end)

        if (substring === needle) {
            return i;
        }
    }

    return - 1;
};