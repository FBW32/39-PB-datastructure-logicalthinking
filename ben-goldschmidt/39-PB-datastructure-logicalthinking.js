// # Logical Thinking III

// Write pseudo-code for the following exercises on pen and paper.

console.log("")
console.log("QUESTION 1. Lowest to Highest")

// Given an array of numbers from 1-9: 
// ```javascript
// [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
// ```
// Sort the array from lowest value to highest.

// INPUT        numbersArray1
// ALGORITHM    if num1 is higher than num2 then    return index +1 
//              if num2 is higher than num1 then    return index -1
//              else do nothing i.e.                return index 0
// OUTPUT       numbersArray1 ---> ordered lowest to highest


let array1 = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
console.log(array1, "GIVEN");
array1.sort(function (num1, num2) {
    // using ternary statement
    return num1 == num2 ? 0 : num1 > num2 ? 1 : -1;
    // 1 or -1 = index order change

});
console.log(array1, "RETURNED");



console.log("")
console.log("QUESTION 2. Alphabetical Order")

// Given an array of names:
// ```javascript
// ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
// ```
// Sort the array based on alphabetical order from `a → z`. 

// INPUT        namesArray1
// ALGORITHM    change everything to array to either lower or uppercase
//              if name1 is higher than name2 then    return index +1 
//              if name2 is higher than name1 then    return index -1
//              else do nothing i.e.                  return index 0
// OUTPUT       namesArray1 ---> ordered alphabetically


let namesArray1 = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
console.log(namesArray1, "GIVEN");
namesArray1.sort(function (name1, name2) {
    let x = name1.toUpperCase(),
        y = name2.toUpperCase();

    // Using if statements
    if (x > y) return 1; // index order change
    if (y > x) return -1;
    return 0;
});
console.log(namesArray1, "RETURNED");

// **Bonuses**
// 1. Once you've written down your pen and paper solutions, create functions to solve the problems above with javascript. 

// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings. 



console.log("")
console.log("QUESTION 3. BONUS element length sort")

let namesArray2 = ["Pangolasious", "Ben", "Alexa", "Timothy", "Alexandra", "John"];
console.log(namesArray2, "GIVEN")
namesArray2.sort(function (length1, length2) {
    // lowest length to highest length
    return length1.length - length2.length
})
console.log(namesArray2, "RETURNED")