/* In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents */

// PREP
// Parameter: number, number
// Return: number
// Example: 5, 1.23 ==> 5.65

// Answer
function fuelPrice(litres, pricePerLitre) {
  // calculate the discount price per litre
  const discount =
    Math.floor(litres / 2) * 5 > 25 ? 25 : Math.floor(litres / 2) * 5;
  // calculate the total amount, rounded to 2 decimal places then convert it into number
  return Number((litres * (pricePerLitre - discount / 100)).toFixed(2));
  //   return Math.round(litres * (pricePerLitre - discount / 100) * 100) / 100;
}

fuelPrice(5, 1.23);
