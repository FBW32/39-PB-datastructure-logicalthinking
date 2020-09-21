//# Logical Thinking III
//#### 1. Lowest to Highest
function lowestToHighest(arr) {
  arr.sort();
  return arr;
}
console.log(lowestToHighest([4, 2, 5, 3, 9, 7, 1, 8, 2, 6]));

//#### 2. Alphabetical Order
alpOrder = (arr) => arr.sort();
console.log(alpOrder(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));

//2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.
let lengthOrder = (arr) => {
  let sortMethod = (a, b) => {
    if (a.length < b.length) {
      return 1;
    } else {
      return -1;
    }
  };
  arr.sort(sortMethod);
  return arr;
};
console.log(lengthOrder(["This", "is", "largest", "wordinthisarray"]));
