// 1. Lowest to Highest
// Given an array of numbers from 1-9:

// [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];


let givenArr = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

function sortMyArr(arr) {
   return arr.sort((a,b) =>  a - b);

}
console.log(sortMyArr(givenArr));  // [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]


// 2. Alphabetical Order
// Given an array of names:

// ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
// Sort the array based on alphabetical order from a → z.

let nameArr = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
function alphOrder(arr){
    return arr.sort()
}
console.log(alphOrder(nameArr)); // [ 'Ale', 'Bleda', 'Fran', 'Hadi', 'Jenna', 'Leon' ]





// Bonuses

// Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.

randomArr = ["javascript", "dci", "coding", "react"]
function strLength(arr) {
  return  arr.sort((a,b) => a.length - b.length)
}
console.log(strLength(randomArr));