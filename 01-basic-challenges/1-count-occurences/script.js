//! Method 1
// function countOccurrences(str,letter) {
//     let counter=0;
//     for(const a of str){        
//         if(a==letter){
//             counter++
//         }
//     }
//     return counter;
// }


//! Method 2
// const countOccurrences=(str,letter)=>{
//     let counter=0;
//   let arr=str.split('');
//   for(const a of arr){
//     if(a==letter){
//         counter++
//     }
//   }
//   return counter
// }


//! Method 3
// const countOccurrences=(str,letter)=>str.split(letter).length-1;


//!For Checking
console.log(countOccurrences('hello World','d'));