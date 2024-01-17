/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hash = {};

    nums.forEach((ele) => {
        if (hash[ele] == null) {
            hash[ele] = 1;
        } else {
            hash[ele] += 1;
        }
    });

    let result = Object.values(hash).filter(value => value > 1);

    return result;
};