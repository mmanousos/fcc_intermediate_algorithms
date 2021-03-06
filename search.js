/* refactored solution */

function myReplace(str, before, after) {
  var beforeFirst = before.charAt(0);
  var afterFirst = after.charAt(0);
    
 function checkCap() {  
    if (afterFirst == afterFirst.toLowerCase()) {
      var afterFirstCap = afterFirst.toUpperCase();
      var afterNew = after.replace(afterFirst, afterFirstCap);
      after = afterNew;
      return after; 
    }    
 }
    
 if (beforeFirst == beforeFirst.toUpperCase()) {
    checkCap();
 }
    
 str = str.replace(before, after);
 return str;

}

myReplace("His name is Tom", "Tom", "john");




/* first draft of solution */
/*
function myReplace(str, before, after) {
  var beforeFirst = before.charAt(0);
  var afterFirst = after.charAt(0);
  if (beforeFirst == beforeFirst.toUpperCase()) {
    if (afterFirst == afterFirst.toLowerCase()) {
      var afterFirstCap = afterFirst.toUpperCase();
      var afterNew = after.replace(afterFirst, afterFirstCap);
      var newStr = str.replace(before, afterNew);
      return newStr;
   }
  } else {
    
  var newStr = str.replace(before, after);
  return newStr;
  } 
  
  
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
*/

/*-- PSEUDOCODE --*/

// check case of first letter of first argument
    // if capitalized, check case of first letter of second argument
        // if not capitalized, capitalize
        // else move on to next step
    // else move on to next step
// search string for first argument
// replace with second argument (originally provided or newly capitalized)


/*-- ASSIGNMENT --*/
/*
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


Here are some helpful links:

Array.prototype.splice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
String.prototype.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Array.prototype.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/