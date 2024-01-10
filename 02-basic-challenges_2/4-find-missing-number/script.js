function findMissingNumber(arr) {
    if (arr.length) {
      let n = arr.length + 1;
      let expectedSum = (n * (n + 1)) / 2;
      let sumOfArr = 0;
      for (const a of arr) {
        sumOfArr += a;
      }
      let missingNumber = expectedSum - sumOfArr;
      return missingNumber;
    }
    return 1;
  }
  


  //!For test
  console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]))
  console.log(findMissingNumber([]))