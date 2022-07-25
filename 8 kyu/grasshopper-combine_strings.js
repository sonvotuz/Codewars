/* Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens' */

// PREP
// Parameter: 2 strings
// Return: string
// Example: 'James', 'Stevens' ==> 'James Stevens'

// Answer
const combineNames = (first, last) => {
  return `${first} ${last}`;
};

combineNames("James", "Stevens");
