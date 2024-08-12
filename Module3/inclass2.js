// const m = 1.23456
// console.log(n.tofixed(2))
// console.log(n.toPrecision(10))

// const any_variable = 'hello world'
// console.log(any_variable.toUpperCase())
// console.log(any_variable.endSwitch('rld'))
// console.log(any_variable.startSwitch('hello'))

// const user = {
//     name: 'John',
//     convertToString() {
//         return this.name
//     }
// }

// console.log('User: ' + user.ToString())

// const apple = {
//     name: 'Apple',
//     category: 'Granny Smith',
//     price: 1.2,
//     valueOf() {
//         return this.quantity
//     }
// }
// console.log(apple * 2)

// console.log('User: ' + user)

// const billion1 = 1000000000

// const billion2 = 1_000_000_000

// const billion3 = 1e9

// console.log(billion1 === billion2)
// console.log(billion2 === billion3)

// const microSecs1 = 0.000001

// const microSec2 = 0.000_001

// const microSecs3 = 1.e-6

// console.log(microSec1 === microSec2)
// console.log(microSecs2 === microSecs3)

// const r = 0xff
// const g = 0xff
// const b = 0xff

// const white = `rgb(${r}, ${g}, ${b})`

// console.log(white)

// const mobile = 041234567
// console.log(mobile)

// const binary = 0b11111111
// console.log(binary)

// const octal = 0o377
// console.log(octal)
// console.log(binary === octal)

// const ff = 255
// const ee = 238
// const dd = 221
// console.log(ff.toString(16)) //ff
// console.log(ee.toString(16))
// console.log(dd.toString(16))

// console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`)

// const toobig = 1e350

// console.log(toobig)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)

// const point1 = 0.1
// const point2 = 

// console.log(`${point1} + ${point2} = ${point1 + point2}`)
// console.log(9_999_999_999_999_999)
// console.log(9_007_199_254_740_991)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(isNaN(NaN))
// console.log(NaN === NaN)

// console.log(isFinite(1/3))
// console.log(2 * 'string')
// console.log(isFinite('string'))
// console.log(isFinite(Infinity))

// console.log(+"100px")
// console.log(Number("150px"))
// console.log(parseInt("150px"))
// console.log(parseFloat('2.5em'))
// console.log(parseFloat("12.34.56"))
// console.log(parseInt("a123"))

// const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
// console.log(guestList)

// console.log(`\xAA`)
// console.log(`\u00A9`)
// console.log(`\u{1F60D}`)

// console.log('A'.codePointAt(0))
// console.log(String.fromCodePoint(33))

// const string = 'I could be anything you like, anything'

// console.log(string.length)
// console.log(string.indexOf('anything'))
// console.log(string.subString(10,28))
// const new_string = string.substring(10, 30)
// console.log(string.toUpperCase())
// console.log(string.toLowerCase())
// console.log(string + ' plus more')

// const sentence = 'The quick brown fox jumps over the lazy dog.'

// console.log(sentence.startysWith('The'))
// console.log(sentence.endsWith('dog'))
// console.log(sentence.split(' '))
// const split_string = sentence.split(' ')
// // console.log(split_string[0])
// console.log(sentence.slice(4,10))

// const arr1 = new Array(1, 2, 3)
// const arr2 = [1, 2, 3]
// console.log(arr1)
// console.log(arr2)

// const fruits = ['Apple', 'Orange', 'Pear']
// const lastFruit = fruits.pop()
// console.log(lastFruit)
// console.log(fruits)

// fruits.push('Banana')
// console.log(fruits)

// const fruits = ['Apples', 'Orange', 'Pear']
// const firstFruit = fruits.shift
// console.log(fruits)

// // fruits.unshift('Banana')
// // console.log(fruits)

// const fruits1 = ['Apples', 'Orange', 'Pear']
// const fruits2 = fruits1

// fruits1.push('Banana')
// console.log(fruits2)

// console.log('Fruits at index 0: '+fruits1[0])
// console.log('Fruits at index 0: '+fruits1[1])

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// console.log(matrix[1][1])
// console.log(matrix[2][1])
// console.log(matrix[2][2])

// const number = [1,2,3]
// const strings = ['one', 'two', 'there']
// const empty = []

// console.log('Numbers: ' + numbers)
// console.log('String: ' + strings)
// console.log('Empty: ' + empty + "")

// const spliceArray = ['I', "study", "JavaScript", "right", "now"]
// const removed = spliceArray.splice(0, 3, "Let's", "dance")

// console.log(removed)
// console.log(spliceArray)

// const sliceArray = ['red', 'orange', 'yellow', 'green', 'blue']

// const sliced = sliceArray.slice(0,3)
// const endSliced = sliceArray.slice(-3)

// console.logI(sliced)
// console.log(endSliced)
// console.log(sliceArray)

// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]

// const combined = array1.concat(array2, array3, 'Hi', 'ye')
// console.log(combined)

// const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pipping'

// hobbits.forEach(function(item, index) {

// })

// hobbits.forEach( (hobbit, index) => {
//     // console.log(hobbit + 'Hi')
//     console.log(`#${index}`)
// })

