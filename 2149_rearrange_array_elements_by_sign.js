/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let positive = [], negative = [];

    for (let num of nums) {
        if (num > 0) {
            positive.push(num);
        } else {
            negative.push(num);
        }
    }

    let result = [];

    let ind1 = 0;
    let ind2 = 0;

    while (ind2 < nums.length / 2) {
        result.push(positive[ind1]);
        ind1++;
        result.push(negative[ind2]);
        ind2++;
    }

    return result;
};