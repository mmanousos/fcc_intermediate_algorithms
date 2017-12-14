
function convertHTML(str) {
 var Char = { // creates object to define replacement values
  '"' : '&quot;', 
  "'": '&apos;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&rt;'
 };
   
 var specialChar = str.match(/["'&<>]/g); // searches for instances of characters anywhere in the string & saves them into an array
 // var newStr = ''; // new empty string
 for (var i = 0; i< specialChar.length; i++) { // cycles through the array of character instances
  var getChar = specialChar[i]; // gets the character
  var replaceChar = Char[getChar]; // finds that character in the Char object and saves its value to a variable
  // newStr += replaceChar; // adds the variable to the new string
  var newStr = str.replace(specialChar[i], replaceChar); // replaces the original character
 }
  return newStr;
}

convertHTML("Dolce & Gabbana");

/* -- Documentation --*/ 
Jon Duckett's book: replace() (String object) 128-130, 406-7, 562-3
     
     
In this example, all occurrences of capital letters in the string are converted to lower case, and a hyphen is inserted just before the match location. The important thing here is that additional operations are needed on the matched item before it is given back as a replacement.

The replacement function accepts the matched snippet as its parameter, and uses it to transform the case and concatenate the hyphen before returning.

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
Given styleHyphenFormat('borderTop'), this returns 'border-top'.

Because we want to further transform the result of the match before the final substitution is made, we must use a function. This forces the evaluation of the match prior to the toLowerCase() method. If we had tried to do this using the match without a function, the toLowerCase() would have no effect.




/*-- PSEUDOCODE --*/

// create object with HTML entity pairs for given special characters
// search for said characters in argument string (using RegEx)
// combine with 'replace' method to insert appropriate HTML entity code
// return converted string


/*-- ASSIGNMENT --*/

Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Here are some helpful links:

RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
HTML Entities: http://dev.w3.org/html5/html-author/charref
String.prototype.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
convertHTML("Shindler's List") should return Shindler&apos;s List.
convertHTML("<>") should return &lt;&gt;.
convertHTML("abc") should return abc.