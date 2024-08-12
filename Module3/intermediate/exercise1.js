// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(ucFirstLetters("los angeles")); // Los Angeles
console.log(ucFirstLetters("hello world")); // Hello World
console.log(ucFirstLetters("javaScript is fun")); // JavaScript Is Fun
console.log(ucFirstLetters("capitalize each word")); // Capitalize Each Word

