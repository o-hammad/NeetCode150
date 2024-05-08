/**
 * @param {number[]} stones
 * @return {number}
 */

// [1,2,3,4,5,17] // [1,2,3,4,12] // 

var lastStoneWeight = function (stones) {
    let sorted = stones.slice().sort((a, b) => a - b);

    while (sorted.length) {
        if (sorted.length === 1) {
            return sorted.pop();
        } else {
            let y = sorted.pop();
            let x = sorted.pop();

            if (x < y) {
                sorted.push(y - x);

                sorted.sort((a, b) => a - b);
            }
        }
    }

    return 0;
};

// sort the array
// if the length is 1, return that number
// otherwise, pop off two
// do the math of x and y
// if the array length is 0, return 0