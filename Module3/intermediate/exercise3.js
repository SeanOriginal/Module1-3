// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
const animals = ['Tiger', 'Giraffe']
console.log(animals)

const animals = ['Tiger', 'Giraffe'];
console.log(animals);

// a) Add 2 new values to the end
animals.push('Elephant', 'Zebra');
console.log(animals);

// b) Add 2 new values to the beginning
animals.unshift('Lion', 'Bear');
console.log(animals);

// c) Sort the values alphabetically
animals.sort();
console.log(animals);

// d) Write a function replaceMiddleAnimal(newValue)
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Panda');
console.log(animals);

// e) Write a function findMatchingAnimals(beginsWith)
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
console.log(findMatchingAnimals('t'));

