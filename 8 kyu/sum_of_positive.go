/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// PREP
// Parameter: []int
// Return: int
// Example: [1,-2,10] => 11

// Answer
package kata

func PositiveSum(numbers []int) int {
  var result int = 0
  for _, val := range numbers {
    if val > 0 {
      result += val
    }
  }
  return result
}
