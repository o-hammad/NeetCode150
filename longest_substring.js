/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let r = 0;
    const set = new Set();
    let longest = 0;

    while (r < s.length) {
        if (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        } else {
            set.add(s[r]);
            r++;
        }
        longest = Math.max(longest, set.size)
    }

    return longest;
};
