/* Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" */

// PREP
// Parameter: string
// Return: encrypted string
// Example: 'Hello' => '72olle'

// Answer
var encryptThis = function (text) {
  // split each word into an array, then use map() method to loop through each word
  return text
    .split(" ")
    .map((word) => {
      // convert string to array of letter
      word = Array.from(word);
      // for each word, we convert the first letter to its ASCII code
      word[0] = word[0].charCodeAt(0);
      // switch the second letter to the last letter
      const temp = word[1];
      word[1] = word[word.length - 1];
      word[word.length - 1] = temp;
      // join it back and return
      return word.join("");
    })
    .join(" ");
};

encryptThis("Hello");
