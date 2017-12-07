function diffArray(arr1, arr2) {
  var newArr = [];
  
  for (var i = 0; i < arr1.length; i++) {
    var index1 = arr1[i]; 
    if (arr2.indexOf(index1) == -1) {
      newArr.push(index1); 
    }  
  }

  for (var j = 0; j < arr2.length; j++) {
    var index2 = arr2[j]; 
    if (arr1.indexOf(index2) == -1) {
      newArr.push(index2); 
    }  
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




/*-- PSEUDOCODE --*/

// create new empty array to hold return values
// loop through first array 
    // assign first value to variable
// use "indexOf" to find value in array. 
// check variable from first array for matches
        // if yes, cycle to next value in first array (if value is >= 0; -1 means not present in array)
        // if no, use "slice" to get just that value?
        // or push value to new array 
        // reassign variable to next value in first array

// repeat for second array checking against first

// ("filter" could prevent need for "push" method)
// (write using "push" first, then refactor using "filter"?)

    // return new array


/*-- ASSIGNMENT --*/
/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Here are some helpful links:

Comparison Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
Array.prototype.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Array.prototype.filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Array.prototype.indexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.prototype.concat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/