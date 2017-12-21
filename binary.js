



/*-- PSEUDOCODE --*/

Looking over charts of binary characters, the spaces are built into the sample sentences. 
// create empty string
// loop through argument
// get each character using .charCodeAt()
// convert to letter using fromCharCode()
// add to string
// return string

/*-- ASSIGNMENT --*/

Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Here are some helpful links:

String.prototype.charCodeAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
String.fromCharCode(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"