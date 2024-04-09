/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

// tickets = [2,3,2], k = 2

var timeRequiredToBuy = function (tickets, k) {
    let count = 0; //3 // [1,2,1] // 6 // [0, 1, 0]

    while (tickets[k] > 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] > 0) {
                count++;
                tickets[i]--;
            }

            if (tickets[k] <= 0) {
                return count;
            }
        }
    }

    return count;
};

// decrement tickets[0]
// move tickets[0] to back of line
// count how many seconds