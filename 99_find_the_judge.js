/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

// set up 2 arrays, inDegree and outDegree
// iterate through trust and increment inDegree[i] and outDegree i
// iterate up to n and check if indegree = n - 1 and outdegree = 0
// return candidate if it meets the criteria otherwise return - 1

var findJudge = function (n, trust) {
    let inDegree = new Array(n + 1).fill(0);
    let outDegree = new Array(n + 1).fill(0);

    for (let i of trust) {
        inDegree[i[1]]++;
        outDegree[i[0]]++;
    }

    for (let j = 1; j < n + 1; j++) {
        if ((inDegree[j] === n - 1) && (outDegree[j] === 0)) {
            return j;
        }
    }

    return -1;
};