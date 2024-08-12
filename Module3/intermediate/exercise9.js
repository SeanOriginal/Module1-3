// 9. Given the below salaries object, perform the following tasks.
// let salaries = {
// "Timothy" : 35000,
// "David" : 25000,
// "Mary" : 55000,
// "Christina" : 75000,
// "James" : 43000
// };
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all
// salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the
// person earning the highest salary

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

function sumSalaries(salaries) {
    let total = 0;
    for (let key in salaries) {
        total += salaries[key];
    }
    return total;
}

function topEarner(salaries) {
    let highestEarner = '';
    let highestSalary = 0;
    for (let key in salaries) {
        if (salaries[key] > highestSalary) {
            highestSalary = salaries[key];
            highestEarner = key;
        }
    }
    return highestEarner;
}

