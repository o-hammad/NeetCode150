/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let anagrams = {}

    for (let str of strs) {
        let key = new Array(26).fill(0);
        for (let char of str) {
            key[char.charCodeAt() - 97] += 1
        }
        if (anagrams[key]) {
            anagrams[key].push(str)
        } else {
            anagrams[key] = [str];
        }
    }

    return Object.values(anagrams);
};