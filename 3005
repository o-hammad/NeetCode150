/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let frequencies = {};

    for (let num of nums) {
        frequencies[num] = frequencies[num] + 1 || 1;
    }

    let array = Object.values(frequencies).sort((a, b) => b - a);
    let res = array[0];
    let maxFreq = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === maxFreq) {
            res += array[i]
        }
    }

    return res;
};


// hash counter
// sort in descending order
// if item at position 1 of object entries = first, then add them
// return that count