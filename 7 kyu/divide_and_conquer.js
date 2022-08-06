/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number. */

// PREP
// Parameter: array of number and string
// Return: number
// Example: [9, 3, "7", "3"] ==> 2

// Answer
function divCon(x) {
  return x.reduce(
    (total, el) => (typeof el === "string" ? total - +el : total + el),
    0
  );
}

divCon([9, 3, "7", "3"]);
