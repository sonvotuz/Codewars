/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

 */

// PREP
// Parameter: array
// Return: reversed array
// Example: [1,2,3] ==> [3,2,1]

// Answer
reverse = function (array) {
  // use for loop to swap elements
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[array.length - i - 1];
    array[array.length - i - 1] = array[i];
    array[i] = temp;
  }
  return array;
};

reverse([1, 2, 3]);
