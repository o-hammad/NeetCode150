/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let found = -1;
    let set = new Set(nums2);
    let i = 0;

    while (i < nums1.length) {
        if (set.has(nums1[i])) {
            found = nums1[i];
            break;
        }
        i++;
    }

    return found;
};