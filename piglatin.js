
/* had the lazy operator ('?') in the wrong position for the RegEx so it wasn't breaking the phrase at the right point */
/*
function translatePigLatin(str) {
  var strFirst = str.charAt(0);
  
  function checkVowel() {
    var vowelsTest = /[aeiouy]/gi.test(strFirst);
    if (vowelsTest == true) {
      str = str + 'way';
      return str;
    } else {      
        var terms = /(\w+?)[aeiouy](\w+)/; // splits word at first vowel
        var firstVowel = str.match(/[aeiouy]/); // captures first vowel into a variable
        var newStr = str.replace(terms, '$2$1'); // switches position of first and second parts of the word (not including vowel)
        str = firstVowel[0] + newStr + 'ay'; // adds vowel to the front of the word and 'ay' to the end. 
    }  
  }
  checkVowel();  
  
  return str;
}

translatePigLatin("california");    
*/

/* works for two syllable words like 'glove' but not longer words like 'california' */
/*
function translatePigLatin(str) {
  var strFirst = str.charAt(0);
  
  function checkVowel() {
    var vowelsTest = /[aeiouy]/gi.test(strFirst);
    if (vowelsTest == true) {
      str = str + 'way';
      return str;
    } else {      
        var terms = /(\w+)[aeiouy?](\w+)/; // splits word at first vowel
        var firstVowel = str.match(/[aeiouy?]/); // captures first vowel into a variable
        var newStr = str.replace(terms, '$2$1'); // switches position of first and second parts of the word (not including vowel)
        str = firstVowel[0] + newStr + 'ay'; // adds vowel to the front of the word and 'ay' to the end. 
    }  
  }
  checkVowel();  
  
  return str;
}

translatePigLatin("california");
*/

/* Switch function doesn't work - returns vowel only for entire function, not back into a usable form for the rest of the function steps */ 
/*
function translatePigLatin(str) {
  var strFirst = str.charAt(0);
  
  function checkVowel() {
    var vowelsTest = /[aeiouy]/gi.test(strFirst);
    if (vowelsTest == true) {
      str = str + 'way';
      return str;
    } else {  
        var arr = str.split('');
        
        function getVowel(arr) {
          for (var i = 0; i<arr.length; i++) {
            switch (arr[i]) {
              case 'a': 
                var firstVowel = arr[i];
                return firstVowel;
                break;
              case 'e':
                var firstVowel = arr[i];
                return firstVowel;
                break;
              case 'i':
                var firstVowel = arr[i];
                return firstVowel;
                break;
              case 'o':
                var firstVowel = arr[i];
                return firstVowel;
                break;
              case 'u':
                var firstVowel = arr[i];
                return firstVowel;
                break;
              case 'y':
                var firstVowel = arr[i];
                return firstVowel;
                break;
            }
          }
        }  
        
        
        getVowel(arr);
        
        
      //  var firstVowelPos = arr.indexOf('a' || 'e' || 'i' || 'o' || 'u' || 'y');
       // var vowels = /[aeiouy]/
      //  var firstVowelPos = arr.indexOf(vowels);
        var firstVowelPos = arr.indexOf(firstVowel);
        var front = arr.splice(0, firstVowelPos);
        var frontMerged = front.join('');
        arr.push(frontMerged); 
        var joined = arr.join('');
        str = joined + 'ay';
        return str;
    }  
  }
  checkVowel();  
  
  return str;
}

translatePigLatin("glove"); 


/* standard 'for' loop with 'if' also doesn't work - returns only the first vowel */ 

function translatePigLatin(str) {
  var strFirst = str.charAt(0);
  
  function checkVowel() {
    var vowelsTest = /[aeiouy]/gi.test(strFirst);
    if (vowelsTest == true) {
      str = str + 'way';
      return str;
    } else {  
        var arr = str.split('');
        
        function getVowel(arr) {
          for (var i = 0; i<arr.length; i++) {
            if ((arr[i] == 'o') || (arr[i] == 'e')) {
              var firstVowel = arr[i];
              return firstVowel;
            }
          }
        }  
        
        
        getVowel(arr);
        
        
      //  var firstVowelPos = arr.indexOf('a' || 'e' || 'i' || 'o' || 'u' || 'y');
       // var vowels = /[aeiouy]/
      //  var firstVowelPos = arr.indexOf(vowels);
        var firstVowelPos = arr.indexOf(firstVowel);
        var front = arr.splice(0, firstVowelPos);
        var frontMerged = front.join('');
        arr.push(frontMerged); 
        var joined = arr.join('');
        str = joined + 'ay';
        return str;
    }  
  }
  checkVowel();  
  
  return str;
}

translatePigLatin("glove"); 



/*-- PSEUDOCODE (for first syllable solution) --*/

// Check if argument starts with a vowel
    // if yes, add 'way' to end and return

    // if no, fetch indexOf first vowel 
        // create variable to hold characters up to first vowel 
        // (for loop to pull those first characters off using shift?)
        // add to last position 
        // add 'ay' after new last letter
        // return new term 

/*
function translatePigLatin(str) {
  var strFirst = str.charAt(0); // get the first letter
  
  function checkVowel() {
    var vowels = /[aeiouy]/gi.test(strFirst); // check if the first letter is a vowel
    if (vowels == true) { // if first letter is a vowel
      str = str + 'way'; // add 'way' to the end
      return str; // return the new value
    } else { // if first letter is not a vowel
      var toArray = str.split(''); // make the string an array
      toArray.shift(); // remove the first letter
      toArray.push(strFirst); // add the first letter the end (held as a variable from outside of the function)
      str = toArray.join('') + 'ay'; // merge the array back to a string and add 'ay' to the end
      return str; // return the new value
    }
  }
  checkVowel();  // run the function
  
  return str; // return the final value
}

translatePigLatin("consonant");


/*-- PSEUDOCODE (for first character solution) --*/

// Check if argument starts with a vowel
    // if yes, add 'way' to end and return

    // if no, fetch first letter 
        // remove position 0
        // add to last position 
        // add 'ay' after new last letter
        // return new term 

/*-- ASSIGNMENT --*/

/* 
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Here are some helpful links:

Array.prototype.indexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.prototype.push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Array.prototype.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
String.prototype.substr(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
String.prototype.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".