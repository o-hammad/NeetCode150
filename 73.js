/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = new Set();
    let columns = new Set();

    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[0].length; n++) {
            if (matrix[m][n] === 0) {
                rows.add(m);
                columns.add(n);
            }
        }
    }

    for (let row of rows) {
        for (let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = 0;
        }
    }

    for (let column of columns) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][column] = 0;
        }
    }
};