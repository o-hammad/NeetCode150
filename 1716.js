/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let week = [1, 2, 3, 4, 5, 6, 7];
    let weeks = [...week]
    let pointer = 0;
    let money = 0;
    let weekCounter = 1;

    while (weeks.length < n) {
        let newWeek = week.map((ele) => ele + weekCounter);
        weeks.push(...newWeek);
        weekCounter++;
    }

    console.log(weeks);

    while (pointer < n) {
        money += weeks[pointer]
        pointer++;
    }

    return money;
};

// have the first week as an array
// if n > 7, create the subsequent week using map