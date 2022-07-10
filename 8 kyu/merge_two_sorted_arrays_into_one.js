/* You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12] */

// PREP
// Parameter: two arrays
// Return: one merged array
// Example: [1,2,6], [2,3,10] => [1,2,3,6,10]

// Answer
function mergeArrays(arr1, arr2) {
  // use spread operator to create new array contains all elements form arr1 and arr2
  return (
    [...arr1, ...arr2]
      // use filter() to remove duplicate element
      .filter((el, i, arr) => i === arr.lastIndexOf(el))
      // use sort to sort the array in ascending order
      .sort((a, b) => a - b)
  );
}

mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
