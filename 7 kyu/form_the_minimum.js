/* Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications */

// PREP
// Parameter: array of positive numbers
// Return: number
// Example: [1,3,1] ==> 13

// Answer
function minValue(values) {
  // get set of unique numbers from values
  const setOfNums = new Set(values);
  // generate array from set above and sort the array in ascending order
  const arr = Array.from(setOfNums).sort((a, b) => a - b);
  // return the minimum number
  return Number(arr.join(""));
}

minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]);
