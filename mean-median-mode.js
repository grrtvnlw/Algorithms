function mean(arr) {
  let numsInArr = 0;
  let total = 0;
  let mean = 0;

  arr.forEach(number => {
    numsInArr++;
    total += number;
  })

  mean = total / numsInArr;

  return Math.round(mean);
}

function median(arr) {
  let total = 0;
  let median = 0;

  arr.sort(function(a, b){
    return a-b;
  });

  arr.forEach(number => {
    total++;
  })

  median = total / 2;

  return arr[median];
}

function mode(arr) {
  let numberCount = {};
  let key = 0;
  let value = 0;

  arr.forEach(number => {
    if (numberCount[number] == null) {
      numberCount[number] = 1;
    } else {
      numberCount[number]++;
    }

    if (numberCount[number] > value) {
      value = numberCount[number];
      key = number;
    }
  });

  return { key, value };
}

let array = [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8];
console.log(mean(array));
console.log(median(array));
console.log(mode(array));