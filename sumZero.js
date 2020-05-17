// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if the a pair does not exist.
function sumZero(sortedArr) {
  let newArr = [];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let base = sortedArr[i];
    for (let n = i + 1; n < sortedArr.length; n++) {
      if (base + sortedArr[n] === 0) {
        newArr.push(base);
        newArr.push(sortedArr[n]);
        return newArr;
      };
    };
  };
};

// let sortedArr = [-2, -4, -1, 0, 3, 4, 4, 5]; // [-3, 3]
let sortedArr = [-8, -3, -2, 0, 2, 4, 6, 8]; // [-8, 8]

console.log(sumZero(sortedArr));