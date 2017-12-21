
/* doesn't work */ 

function steamrollArray(arr) {
  var flat = [];
  for (var i = 0; i<arr.length; i++) {
    var num = arr[i];
    if (Number.isInteger(num) === true) {
      flat.push(num);
    } else if (Array.isArray(num) === true) {
      for (var j=0; j<num.length; j++) {
        var arrInt = num[j]; 
        if (Array.isArray(arrInt)) {
         var stringValue = arrInt.toString();
         var toNum = Number(stringValue);
         flat.push(toNum);
        } else {
       flat.push(arrInt);
      }
    } 
   } else if (typeof num === 'object') {
     flat.push(num);
   }
  }
  console.log(flat);
  return flat; 
}

steamrollArray([[["a"]], [["b"]]]);

/* my version based on fcc's basic */
/* doesn't use 'forEach' but passes the checks anyway because the function is recursive.*/ 

function steamrollArray(arr) {
  var flat = [];
  
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flat.push(arg);
    } else {
      for (var a in arg) {
       flatten(arg[a]);  
      }
    }
  }
  
 
  flatten(arr);
  return flat; 
}

steamrollArray([1, {}, [3, [[4]]]]);



/* fcc basic solution */ 

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);


/* example code from Stack Overflow */ 

function toArray(obj) {
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            result.push(toArray(value)); // <- recursive call
        }
        else {
            result.push(value);
        }
    }
    return result;
}


/*-- PSEUDOCODE --*/

// potentially use concat to join arrays?

/*-- ASSIGNMENT --*/

Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:

Array.isArray(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].