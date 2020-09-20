// Logical Thinking III

/* 1. Lowest to Highest
    Given an array of numbers from 1-9:

    [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
    Sort the array from lowest value to highest.
*/
let numbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
numbers.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(numbers); // [ 1, 2, 2, 3, 4, 5, 6, 7, 8, 9 ]

// OR
numbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers); // [ 1, 2, 2, 3, 4, 5, 6, 7, 8, 9 ]

// OR
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 2, 2, 3, 4, 5, 6, 7, 8, 9 ]

/* 2. Alphabetical Order
    Given an array of names:

    ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
    Sort the array based on alphabetical order from a → z.
*/
let names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
names.sort();
console.log(names); // [ 'Ale', 'Bleda', 'Fran', 'Hadi', 'Jenna', 'Leon' ]

// OR
let names1 = ["Fran", "leon", "ale", "Bleda", "Hadi"];
names1.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

});
console.log(names1); // [ 'ale', 'Bleda', 'Fran', 'Hadi', 'leon' ]

// Bonuses
/* 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings. */
let arr = ["ant", "cake", "banana"];
arr.sort((a, b) => b.length - a.length);
console.log(arr); // [ 'banana', 'cake', 'ant' ]

// OR
let arr1 = ["ant", "cake", "banana"];
arr1.sort((a, b) => a.length - b.length);
console.log(arr1); // [ 'ant', 'cake', 'banana' ]

