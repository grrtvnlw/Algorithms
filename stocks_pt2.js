function stocks(prices) {
  let maxProfit = 0;
  let currentMin = prices[0];
  for (let price of prices) {
    if (price < currentMin) {
      currentMin = price;
    } else if (price - currentMin > maxProfit) {
      maxProfit = price - currentMin;
    }
  }
  return maxProfit;
}

// let arr = [7,1,5,3,6,4];
let arr = [7,6,4,3,1];

console.log(stocks(arr));