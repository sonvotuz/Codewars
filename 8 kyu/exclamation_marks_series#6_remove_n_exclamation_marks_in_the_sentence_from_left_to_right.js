/* Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi" */

// PREP
// Parameter
// Return
// Example

// Answer
function remove(s, n) {
  let result = "";
  let count = 0;
  // loop through each element and check the conditions
  [...s].some((el) => {
    if (count > n) return true;
    else if (el === "!" && count < n) count++;
    else result += el;
  });
  return result;
}

// another way
// function remove(s, n) {
//   return s
//     .split("")
//     .filter((char) => char !== "!" || n-- <= 0)
//     .join("");
// }

remove("!!!Hi !!hi!!! !hi", 100);
