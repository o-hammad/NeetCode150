/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 0, right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        let k = Math.floor(((right + left) / 2));
        let hours = 0;

        for (let p of piles) {
            hours += Math.ceil(p / k);
        }

        if (hours <= h) {
            right = k - 1;
            result = Math.min(result, k)
        } else {
            left = k + 1;
        }

    }

    return result;
};
