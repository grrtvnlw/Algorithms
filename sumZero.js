function sumZero(sortedArr) {
  let newArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    let base = sortedArr[i];
    for (let n = 1; n < sortedArr.length; n++) {
      if (base + sortedArr[n] === 0) {
        newArr.push(base);
        newArr.push(sortedArr[n]);
        return newArr;
      }; 
    };
  };
};
let sortedArr = [-4, -3, -1, 0, 3, 4, 4, 5]; // [-3, 3]
console.log(sumZero(sortedArr));