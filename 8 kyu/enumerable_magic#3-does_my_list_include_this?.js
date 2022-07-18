/* Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false. */

// PREP
// Parameter: array, element (number/string)
// Return: boolean
// Example: [1,2,3], 2 => true

// Answer
function include(arr, item) {
  return arr.includes(item);
}

include([1, 2, 3, 4], 3);
