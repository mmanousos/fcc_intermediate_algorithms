function convertToRoman(num) {
  var string = String(num);
  var numLength = string.match(/\d/g).length;
  var i = string.charAt(numLength-1);

  var output = [];

function checkDigit() {
  switch (i) {
      case "1": output.push("I");
          break;
      case "2": output.push("II");
          break;
      case "3": output.push("III");
          break;
      case "4": output.push("IV");
          break;
      case "5": output.push("V");
          break;
      case "6": output.push("VI");
          break; 
      case "7": output.push("VII");
          break; 
      case "8": output.push("VIII");
          break;
      case "9": output.push("IX");
          break;
  }
    if (numLength == 1) {
        return output.join('');
        } else { 
            var j = string.charAt(numLength-2);
            switch (j) {
              case "1": output.unshift("X");
                  break;
              case "2": output.unshift("XX");
                  break;
              case "3": output.unshift("XXX"); 
                  break;
              case "4": output.unshift("XL");
                  break;
              case "5": output.unshift("L");
                  break;
              case "6": output.unshift("LX");
                  break; 
              case "7": output.unshift("LXX");
                  break; 
              case "8": output.unshift("LXXX");
                  break;
              case "9": output.unshift("XC");
                  break;
            }
            if (numLength == 2) {
                return output.join(''); 
              } else {
                    var k = string.charAt(numLength-3);
                      switch (k) {
                        case "1": output.unshift("C");
                            break;
                        case "2": output.unshift("CC");
                            break;
                        case "3": output.unshift("CCC"); 
                            break;
                        case "4": output.unshift("CD");
                            break;
                        case "5": output.unshift("D");
                            break;
                        case "6": output.unshift("DC");
                            break; 
                        case "7": output.unshift("DCC");
                            break; 
                        case "8": output.unshift("DCCC");
                            break;
                        case "9": output.unshift("CM");
                            break;
                      }
                  if (numLength == 3) {
                      return output.join('');
                  } else {
                      var l = string.charAt(numLength-4);
                        switch (l) {
                        case "1": output.unshift("M");
                            break;
                        case "2": output.unshift("MM");
                            break;
                        case "3": output.unshift("MMM"); 
                            break;
                      }
                  } return output.join('');
                }   
            }
        };    
return checkDigit();    
    
};

convertToRoman(736);



/*-- PSEUDOCODE --*/

/* 
hard code values 
check how many digits are in the given parameter. 
    use CharAt to check each digit? 
Detailed if / switch function: 
    check if it is below 4, = 4, = 5, above 5, = 9
        below 4, get number and input that # of I; above 5, get (number - 5) and inpput that # of I after V. 
        
    if single digit    
        return / break
    if more digits, check digits individually. 
        check if it is below 4, = 4, = 5, above 5, = 9
            in 10s place, replace with X or L; in 100s place, with C or D; in 1000s place, with M.             
    join results into single string. 
    return string. 
*/



/*-- ASSIGNMENT --*/
/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Here are some helpful links:


1 = I
5 = V
10 = X
50 = L
100 = C
500 = D
1000 = M

4 = IV 
40 = XL
90 = XC

Roman Numerals: http://www.mathsisfun.com/roman-numerals.html
Array.prototype.splice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Array.prototype.indexOf(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.prototype.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/