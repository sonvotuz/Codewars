/* Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68] */

// PREP
// Parameter: array of numbers
// Return: array of numbers
// Examples: [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

function multipleOfIndex(array) {
  // use filter method to filter out the element
  let filteredArray = array.filter((el, i) => el % i === 0);
  // return new array
  return filteredArray;
}

multipleOfIndex([
  -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68,
]);
multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35]);
