/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const sorted = score.slice().sort((a, b) => b - a)

    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            score[score.indexOf(sorted[i])] = "Gold Medal";
        } else if (i === 1) {
            score[score.indexOf(sorted[i])] = "Silver Medal";
        } else if (i === 2) {
            score[score.indexOf(sorted[i])] = "Bronze Medal";
        } else {
            score[score.indexOf(sorted[i])] = (i + 1).toString();
        }
    }

    return score
};