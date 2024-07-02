// • For understanding more about arrays, try creating an array that
// has 5 elements.
// • Replace the value of the element at position 1 and 4.
// • Add a new element to the beginning of the array
// • Remove the element at the end of the array
// • Print the array to the console.

let cod = ['Black Ops 1', 'Black Ops 2', 'Modern Warfare', 'Modern Warfare 2', 'Modern Warfare 3'];
cod[1] = 'Modern Warfare';
cod[4] = 'Black Ops 1';
cod.unshift('Cold War');
let lastCod = cod.pop();
console.log(lastCod);
console.log(cod);