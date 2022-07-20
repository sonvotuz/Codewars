/* Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  [] */

// PREP
// Parameter: array of numbers
// Return: new array with odd numbers
// Example: [1,2,3,4,5] => [1,3,5]

// Answer
function odds(values) {
  // arrow it
  return values.filter((numb) => {
    if (numb % 2 !== 0) return numb;
  });
}

odds([1, 2, 3, 4, 5]);
