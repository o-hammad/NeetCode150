/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let compare = 0;

    while (students.includes(sandwiches[compare]) && sandwiches.length !== 0) {
        if (students[compare] === sandwiches[compare]) {
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students.shift());
        }
    }

    return students.length;
};

// compare sandwiches[0] and students[0] in each iteration
// if it is a match, shift sandwiches and students
// if not, .push .shift of students
// control the loop with the conditional 