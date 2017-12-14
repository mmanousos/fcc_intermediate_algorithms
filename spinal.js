
function spinalCase(str) {
 var kebab = str.replace(/[\s_]/g, '-'); 
 str = kebab.toLowerCase();    
 return str;
}

spinalCase('This Is Spinal Tap');


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