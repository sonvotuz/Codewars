/* You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters. */

// PREP
// Parameter: password string
// Return: boolean
// Example: "JHD5FJ53" => false

// Answer
function validate(password) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  // Check whether password is six characters long
  if (password.length >= 6) {
    // check whether password only contains number and character
    const alphanumericCheck = password
      .split("")
      .some((el) => !characters.includes(el) && !numbers.includes(el));
    if (!alphanumericCheck) {
      // check whether password contains a lower case letter
      const lowercaseCheck = password
        .split("")
        .some((el) => el === el.toLowerCase() && characters.includes(el));
      if (lowercaseCheck) {
        // check whether password contains an upper case letter
        const uppercaseCheck = password
          .split("")
          .some((el) => el === el.toUpperCase() && characters.includes(el));
        if (uppercaseCheck) {
          // check whether password contains a number
          return password.split("").some((el) => numbers.includes(el));
        }
      }
    }
  }
  return false;
}

validate("abc");
validate("djI38D55");
