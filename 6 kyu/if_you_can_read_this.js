/* Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace */

/* NATO
{ a: 'Alfa',
  n: 'November',
  b: 'Bravo',
  o: 'Oscar',
  c: 'Charlie',
  p: 'Papa',
  d: 'Delta',
  q: 'Quebec',
  e: 'Echo',
  r: 'Romeo',
  f: 'Foxtrot',
  s: 'Sierra',
  g: 'Golf',
  t: 'Tango',
  h: 'Hotel',
  u: 'Uniform',
  i: 'India',
  v: 'Victor',
  j: 'Juliett',
  w: 'Whiskey',
  k: 'Kilo',
  x: 'Xray',
  l: 'Lima',
  y: 'Yankee',
  m: 'Mike',
  z: 'Zulu' } */

// PREP
// Parameter: string
// Return: string
// Example: 'If you can read' ==> "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"

// Answer
function to_nato(words) {
  // create variable to store all punctuations
  const punctuation = ",.!?";
  // use map method to check each character and return the correct code
  return words
    .split("")
    .map((charact) => {
      const char = charact.toLowerCase();
      if (punctuation.includes(char)) return `${char} `;
      if (char === " ") return;
      if (char === "-") return;
      return `${NATO[char]} `;
    })
    .join("")
    .trim();
}

to_nato("If you can read");
