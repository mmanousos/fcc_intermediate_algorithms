/* slightly faster because it filters the larger integers first */ 

function smallestCommons(arr) {
   //Determine smallest number in argument
  var smallest = arr.reduce(function(a,b) {
    return Math.min(a,b);
  });
  
    // Determine largest number in array
  var largest = arr.reduce(function(a,b) {
    return Math.max(a,b);
  });
  
   // loop through to get all numbers between smallest and largest and push to new array
  var newArray = []; 
  for (var i = smallest+1; i <= largest-1; i++) {
    newArray.push(i);
  } console.log(newArray);
 
  // Create array of common multiples
  var array = [];
  for (var j = 1; j<100; j++) {
    if ((j*smallest) % largest === 0) {
    array.push(j*smallest);  
    }
  }
  console.log(array)
  
  function filterArray() {
   var k = (newArray.length - 1);       
   for (k; k >= 0; k--) {
     var m = newArray[k];
     var arrFiltered = array.filter(function(el) {
       return (el % m === 0);
     }); 
     array = arrFiltered;
    } return array;
   } 
   filterArray();
  
  return array[0];
}

smallestCommons([1,4]);

/* functional solution but likely not the most elegant */


function smallestCommons(arr) {
   //Determine smallest number in argument
  var smallest = arr.reduce(function(a,b) {
    return Math.min(a,b);
  });
  
    // Determine largest number in array
  var largest = arr.reduce(function(a,b) {
    return Math.max(a,b);
  });
  
   // loop through to get all numbers between smallest and largest and push to new array
  var newArray = []; 
  for (var i = smallest+1; i <= largest-1; i++) {
    newArray.push(i);
  } console.log(newArray);
 
  // Create array of common multiples
  var array = [];
  for (var j = 1; j<8000000; j++) {
    if ((j*smallest) % largest === 0) {
    array.push(j*smallest);
    }
  }
  
  function filterArray() {
   for (var k = 0; k<newArray.length; k++) {
     var m = newArray[k];
     var arrFiltered = array.filter(function(el) {
       return (el % m === 0);
     }); 
     array = arrFiltered;
    } return array;
   } 
   filterArray();
  
  return array[0];
}

smallestCommons([1,13]);


/*-- PSEUDOCODE --*/

// get an array of multiples of first two parameters
// filter by common multiples
// get integers between two parameters
// filter array of common multiples by those divisible by integers between two parameters
// return after all interstital integers have been checked


/*-- ASSIGNMENT --*/

Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Here are some helpful links:

Smallest Common Multiple: https://www.mathsisfun.com/least-common-multiple.html

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.