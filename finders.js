
/*-- PSEUDOCODE --*/

// pull elements of arg array 
// filter to new array of arguments that meet parameter (2nd argument)
// return first element of new array only.

/*-- ASSIGNMENT --*/

Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Here are some helpful links:

Array.prototype.filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.