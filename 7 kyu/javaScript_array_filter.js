/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

// PREP
// Parameter: array of numbers
// Return: new array with filtered numbers
// Example: [2,4,5,6] => [2,4,6]

// Answer
function getEvenNumbers(numbersArray) {
  // use filter() method to filter the odd number
  return numbersArray.filter((el) => el % 2 === 0);
}

getEvenNumbers([12, 14, 15]);
