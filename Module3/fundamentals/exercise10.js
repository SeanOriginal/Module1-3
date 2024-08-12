// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.
function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
}

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    
    this.canDrive = function() {
        return this.age >= 16; // Assuming 16 is the legal driving age
    };
}

// Creating first person
var person1 = new Person("Alice", 30);
console.log(person1.name); // Alice
console.log(person1.age); // 30
console.log(person1.canDrive()); // true

// Creating second person
var person2 = new Person("Bob", 15);
console.log(person2.name); // Bob
console.log(person2.age); // 15
console.log(person2.canDrive()); // false

// Class definition
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 16; // Assuming 16 is the legal driving age
    }
}

// Creating third person
const person3 = new PersonClass("Charlie", 20);
console.log(person3.name); // Charlie
console.log(person3.age); // 20
console.log(person3.canDrive()); // true

