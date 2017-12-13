/* My basic solution [70 steps] */

function uniteUnique(arr) {
 var arrNew = [];
  for (var i = 0; i < arguments.length; i++) {
    var currentArr = arguments[i];
    for (var j = 0; j < currentArr.length; j++) {
      console.log(currentArr[j]);
    if (arrNew.indexOf(currentArr[j]) == -1) {
     arrNew.push(currentArr[j]);
    }
   }
  }  
  console.log(arrNew);  
 return arrNew;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);


/*-- PSEUDOCODE --*/

// create new empty array to return
// cycle through arrays of argument
// check if element exists in new array
    // if no, push element to array 


/* example of reduce() method */ 
 var largest = arr.reduce(function(a,b) {
    return Math.max(a,b);
 });

/* more info about reduce() method */ 
Returns a new array, does not modify the original source. 
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. Executes for each element in the array and an initial value (the accumulator “result/total/value”).
E.g. var arr = [1, 2, 3, 4];
var total = arr.reduce(function(sum, value) {
  return sum + value;
}, 0);
console.log(total); // 10
// Takes all the values in the original array and reduces them to a final, single value based on the logic that we pass in the callback function. 0 stands for the initial value of the sum.


// *Is this even possible?*
// pull all values into new array (cycle through all values in all arrays into single array)
// remove any duplicates (reduce?)
// push to new array (if reduce, inherently creates new array)
// return

/* it IS possible as shown with the fcc advanced solution [43 steps] */ 

function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){ 
    concatArr = concatArr.concat(arguments[i]); i++; // cycles through to merge all arrays in argument object into single array
  } // alternately could use 'arr = [].concat(...arguments);' to create new array and flatten arguments into single array in one step. 
  uniqueArray = concatArr.filter(function(item, pos) { // filters array by whether the position of the given array element matches 'indexOf' that element - basically checking if the location of the first instance of the value matches the current location of the value. 
    return concatArr.indexOf(item) == pos; // if it does match, that value is added to the array to be returned. 
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); 


/* fcc intermediate solution (using reduce method) [34 steps] */

// fastest solution, but not great because it assumes that the first array will only contain unique values. If there are duplicate values within the first array, this solution will fail.

function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

// test here
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); 



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