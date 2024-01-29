/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let merged = matrix.flat(1);

    let lo = 0;
    let hi = merged.length - 1;

    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo + 1) / 2);

        if (merged[mid] > target) {
            hi = mid - 1;
        } else {
            lo = mid;
        }
    }

    return merged[lo] == target ? true : false;
};