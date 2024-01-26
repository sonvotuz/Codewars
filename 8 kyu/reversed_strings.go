/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

// PREP
// Parameter: string
// Return: string
// Example: 'world' ==> 'dlrow'

// Answer
package reversedStrings

func reversedStrings(word string) string {
	var result string
    for _, char := range word {
      result = string(char) + result
    }
    return result
}