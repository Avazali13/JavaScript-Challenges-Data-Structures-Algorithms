// ! method 1
// function countVowels(str) {
//     let counter=0;
//     let vowels=['a','e','i','o','u'];
// str=str.toLowerCase();
// for (const a of str){
//     if(vowels.includes(a)){
//         counter++
//     }
// }
// return counter;
// }



//! method 2
// function countVowels(str) {
//     let counter=0;
//     let vowels=['a','e','i','o','u'];
// str=str.toLowerCase();
// for (const a of str){
//     for(const b of vowels){
//         if (a==b){
//             counter++
//         }
//     }
// }
// return counter;
// }



//! method 3
function countVowels(str) {
    let formattedStr = str.toLowerCase();
    let counter = 0;
    for (let a of formattedStr) {
      if (a == "a" || 
      a=="e" || 
      a=="i" || 
      a=="o" || 
      a=="u") {
        counter++;
      }
    }
    return counter;
  }


  // !For checkinhg
console.log(countVowels('Hello world!'));