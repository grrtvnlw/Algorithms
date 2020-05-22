function stocks(prices) {
  let maxProfit = 0;
  let buy = prices[0];
  for (let sell of prices) {
    if (sell < buy) {
      buy = sell;
    } else if (sell - buy > maxProfit) {
      maxProfit = sell - buy;
    }
  }
  return maxProfit;
}

// let arr = [7,1,5,3,6,4];
// let arr = [7,6,4,3,1];
let arr = [7,1,5,3,6,4];
// let arr = [1,2,3,4,5];

console.log(stocks(arr));