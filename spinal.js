
function spinalCase(str) {
 var capReplace = str.replace(/([A-Z])/g, ' $1').trim(); // finds capitalized letters and adds a space in front of them, retaining the original letter, and trims off extra at the front or the back
 var kebab = capReplace.replace(/[_\s]+/g, '-'); // replaces underscores or spaces, even if there are more than 1, with dashes
 str = kebab.toLowerCase();    // converts entire string to lowercase
 return str;
}

spinalCase("AllTheVery-small Things");


/*-- PSEUDOCODE --*/

// use RegEx to search for any spaces, underscores, or capital letters
    // replace spaces or underscores with a dash
    // if capital letter is not preceded by a space, add a dash
// convert all to lowercase 
    

/*-- ASSIGNMENT --*/

Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
(Also known as 'kebab' case.)

Here are some helpful links:

RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
String.prototype.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".