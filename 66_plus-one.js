/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    let number = BigInt(digits.join(""));

    number++;

    return String(number).split('');
};