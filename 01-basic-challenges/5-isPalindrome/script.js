//! method 1 
// function isPalindrome(str) {
//     let pol='';
//     str=str.replaceAll(' ','').replaceAll(',','').toLowerCase();
//     for(let i=str.length-1;i>=0;i--){
//         pol+=str[i]
//     }
//     if(pol===str){return true}
//     else{return false}
// }


//! method 2
const isPalindrome = function (str) {
    const formattedStrr = removeNonAlphaNumeric(str.toLowerCase());
    const resorvedStrr=resorveStr(formattedStrr);
  return formattedStrr==resorvedStrr;
}

    function removeNonAlphaNumeric(str) {
      let formattedStr = "";
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (isAlphaNumeric(char)) {
          formattedStr += str[i];
        }
      }
      return formattedStr;
    }
  
    function isAlphaNumeric(char) {
      const code = char.charCodeAt();
      return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
    }
  
    function resorveStr(formattedStrr) {
      let resorved = "";
      for (let i = formattedStrr.length-1; i >= 0; i--) {
        resorved += formattedStrr[i];
      }

      return resorved;
    }

//! For checking 
console.log(isPalindrome('racecara')); 