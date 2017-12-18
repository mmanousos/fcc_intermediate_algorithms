
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