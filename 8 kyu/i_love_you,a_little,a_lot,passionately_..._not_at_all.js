/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0. */

// PREP
// Parameter: number
// Return: string
// Example: 3 => 'a lot'

// Answer
function howMuchILoveYou(nbPetals) {
  const saying = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return saying[(nbPetals - 1) % 6];
}

howMuchILoveYou(7);
