/* Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s) */

// PREP
// Parameter: string
// Return: number
// Example: "hell5o wor6ld" -> 56

// Answer
function getNumberFromString(s) {
  const nums = "0123456789";
  // generate array from string and filter out all non-digit characters
  return Number(
    s
      .split("")
      .filter((char) => nums.includes(char))
      .join("")
  );
}

getNumberFromString("hell5o wor6ld");
