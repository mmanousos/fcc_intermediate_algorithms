

/* satisifes all parts of assignment */ 

function addTogether() {
 if (typeof arguments[0] != 'number') { // check that the first argument is a number
  return undefined; // otherwise return undefined
 } else if ((arguments[1] != null) && (typeof arguments[1] == 'number')) { // check that there is more than one argument & that argument is a number
  var sum = arguments[0] + arguments[1];	// if it is, add the two values together
  return sum; // return the sum
 } else if (arguments[1] == null) { // if there is no second argument
  var value = arguments[0]; // set the single argument to a variable 'value'
  return function sumOnce(arg) { // create a new function that looks for a single argument
   if (typeof arg != 'number') { // check if that argument is also a number
    return undefined; // if no, return undefined
   } else { // if it is
    var summed = value + arg; // add 'value' to the argument
    return summed; // return the sum
   }
  }; 
 } 
}


addTogether(2,3);


/* satisfies first part of assignment */

function addTogether() {
  if ((arguments[1] != null) && (typeof arguments[1] == 'number')) {
	var sum = arguments[0] + arguments[1];	
	return sum;
  } 
}

addTogether(2,3);


/*-- ASSIGNMENT --*/

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.


Here are some helpful links: 

Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
Arguments object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.