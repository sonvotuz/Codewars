/* You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun! */

// PREP
// Parameter: array
// Return: number
// Example: [1,2,3,4] ==> 3

// Answer
function maxDiff(list) {
  // use sort to sort array in ascending order
  list.sort((a, b) => a - b);
  // return the maximum or 0 in case the empty array is passed to the function
  return list[list.length - 1] - list[0] || 0;
}

maxDiff([0, 1, 2, 3, 4, 5, 6]);
