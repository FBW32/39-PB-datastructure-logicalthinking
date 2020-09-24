//#### 1. Lowest to Highest
//Given an array of numbers from 1-9: 
// Sort the array from lowest value to highest.

function lowestHighest(arrNum) {

 let numRng = arrNum.sort((num1,num2) =>num1 - num2)
         console.log(arrNum);
}

lowestHighest([4, 2, 5, 3, 9, 7, 1, 8, 2, 6]);  
// [ 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]

// #### 2. Alphabetical Order
// Given an array of names:

function arrangeAtoZ(arrWord) {
    console.log(arrWord.sort());
}

arrangeAtoZ(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]) 
// [ 'Ale', 'Bleda', 'Fran', 'Hadi', 'Jenna', 'Leon' ]
