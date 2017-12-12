/*doubt this is the most advanced way to accomplish this but it works */ 

function pairElement(str) {
  var returnArray = [];
  var checkArray = str.split('');
  for (var i = 0; i < checkArray.length; i++) {
    var newArray = [];
    newArray.push(checkArray[i]);
    switch (checkArray[i]) {
      case 'G': 
        newArray.push('C');
        break;
      case 'C': 
        newArray.push('G');
        break;
      case 'A':
        newArray.push('T');
        break;
      case 'T':
        newArray.push('A');
        break;
    }
    returnArray.push(newArray);
  }
  return returnArray;
}

pairElement("ACTG");

/*-- PSEUDOCODE --*/

// create array to return final results
// split string into it's own array 
// check each element of array:
    // 1 - pull element into unique array
    // 2 - check value of array 
    // 3 - match element with it's pair (push pair character to unique array)
    // 4 - push unique array into return array
    // 5 - cycle to next element of string array

/*-- ASSIGNMENT --*/
/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Here are some helpful links:

Array.prototype.push() - add elements to the end of an array
String.prototype.split() - split string to array 

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/
