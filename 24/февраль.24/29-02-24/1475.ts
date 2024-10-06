function finalPrices(prices: number[]): number[] {
  const ans: number[] = new Array(prices.length).fill(-1);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        ans[i] = prices[i] - prices[j];
        break;
      }
    }
    if (ans[i] === -1) {
      ans[i] = prices[i];
    }
  }
  return ans;
}
