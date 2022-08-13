/* Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters */

// PREP
// Parameter: string
// Return: string
// Example: 'camelsHaveThreeHumps' ==> 'camels-have-three-humps'

// Answer
function kebabize(str) {
  return str
    .split("")
    .map((char, i) => {
      if (char == Number(char)) return
      else if (char === char.toLowerCase()) return char
      if (i === 0 || (str[i - 1] == Number(str[i - 1]) && i - 1 === 0))
        return char.toLowerCase()
      return `-${char.toLowerCase()}`
    })
    .join("")
}

console.log(kebabize("myCamelCasedString"))
console.log(kebabize("myCamelHas3Humps"))
console.log(kebabize("Aqi0q"))
console.log(kebabize("G45cm"))
console.log(kebabize("2G45cm"))
