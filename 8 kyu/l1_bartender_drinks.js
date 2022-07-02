/* Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars". */

// PREP
// Parameter: string
// Return: the outputs above
// Example: Jabroni => Patron Tequila

function getDrinkByProfession(param) {
  // drinks with key value pair
  const drinks = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };

  // check if the input is in the drinks object, if not return beer
  if (!drinks.hasOwnProperty(param.toLowerCase())) {
    return "Beer";
  } else {
    return drinks[param.toLowerCase()];
  }
}
