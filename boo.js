
/* correct solutions */ 

1) 
function booWho(bool) {
  if (bool === typeof boolean) { 
    return true;
  } else {
    return false; 
  }
}
booWho(null);

2) most easily read 
function booWho(bool) {
  if (typeof bool === 'boolean') { 
    return true;
  } else {
    return false; 
  }
}
booWho(null);

3) more refined (but only works because the statement evaluates to the required output)
function booWho(bool) {
  return typeof bool === 'boolean'; 
}

booWho(null);



/* very basic solution */
/* doeesn't check type of argument */ 

function booWho(bool) {
  if ((bool === true) || (bool === false)) {
    return true;
  } else {
    return false; 
  } 
}

booWho(null);

/*-- PSEUDOCODE --*/

// value can only be true or false, not the strings 'true' or 'false' or any other 'truthy' or 'falsy' values. 

// check if argument === true or false
 // if yes, return true
 // else return false


/*-- ASSIGNMENT --*/

/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Here are some helpful links:

Boolean Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.
*/