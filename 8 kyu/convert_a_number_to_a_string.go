/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// PREP
// Parameter: int
// Return: string
// Example: 123 --> "123"

// Answer

package kata

import "fmt"

func NumberToString(n int) string {
  return fmt.Sprintf("%v", n)
}

// OR alternative
// import "strconv"
// return strconv.Itoa(n)