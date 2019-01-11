function palindrome(str) {
    str = str.toLowerCase();
    var len = str.length;
    revStr = len.split("").reverse()   //Still not sure how to work this in to the for loop and the return :(
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
      
    }
    return true;
   }
   palindrome("level");
   
   //TOOLS: function, for loop, split method, reverse array
   
