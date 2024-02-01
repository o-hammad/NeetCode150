/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// find the average hours per pile by dividing n piles by h hours - 2 - 1 - .83333
// find max and divide by average hours per pile - 5.5 - 30 - 
// iterate through piles until h === count while decrementing by 1 - 4 will match

var minEatingSpeed = function (piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let ans = high;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        let hours = 0;

        for (let p of piles) {
            hours += Math.ceil(p / mid);
        }

        if (hours <= h) {
            ans = Math.min(mid, ans);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};