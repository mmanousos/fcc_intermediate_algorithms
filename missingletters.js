/* A solution */
/* would be more refined by simply returning directly from within function & returning 'undefined' otherwise */

function fearNotLetter(str) {
  for (var i = 0; i<str.length-1; i++) {
    var char = str.charCodeAt(i);
    var check = str.charCodeAt(i+1);
    if (check > char+1) {
      str = String.fromCharCode(char+1);
    } 
  } 
  if (str.length > 1) {
      str = undefined;
    }
    
  return str;
}

fearNotLetter("abcdefghjklmno");



/* refactored solution after looking at fcc solution */ 
/* function fearNotLetter(str) {
  for (var i = 0; i<str.length-1; i++) {
    var char = str.charCodeAt(i);
    if (char+1 !== str.charCodeAt(i+1)) {
      return String.fromCharCode(char+1);
    } 
  } 
  return undefined;
}

fearNotLetter("abc");
*/ 

/*-- PSEUDOCODE --*/
// get first character in string (set to variable)
// get character code of this variable
// get & check character code of following character 
    // if it is only larger by 1, set following character as variable & move on to subsequent characters
    // if not, add 1 to character code & return the corresponding character. 

/*-- ASSIGNMENT --*/
/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Here are some helpful links:

String.prototype.charCodeAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
String.fromCharCode(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/