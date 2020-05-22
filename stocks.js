function stocks(arr) {
  let counter = 0;
  let difference = 0;
  let buy = 0
  let sell = 0
  for (let i = 0; i < arr.length; i++) {
    for (let n = i + 1; n < arr.length; n++) {
      if (n > i) {
        difference = arr[n] - arr[i];
        if (difference > counter) {
          counter = difference;
          buy = i + 1;
          sell = n + 1;
        } 
      }
    }
  }
  return {profit: counter, buy: buy, sell: sell};
}

let arr = [7,1,5,3,6,4];
// let arr = [7,6,4,3,1];

console.log(stocks(arr));