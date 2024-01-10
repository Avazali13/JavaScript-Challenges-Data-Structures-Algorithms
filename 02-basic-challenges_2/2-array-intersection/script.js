//! method 1
function arrayIntersection(arr1, arr2) {
  let intersection = [];
  for (const a of arr1) {
    if (arr2.includes(a)) {
      intersection.push(a);
    }
  }
  return intersection;
}


//!method 2
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



//! For test
console.log(arrayIntersection([1, 3, 6, 2, 7, 8], [5, 9, 1, 4, 6, 8]));
