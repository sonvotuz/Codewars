/* Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level */

// PREP
// Parameter: array
// Return: string with comma delimited elements
// Example: ["h","e","l","l","o"] => "h,e,l,l,o"

function printArray(array) {
  // use join() method to concatenate each elements of the array
  return array.join(",");
  // or array.join(); without ","
}

printArray(["h", "e", "l", "l", "o"]);
