/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const n = (nums.length / 2)
    let hashCount = {};

    nums.forEach(ele => {
        hashCount[ele] = hashCount[ele] + 1 || 1;
    })

    let filtered = Object.entries(hashCount).filter(entry => entry[1] > n)

    return Number(filtered[0][0]);
};