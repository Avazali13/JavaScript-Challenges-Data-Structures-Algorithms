//! method 1
function titleCase(str) {
    let newStr=''
    let arr=str.toLowerCase().split(' ');
    for(let a of arr){
       a=a.replace(a[0],a[0].toUpperCase()) 
       newStr+=a+' '
    }

    return newStr.trim()
}



//! method 2
// function titleCase(str) {
//     let arr=str.toLowerCase().split(' ');
//     let newArr=[];
//     for(let a of arr){
//        newArr.push(a=a.replace(a[0],a[0].toUpperCase()))
//     }
//     let newStr=newArr.join(' ')
//     return newStr
// }


//! For checking
console.log(titleCase('javascript programming'));