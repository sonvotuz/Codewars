/* Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid. */

// PREP
// Parameter: number
// Return: number
// Example: 1234 ==> 4

// Answer
function digits(n) {
  //   if (n === 0) return 1;
  //   let count = 0;
  //   while (n >= 1) {
  //     n /= 10;
  //     count++;
  //   }
  //   return count;
  return String(n).length;
}

digits(1234);
