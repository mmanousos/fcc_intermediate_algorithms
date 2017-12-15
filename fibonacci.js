function sumFibs(num) { 
    var arr = [1]; // create an array with the first digit (1) already inside
    var secondNum = 1; // create a new variable set to second digit (1)
    for (var firstNum = 0; firstNum<num; firstNum=placeholdNum) { // create a loop to check all numbers in sequence starting at first digit (0)
      var fibNum = firstNum+secondNum; // create Fibonacci number by adding first digit to second digit
        if ((fibNum <= num) && (fibNum %2 !== 0)) { // if Fib number is less than argument and not evenly divisible by 2 (aka odd)
            arr.push(fibNum);  // push it into the array
            var placeholdNum = secondNum; // set the second digit to a placeholder to cycle successfully
            secondNum = fibNum; // reset second digit to Fib number
        } else { // if Fib number is even
        var placeholdNum = secondNum; // still cycle to next number in sequence (set placeholder to second number & second number to Fib number) 
        secondNum = fibNum;  
        }
      }  
  var total = arr.reduce(function(sum, value) { // reudce array to single digit by adding all of the values together 
      return sum + value;
  }, 0); // start at the first value of the array
  return total;
}

sumFibs(4);



/* FCC Basic solution */
/* Cleaner than mine because it defines the cycle to the next numbers outside of the if statement. (Obviously I can do that as well.)
It also doesn't require creating an array, but simply adds the Fib number directly to the output as it cycles through. */ 


function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);



/* FCC Int solution */ 
/* I learned that you can set the value of i outside of the for loop condition. That is really helpful!*/ 
/* I find this solution clumsy though because it creates an array of all the Fib sequence up to the argument instead of pre-filtering for only odd values. I couldn't figure out how to get the "if" logic to work on this variation of the for loop though. */ 

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}

// test here
sumFibs(4);


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