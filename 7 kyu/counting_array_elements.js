/* Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1} */

// PREP
// Parameter: array
// Return: object
// Example: ['james', 'james', 'john'] ==> {'james': 2, 'john': 1}

// Answer
function count(array) {
  const result = {};
  // loop through an array and check
  array.forEach((el) =>
    result.hasOwnProperty(el) ? result[el]++ : (result[el] = 1)
  );
  return result;
}
