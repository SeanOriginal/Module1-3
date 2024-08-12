// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

function camelCase(cssProp) {
    return cssProp.split('-').map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

console.log(camelCase('margin-left')); // marginLeft
console.log(camelCase('background-image')); // backgroundImage
console.log(camelCase('display')); // display

// Using a for loop
function camelCaseForLoop(cssProp) {
    let result = '';
    const parts = cssProp.split('-');
    for (let i = 0; i < parts.length; i++) {
        if (i === 0) {
            result += parts[i];
        } else {
            result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
        }
    }
    return result;
}

console.log(camelCaseForLoop('margin-left')); // marginLeft
console.log(camelCaseForLoop('background-image')); // backgroundImage
console.log(camelCaseForLoop('display')); // display

// Using a for...of loop
function camelCaseForOf(cssProp) {
    let result = '';
    const parts = cssProp.split('-');
    let index = 0;
    for (const part of parts) {
        result += index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1);
        index++;
    }
    return result;
}

console.log(camelCaseForOf('margin-left')); // marginLeft
console.log(camelCaseForOf('background-image')); // backgroundImage
console.log(camelCaseForOf('display')); // display

// Using the conditional operator
function camelCaseConditional(cssProp) {
    return cssProp.split('-').map((word, index) => 
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
}

console.log(camelCaseConditional('margin-left')); // marginLeft
console.log(camelCaseConditional('background-image')); // backgroundImage
console.log(camelCaseConditional('display')); // display

