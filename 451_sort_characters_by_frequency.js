/**
 * @param {string} s
 * @return {string}
 */

// turn the string into an array
// iterate through that array and create a letter count hash
// sort hash by values
// create a hash with occurences and letters
// output Object.values.join()

var frequencySort = function (s) {
    let charArray = s.split(""); // ['t', 'r', 'e', 'e']
    let letterCount = {};

    charArray.forEach(char => {
        letterCount[char] = letterCount[char] + 1 || 1;
    })

    let sorted = Object.entries(letterCount).sort((a, b) => b[1] - a[1]);

    let result = "";

    sorted.forEach(pair => {
        result += pair[0].repeat(pair[1])
    })

    return result;
};