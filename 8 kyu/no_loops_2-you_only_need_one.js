/* *** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.*/

// PREP
// Parameter: an array and a value
// Return: boolean
// Example: [1,2,3], 3 => true

// Answer
function check(a, x) {
  //   return a.some((el) => el === x);
  // use includes() method to check
  return a.includes(x);
}

check(["what", "a", "great", "kata"], "kat");
