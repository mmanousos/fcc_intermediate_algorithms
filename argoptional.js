

/* satisifes all parts of assignment */ 

function addTogether() {
 if (typeof arguments[0] != 'number') {
  return undefined;
 } else if ((arguments[1] != null) && (typeof arguments[1] == 'number')) {
  var sum = arguments[0] + arguments[1];	
  return sum;
 } else if (arguments[1] == null) {
  var value = arguments[0];
  return function sumOnce(arg) {
   if (typeof arg != 'number') {
    return undefined;
   } else {
    var summed = value + arg;
    return summed;
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