/* Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] */

// PREP
// Parameter: string
// Return: array
// Example: "abracadabra" ==> [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// Answer
const orderedCount = function (text) {
  const occurence = {}
  for (let i = 0; i < text.length; i++) {
    if (occurence["a" + text[i]]) occurence["a" + text[i]]++
    else occurence["a" + text[i]] = 1
  }
  const result = []
  for (const [key, value] of Object.entries(occurence)) {
    result.push([key.substring(1), value])
  }
  return result
}

// Alternative way
// const orderedCount = (str) =>
//   [...new Set([...str])].map((char) => [char, str.split(char).length - 1])

orderedCount("1233312")
