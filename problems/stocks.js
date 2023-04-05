// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let maxProfit = function (prices) {

  let left = 0;
  let right = 1;
  let answer = 0;

  while (left < prices.length) {
    // console.log(prices[left], prices[right])
    let profit = 0;
    if (prices[right]>prices[left]) {
      profit = prices[right] - prices[left];
      if (answer < profit) {
        answer = profit
      }
    } 
    else {
      left = right;
    }
    right++;
  }

  console.log(answer)
};

maxProfit([7, 1, 5, 3, 6, 4])
// output should be 5