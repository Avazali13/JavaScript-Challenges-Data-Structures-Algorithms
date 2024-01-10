function findMaxNumber(arr) {
    let c=arr[0];
    for(let a of arr){
if(a>c){
    c=a
}
    }
    return c;
}


//! For checking
console.log(findMaxNumber([1,6,9,22,3,5,2]));