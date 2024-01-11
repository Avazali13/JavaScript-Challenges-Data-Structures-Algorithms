//!method 1
function findMissingLetter(arr) {
    let i = arr[0].charCodeAt(0); 
    let j = arr[arr.length-1].charCodeAt(0);
    for (let a=i; a<= j; a++) {
        let missing=String.fromCharCode(a);
        if(!arr.includes(missing)){
            return missing
        }
    }   
}



//!method 2

// function findMissingLetter(arr) {
//     let start=arr[0].charCodeAt(0)

//     for(let i=0;i<arr.length;i++){
//         let current=arr[i].charCodeAt(0)
//         if(current-start>1){
//             return String.fromCharCode(start+1)
//         }
//         start=current;
//     }
// }





//!method 3
// function findMissingLetter(arr) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let start = alphabet.indexOf(arr[0]);
    
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]!==alphabet[start+i]){
//           return alphabet[start+i];
//       }
//     }
//   }


//!For checking:
//const arr = ["a", "b", "c", "d", "f"];
//const arr2 = ["m", "n", "o", "q", "r"];