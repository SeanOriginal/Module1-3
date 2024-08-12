// run this file by typing
// nodemon inclass.js

// console.log("hello");
// console.log("world");

// console.log("hello");
// console.log("world");

// const myVariable = ''

// console.log(myVariable)

// const interger = 123
// const float = 12.345 //anything with a decimal

// console.log(1/0)
// console.log(-1/0)
// console.log(1/-0)
// console.log(1234)
// console.log('not a number' / 1234)

// let one = 1
// let two = 2
// let three = 3

// one++
// console.log(one)

// // two = two - 1
// // two -= 1
// two--;
// console.log(two)

// const bigint_valid = 12345678912345678912345
// const bigint_invalid = 12345678912345678912345













// function helloWorld() {
//     console.log("Hello world!")
// }

// //helloWorld();

function checkAge(age) {
    //age as a parameter will only exist in this scope
    if (age >= 18) {
        return 'adult' //if condition is true
    }

    return 'non-adult'
}

// console.log( checkAge(21))

// const result = checkAge(23)
// const result2 = checkAge(13)

// console.log(result)
// console.log(result2)



// console.log(result)


const sayHi = function(age){
    console.log('Hi')
}

// sayHi(age)

sayHiExpression()
sayHiDeclaration()

const sayHiExpression = function(test){
    console.log('Hi')
    console.log(arguments)
}

function sayHiDeclaration(){
    console.log('Hi')
    console.log(arguments)
}

const sayHiArrow = () => {
    console.log('Hi')
    console.log('Bye')
    console.log(arguments)
}

// sayHiDeclaration('test')
// sayHiDeclaration('cool beans')
// sayHiArrow('notcoolbeans')

// sayHiArrow()

// const subtract = (a, b) => a - b
// console.log(subtract1(10, 5))

// const subtract2 = (a, b) => { return a - b}
// console.log(subtract2(100, 40))

// const user = new Object()

// const user = {
//     name: 'Joe',
//     age: 20,
//     'has a dog': true
// }

// console.log(user.name) //dot notation
// console.log(user["name"])//bracket notation - capable of dynamic

// user.age = 21 // set
// user["age"] = 22

// console.log(user.age)

// let dogOwner = user['has a dog']

// console.log(dogOwner)

// user.location = 'NSW'

// console.log(user)

// // delete user.location
// delete user["has a dog"]

// const object = {
//     2: 'value of numeric property',
//     '2': 'value of string property',
//     "2": 'oh no',
// }

// console.log(object)

const phone = {
    model: 'iPhone 11',
    color: 'Black'
}

// if (phone.color) {
//     console.log(`My ${phone.model} is ${phone.color}`)
// }

// if (phone.storage) {
//     console.log(`My ${phone.model} has ${phone.storage}GB`)

// } else {
//     //
//     console.log('NO')
// }

let goal = 5

//for ([starting point]; [while condition, keep going]; [increase i])
for (let i = 0; i < goal; i++) {
    //anything in for loop will keep running until condition is met
    console.log(`Iteration ${i} of ${goal}`)
}
    
let classlight =  [
    ""
]


