// Logical Thinking III
// Write pseudo-code for the following exercises on pen and paper.

// 1. Lowest to Highest
const numArr =[4, 2, 5, 3, 9, 7, 1, 8, 2, 6];


console.log(numArr.sort()); //[ 1, 2, 2, 3, 4, 5, 6, 7, 8, 9 ]
//OR
numArr.sort((a, b) => a - b);
console.log(numArr); ////[ 1, 2, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 2. Alphabetical Order
const namesArr = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
console.log(namesArr.sort()); //[ 'Ale', 'Bleda', 'Fran', 'Hadi', 'Jenna', 'Leon' ]


function inOrder (...arr) {
    for(let i = 0; i < arr.length; i++) {
        let result = [];
        result.push(arr[i])
        return result.sort();
    }
};
console.log(inOrder(numArr)); //[ [ 1, 2, 2, 3, 4, 5, 6, 7, 8, 9 ] ]
console.log(inOrder(namesArr)); //[ [ 'Ale', 'Bleda', 'Fran', 'Hadi', 'Jenna', 'Leon' ] ]

// Bonuses

// Once you've wrote down your pen and paper solutions, create functions to solve the problems above with javascript.

// Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.


const result = namesArr.filter(namesArr => namesArr.length > 4);
console.log(result);  //[ 'Bleda', 'Jenna' ]
//OR
namesArr.sort((a, b) => a.length - b.length);
console.log(namesArr); // [ 'Ale', 'Fran', 'Hadi', 'Leon', 'Bleda', 'Jenna' ]
//OR
namesArr.sort( (a, b) => a > b ? 1 : -1); 
console.log(namesArr); //[ 'Ale', 'Bleda', 'Fran', 'Hadi', 'Jenna', 'Leon' ]
