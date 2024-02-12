/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

// create a hash with the row as the key and the number of soldiers as the value
// sort by soldiers
// sort by indicies
// return answer

var kWeakestRows = function (mat, k) {
    let hash = {};

    for (let i = 0; i < mat.length; i++) {
        let soldiers = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                soldiers++;
            }
        }

        hash[i] = soldiers;
    }

    let sortedSoldiers = Object.entries(hash).sort((a, b) => a[1] - b[1])

    let result = [];

    sortedSoldiers.forEach(soldier => {
        result.push(Number(soldier[0]))
    })

    return result.splice(0, k);
};