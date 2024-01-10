//! method 1
let arr = [1, "salam", 1, 2, 5, 3, 2, true, false, 5, "5"];
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      for (let j = i + 1; j < arr.length; j++) {
        if (typeof arr[j] == "string" && arr[i] == arr[j]) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
  }
  return arr;
}



//!method 2
// function removeDuplicates(arr){
//     let uniqueArr=[];
//     for(const a of arr){
//         if(!uniqueArr.includes(a)){
//             uniqueArr.push(a)
//         }
//     }
//     return uniqueArr
// }




//!method 3  (it does not work properly because if we an array which includes 5 and '5' it does not count duplicates them)
// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }




//!For cehcking
console.log(removeDuplicates(arr));