// const marks = ['A+', 'C+', "B-", "D", "B+", "C+", "B-"]

// let bIndex = marks.indexOf('B-')
// let eIndex = marks.indexOf('E')
// let bIndexLast = marks.lastIndexOf('B-')
// console.log(bIndexLast)
// console.log(eIndex)
// console.log(eIndex)

// console.log(marks[bIndex] + ' is at index: ' + bIndex)
// const stringNums =["1", "81", "41", "102","35", "1004"]
// // console.log(stringNums.sort())
// // console.log(stringNums.sort((a,b) => a - b))

// const sortedNums = [...stringNums].sort((a,b) => a - b)
// console.log(stringNums)
// console.log(sortedNums)

// const elements = ['Wind', 'Water', 'Fire', 'Air']
// // const reversed1 = elements.reverse()
// // console.log(reversed1)
// // const reversed2 = [...elements].reverse()
// // console.log(reversed2)

// console.log(elements.join())
// console.log(elements.join(''))
// console.log(elements.join('; '))

const products = [
    (id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts", quantity: 2),
    (id: 2, title: "Men's Hoodie", price: 54.85 , category: "Winter", quantity: 3 ),
    (id: 3, title: "Denim Jeans", price: 49.95, category: "Pants", quantity: 4),
    (id: 4, title: "Ladies Tee", price: 25.95, category: "Shirts", quantity: 5)
];

// const totalPrice = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
// console.log(totalPrice)
// const totalQty = products.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)
// console.log(totalQty)

// // const over25titles = products.filter ((prod) => prod.price > 25).map( (prod) => prod.title)
// // console.log(over25titles)

// // const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price)
// //                     .reverse()
// //                     .map((prod) => ({id: prod.id, title: prod.title}))
// // console.log(hiloProducts)

// const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
// for (let animal of animalsArr) {
//     console.log(animal)
// }

// const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal'}

// // for (let property of animalObj)
// // console.log(property)

// // // for (let key in phone)

// // for (let property of animalObj) {
// //     console.log(property)
// //     console.log(animalObj[property])
// // }

// console.log(Array.from("string"))
// console.log(Array.from(new Set(['cat','sat','bat','cat','bat']))
// console.log(Array.from(new Map(
//     [1, "one"]
//     [2, "two"]
//     [3, "three"]
//     )))

// function makeArray(args) {
//     return Array.from(args)
// }

// const exampleMap = new Map()
// console.log(exampleMap)
// exampleMap.set(1, 'number one')
// console.log(exampleMap)
// exampleMap.set('1', 'string one')
// exampleMap.set(true, 'true')
// exampleMap.set({name: 'John'}, {phone: '0412345678'})
// console.log(exampleMap)
// exampleMap.set('1', 'second string one')
// console.log(exampleMap)
// console.log(exampleMap.size)


// const cachedWealth = new WeakMap()

// const billionaires = [
//     {name: 'Elon Musk'},
//     {name: 'Jeff Bezos'},
//     {name: 'Bill Gates'}
// ]

// function calculateWealth(billionaire) {
//     let wealth = cachedWealth.get({name: 'Elon Musk'})
//     if (!wealth) {
//         wealth = Math.floor(Math.random()* 300)
//         cachedWealth.set(billionaire, wealth)
//     }
// }

// billionaires.forEach((billionaire) => calculatedWealth(billionaire))

// let elon = billionaires[0]

// console.log(cachedWealth.has(elon))

// elon = null

// console.log(cachedWealth.has(elon))

const mj = ['Michael', 'Jordan']
const [mjFirst, mjLast] = mj

const [jcFirst, jcLast , jcThird , jcFourth, jcPlace, jcSixth] = ['Julius', 'Caeser', 'Consul', 'of the', 'Roman', 'Republic']

// console.log(jcFirst, jcLast, jcThird, jcPlace, jcSixth)
//console.log(`${jcFirst}

// const [a,b,c] = 'def'
// console.log(a, b, c)
// const [one, two, three] = new Set([1, 2, 3])
// console.log(one, two, three)
// const [ [], []] = new Map (([], []))
// const [ [type, quantity]] = new Map([ ['apple', 4], ['orange', 5]])
// console.log(type, quantity)

// const monarch = {}
// [monarch.title, monarch.name ] = 'King Charles'.split('')
// console.log(monarch)

const teeProduct = {
    id: 1,
    title: 'Sleeveless Tee',
    price 23.95,
    category: 'Shirts'
}

// [key, value] = Object.entries(teeproduct)
// console.log(key, value)

// for (let[key, value] of Object.entries(teeProduct)) {
//     console.log(`${key} ${value}`)
// },

// let student = 'James', teacher = 'Andrew';
// [student, teacher] = [teacher, student]
// console.log(student, teacher)

// let first = 'first', second = 'second';
// [first, second] = ['hi', first]
// console.log(first, second)

function displayComponent({height = 200, width = 100, title = 'No Title'}) {
    console.log(`<div style ="width:${width}px; height:${height}px"><h2>${title}`)
}

displayComponent({width: })
MediaDevices
