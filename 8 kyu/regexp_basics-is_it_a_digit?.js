/* Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
 */

// PREP
// Parameter: string
// Return: boolean
// Example: '7' ==> true

// Answer
String.prototype.digit = function () {
  const digits = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 };
  return this.length === 1 && digits.hasOwnProperty(this);
};
