/* Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '``` */

// PREP
// Parameter: string, string
// Return: string
// Example: 'Animals', 'Good' ==> 'Animals are Good'

// Answer
var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

TempleStrings("Animals", "Good");
