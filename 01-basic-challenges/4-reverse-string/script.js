//! method 1
function reverseString(str) {
    let newStr='';
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i]
    }
return newStr;
}


//! method 2
// const reverseString=(str)=>str.split('').reverse().join('');


//! For checking
console.log(reverseString('hello world'));