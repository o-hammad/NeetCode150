/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [[]];

    for (const num of nums) {
        const level = [];

        for (const subArr of result) {
            level.push([...subArr, num])
        }

        result.push(...level)
    }

    return result;
};