function maxProfit(prices: number[]): number {
  let list: number[] = [prices[0]];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < list[list.length - 1]) {
      list.push(prices[i]);
    } else {
      list.push(list[list.length - 1]);
    }
  }

  let answer = 0;
  for (let i = 0; i < prices.length; i++) {
    const b = prices[i] - list[i];
    if (b > 0) {
      answer = Math.max(answer, b);
    }
  }
  return answer;
}
