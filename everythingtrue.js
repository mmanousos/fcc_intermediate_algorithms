/* final draft solution */

function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) { // cycle through entries in object
  if (collection[i].hasOwnProperty(pre) !== true) { // if the object doesn't contain the property key defined in arguments[2]
    return false; // return false
   } else { // otherwise
     var check = collection[i][pre]; // evaluate the value of the property
     if ((check != true) && (typeof check == 'string') && (check.length > 0))  { // if it does not evaluate true and is a string, but not an empty string
       var checkConvert = new Boolean([check]); // convert it to a boolean
          if (checkConvert == true) { // then if it's true 
              continue;     // continue to next element in object
        } 
     } else if (check == true) { // if check is true
         continue;  // continue loop to next element in object
     } else  { // otherwise, if it's not a true and not a string
      return false; // return false
    
   } 
  }
  }
  return true; // if all properties were true, return true
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");


/* fcc intermediate solution */
/* very cleanly checks both that the element has the property and that the value of the property is true*/ 

function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/* fcc advanced solution */ 
/* infinitely more streamlined but uses notation I'm not familiar with */

function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



/*-- PSEUDOCODE --*/

check array to see if each 1) contains the specified property key, and then 2) if the value of that property is truthy. 


/*-- ASSIGNMENT --*/

Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
truthCheck([{"single": "yes"}], "single") should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false