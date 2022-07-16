/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

// PREP
// Parameter: array
// Return: string
// Example: [1,3,6] => 'yes, ascending'

// Answer
function isSortedAndHow(array) {
  // check whether the array is in ascending or descending order
  if (array[0] > array[1]) {
    // loop through the array to check if it is really in descending order
    for (let i = 1; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return "no";
    }
    return "yes, descending";
  } else {
    // loop through the array to check if it is really in ascending order
    for (let i = 1; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return "no";
    }
    return "yes, ascending";
  }
}

isSortedAndHow([15, 7, 3, -8]);
