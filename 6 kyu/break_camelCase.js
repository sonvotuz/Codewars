/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// PREP
// Parameter: string
// Return: string
// Example: 'camelCasing' ==> 'camel Casing'

// Answer
function solution(string) {
  let result = "";
  let temp = 0;
  // generate array from string and use foreach loop to check
  string.split("").forEach((char, i) => {
    // check to see any uppercase letter
    if (char.toUpperCase() === char) {
      result += string.slice(temp, i) + " ";
      temp = i;
    }
  });
  // add up the last word to the result
  result += string.slice(temp);
  return result;
}

console.log(solution("camelCasingTest"));
