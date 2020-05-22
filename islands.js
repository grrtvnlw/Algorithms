function islands(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    let secondNum = arr[i + 1];

    if (firstNum === 1 && secondNum !== 1) {
      counter++;
    } 
  }
  return counter;
}

// let arr = [0, 1, 1, 0, 1, 0, 1, 1, 1]; // 3
let arr = [1, 0, 1] // 2
// let arr = [0, 0, 1, 0, 1, 1, 0, 0, 1, 0] // 3
// let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // 1
// let arr = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0] // 9

console.log(islands(arr));