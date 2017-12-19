
function dropElements(arr, func) {  
 var filtered = arr.filter(func);
 var first = arr[0];  
 if (filtered[0] === first) {
   return arr;
 } else if (filtered == false) {
   return filtered;
 } else {
   var num = arr.indexOf(filtered[0]);
   var returnArray = arr.slice(num);
   return returnArray;
 }
}
  dropElements([1, 2, 3, 4], function(n) {return n > 5;});


/* revised pseudocode that worked for my solution*/
/* Logic is not very dissimilar to that used in the fcc intermediate solution (but does not use ES6 arrow functions or findIndex() function)*/ 

// filter array by logic of arg func
// set first value of arg arr to variable
  // if first value of arg arr === to first value of filtered array, return entire array
  // if filtered array is empty, return filtered array (empty array)
  // otherwise, get first value of filtered array
    // find it's position in the original array, slice from there & return





/*fcc advanced solution is the cleanest version */

function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

// I forgot I could pass a new argument into the argument function which makes this solution a lot more simple.

/*-- PSEUDOCODE --*/



/* revised pseudocode */

// create copy and check first digit against logic of function
  // if true, return entire array
  // if false, filter array by logic
  // get first value of filtered array
  // find it's position in the original array and slice from there


/* original logic */
// check first element of argument array against logic of argument function
    // if true, return full array
    // if not true, remove (shift) first & move on to next element to check
// return remaining array as soon as first element is true

/*-- ASSIGNMENT --*/

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Here are some helpful links:

Arguments object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Array.prototype.shift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Array.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].