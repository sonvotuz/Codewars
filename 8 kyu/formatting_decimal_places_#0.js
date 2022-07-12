/* Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34 */

// PREP
// Parameter: number
// Return: number that is rounded to two decimal places
// Example: 5.5589=> 5.56

// Answer
function twoDecimalPlaces(n) {
  return +Number(n).toFixed(2);
  // alternative way: +parseFloat(n).toFixed(2);
  // Number(n.toFixed(2));
}

twoDecimalPlaces(4.653725356);
