
function uniteUnique(arr) {
 var arrNew = [];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arrNew.indexOf(arr[i]) == -1) {
     arrNew.push(arr[i]);
    }
  }  
    
 return arrNew;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/*-- PSEUDOCODE --*/

/* example of reduce() method
 var largest = arr.reduce(function(a,b) {
    return Math.max(a,b);
 });
*/

/* more info about reduce() method 
Returns a new array, does not modify the original source. 
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. Executes for each element in the array and an initial value (the accumulator “result/total/value”).
E.g. var arr = [1, 2, 3, 4];
var total = arr.reduce(function(sum, value) {
  return sum + value;
}, 0);
console.log(total); // 10
// Takes all the values in the original array and reduces them to a final, single value based on the logic that we pass in the callback function. 0 stands for the initial value of the sum.
*/ 


// create new empty array to return
// cycle through arrays of argument
// check if element exists in new array
    // if no, push element array 

// *is this even possible?*
// pull all values into new array (cycle through all values in all arrays into single array)
// remove any duplicates (reduce?)
// push to new array (if reduce, inherently creates new array)
// return



/*-- ASSIGNMENT --*/

Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.


Here are some helpful links:

Arguments object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Array.prototype.reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].