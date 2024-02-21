/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// use merge sort technique to merge two arrays

var merge = function (nums1, m, nums2, n) {
    let nums1Cut = nums1.slice(0, m);
    nums1 = [];

    while (nums1Cut.length && nums2.length) {
        if (nums2[0] < nums1Cut[0]) {
            nums1.push(nums2.shift());
        } else {
            nums1.push(nums1Cut.shift());
        }
    }

    return nums1.concat(nums1Cut, nums2);
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);