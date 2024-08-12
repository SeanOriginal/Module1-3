//5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.]

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

// Function Expression Syntax
const getGreeting = function(name) {
    return 'Hello ' + name + '!';
};

// Arrow Function Syntax
const getGreetingArrow = (name) => {
    return 'Hello ' + name + '!';
};

// Testing both functions
console.log(getGreeting('Alice')); // Output: Hello Alice!
console.log(getGreetingArrow('Bob')); // Output: Hello Bob!

