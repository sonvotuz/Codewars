/* Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck! */

// PREP
// Parameter: array
// Return: array
// Example: [3,4,4,3,6,3] ==> [4,6,3]

// Answer
function solve(arr) {
  // reverse the array to get the right most occurrence of element
  return (
    arr
      .reverse()
      // use filter to filter out the duplicated element
      .filter((el, i, arrayN) => arrayN.indexOf(el) === i)
      // reverse back the orriginal order
      .reverse()
  );
}

solve([3, 4, 4, 3, 6, 3]);
