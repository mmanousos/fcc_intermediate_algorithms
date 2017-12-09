/* cycles through source keys of each collection object before returning them. But only verifies value of final key before returning it. Need an additional check first. */

function whatIsInAName(collection, source) {
 var returnArray = [];
 
var getKeys = Object.keys(source); // creates array of keys for given object  

for (var k = 0; k < collection.length; k++) { 
 var check = collection[k];
 console.log(check);
// var tempArray = []; 
 for (var i = 0; i < getKeys.length; i++) {
  var keyName = getKeys[i]; // gets name of key
  var keyValue = source[keyName]; // gets value of key
    var doesContain = check.hasOwnProperty(keyName);
    if (doesContain == true) {
      var hold = check;
    } else {
      var hold = null;
    }
 } if (hold != null)
      var ogValue = check[keyName];
      console.log(ogValue);
      if (ogValue == keyValue) {
        returnArray.push(hold);
    }
}
 return returnArray;

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });


/* Checks if either value is present, doesn't exclude by checking both before returning. */

/*function whatIsInAName(collection, source) {
 var returnArray = [];
 
 var getKeys = Object.keys(source); // creates array of keys for given object 
 for (var i = 0; i < getKeys.length; i++) {
  var keyName = getKeys[i]; // gets name of key
  var keyValue = source[keyName]; // gets value of key

  for (var j = 0; j < collection.length; j++) { 
   var doesContain = collection[j].hasOwnProperty(keyName); // checks true/false if that key exists in the passed array of objects
  if (doesContain == true)  {
   var ogValue = collection[j][keyName]; 
    if (ogValue == keyValue) {
        returnArray.push(collection[j]);
    }
  }
 } 
}
 return returnArray;

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });






/*-- PSEUDOCODE --*/

// create new array
// cycle through arrays of first argument to check if they have the key/value properties specifed with second argument. 
    // check if property (key) exists
     // if yes, get value
     // compare value against value of parameter 
        // if yes, pull that entire array to new Array    
        // return new array
 
 


/*-- ASSIGNMENT --*/
/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Helpful links:

Global Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Object.prototype.hasOwnProperty(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Object.keys(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
*/