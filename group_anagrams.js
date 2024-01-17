/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hash = {};

    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');

        if (hash[sorted] == null) {
            hash[sorted] = [strs[i]];
        } else {
            hash[sorted].push(strs[i]);
        };
    };

    let anagrams = Object.values(hash);

    return anagrams;
};