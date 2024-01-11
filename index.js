// function arrayIntersection(arr1,arr2) {
//     let intersection=[];
//     for(const a of arr1){
//         if(arr2.includes(a)){
//             intersection.push(a)
//         }
//     }
//     return intersection
// }

// function arrayIntersection(arr1,arr2) {
//     let intersection=[];
//     let set1=new Set(arr1)
//     for(const a of arr2){
//         if(set1.has(a)){
//             intersection.push(a)
//         }
//     }
//     return intersection
// }

// console.log(arrayIntersection([1,3,6,2,7,8],[5,9,1,4,6,8]));

// const arr = ["a", "b", "c", "d", "f"];
// function findMissingLetter(arr) {
//   let charcodearr = [];
//   for (const a of arr) {
//     charcodearr.push(a.charCodeAt());
//   }
//   for(i=charcodearr[0];i<charcodearr[charcodearr.length-1];i++){
//     if(!charcodearr.includes(i)){
//         return i
//     }
//   }
// }

const arr = ["a", "b", "c", "d", "f"];
function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let start = alphabet.indexOf(arr[0]);
  
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==alphabet[start+i]){
        return alphabet[start+i];
    }
  }
}

let arr2 = ["m", "n", "o", "q", "r"];

console.log(findMissingLetter(arr2));
