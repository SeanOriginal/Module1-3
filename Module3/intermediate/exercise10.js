// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the
// amount of days in between the two given dates.

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

const secondsPassed = (today.getHours() * 3600) + (today.getMinutes() * 60) + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

const birthDate = new Date('YYYY-MM-DD'); // Replace with your birth date
const ageInMilliseconds = today - birthDate;
const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
const years = Math.floor(ageInDays / 365.25);
const months = Math.floor((ageInDays % 365.25) / 30.44);
const days = Math.floor((ageInDays % 365.25) % 30.44);
console.log('I am ' + years + ' years, ' + months + ' months and ' + days + ' days old');

function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((date2 - date1) / oneDay));
}

