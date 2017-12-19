
function sumAll(arr) {

  // Determine largest number in array
  var largest = arr.reduce(function(a,b) {
    return Math.max(a,b);
  });

  //Determine smallest number in array
  var smallest = arr.reduce(function(a,b) {
    return Math.min(a,b);
  });
  
   // loop through to get all numbers between smallest and largest and push to new array
  var newArray = []; 
  for (var i = smallest; i <= largest; i++) {
    newArray.push(i);
    console.log(newArray);
  }
  
  // reduce array to single value
    var reducer = function(total, amount) {
      return total + amount;
    };
    var sum = newArray.reduce(reducer, 0);
    return sum;
}

sumAll([5, 10]);


/* fcc intermediate solution */ 
/* much cleaner using single array (from largest to smallest) & iterating over that */
/* If you sort the array from greatest to smallest, then you can use the first two numbers as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers. (multiply first two largest, check if others divide evenly, if not, increase factor of multiplication & repeat.) */

function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);



/*-- PSEUDOCODE --*/

/*
Determine highest number in the array
Determine lowest number in the array 
Set up function to get all numbers between & including those numbers
Add all the numbers together
Return the value 
*/


/*-- ASSIGNMENT --*/

/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Here are some helpful links:

Math.max(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Math.min(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Array.prototype.reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


CHECKS: 
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/ 

