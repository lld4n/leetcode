function buyChoco(prices: number[], money: number): number {
  prices = prices.sort((a, b) => a - b);
  const s = prices[0] + prices[1];
  if (money >= s) {
    return money - s;
  } else {
    return money;
  }
}
