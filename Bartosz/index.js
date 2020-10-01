// # Logical Thinking III

// #### 1. Lowest to Highest

// Given an array of numbers from 1-9: 

// [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
// Sort the array from lowest value to highest.

let numArr = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

let sortNums = (arr) => {
   return arr.sort((a, b) =>  a - b);

}
console.log(sortNums(numArr));      // [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]

// #### 2. Alphabetical Order
// Given an array of names:

// ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
// Sort the array based on alphabetical order from `a → z`. 

let nameArr = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

let alphabetOrder = (arr) => {
    return arr.sort()
}
console.log(alphabetOrder(nameArr)); // [ 'Ale', 'Bleda', 'Fran', 'Hadi', 'Jenna', 'Leon' ]

// **Bonuses**
// 1. Once you've wrote down your pen and paper solutions, create functions to solve the problems above with javascript. 
// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings. 

let nameArr2 = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

let orderArr = (arr) => {
    return arr.sort((a, b) => a.length - b.length)
}

console.log(orderArr(nameArr2));    // [ 'Ale', 'Fran', 'Leon', 'Hadi', 'Jenna', 'Bleda' ]