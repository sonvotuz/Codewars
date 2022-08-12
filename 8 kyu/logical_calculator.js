/* Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False). */

// PREP
// Parameter: array, string
// Return: boolean
// Example: [true, true], 'AND' ==> true

// Answer
function logicalCalc(array, op) {
  op = op.toLowerCase()
  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    switch (op) {
      case "and":
        result = result && array[i]
        break
      case "or":
        result = result || array[i]
        break
      case "xor":
        result = result ^ array[i]
        break
    }
  }
  return result ? true : false
}

logicalCalc([true, true, true, false], "OR")
