/* My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you. */

// PREP
// Parameter: list of ages integer
// Result: predicted age integer
// Examples: 65, 60, 75, 55, 60, 63, 64, 45 => 86

// Answer
function predictAge(...ages) {
  // multiply each number by itself with map() method
  ages = ages.map((el) => Math.pow(el, 2));
  // add all together
  let predictedAge = ages.reduce((total, el) => total + el, 0);
  // square root of the result
  predictedAge = Math.sqrt(predictedAge);
  // divide by two
  predictedAge /= 2;
  // round down result & return
  return Math.floor(predictedAge);
}

predictAge(65, 60, 75, 55, 60, 63, 64, 45);
