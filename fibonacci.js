

/*-- PSEUDOCODE --*/

// cycle through arguments <= argument (start with 1, max being argument #)
// get fib number (add current number to number before it)
// check if it is odd (if # divided by 2 leaves a remainder) & if so, map it to an array
// reduce array to single value



/*-- ASSIGNMENT --*/

Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Here are some helpful links:

Fibonacci Number: https://en.wikipedia.org/wiki/Fibonacci_number
Remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.