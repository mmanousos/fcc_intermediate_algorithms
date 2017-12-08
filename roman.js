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
        return output;
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
        } return output.join(''); 
    }    
checkDigit();    
    
};

convertToRoman(36);