/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */

// PREP
// Parameter: string
// Return: string
// Example: '3♠' => 'spades'

// Answer
function defineSuit(card) {
  // declare cards object
  const cards = { "♣": "clubs", "♦": "diamonds", "♥": "hearts", "♠": "spades" };
  // use for loop to check card suit
  for (const key in cards) {
    if (card.includes(key)) return cards[key];
  }
}

defineSuit("3♠");
