/* We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input: > 6
Output:
0+1+2+3+4+5+6 = 21

Input: > -15
Output:
-15<0

Input:
> 0
Output:
0=0  */

// PREP
// Parameter: number
// Return: string
// Example: -7 => -7<0, 0 => 0=0, 3 => 0+1+2+3 = 6

// Answer
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    // check if the count is less than 0
    if (count < 0) return `${count}<0`;
    // check if the count equal to 0
    if (count === 0) return "0=0";
    let result = "0";
    let total = 0;
    // use for loop to generate the result
    for (let i = 1; i <= count; i++) {
      result += `+${i}`;
      total += i;
    }
    result += ` = ${total}`;
    return result;
  };

  return SequenceSum;
})();
