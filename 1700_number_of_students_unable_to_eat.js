/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

// need to create a queue of students
// need to create a stack of sandwiches
// compare the top of the stack to the front of the queue
// if match, remove sandwich from stack and dequeue student

var countStudents = function (students, sandwiches) {
    while (students.includes(sandwiches[0]) && sandwiches.length !== 0) {
        if (sandwiches[0] === students[0]) {
            sandwiches.shift();
            students.shift();
        } else {
            students.push(students.shift());
        }
    }

    return students.length;
};