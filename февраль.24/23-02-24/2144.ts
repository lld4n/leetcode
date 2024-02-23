function minimumCost(cost: number[]): number {
  cost = cost.sort((a, b) => a - b);
  let ans = 0;
  let j = 0;
  while (j < cost.length - 2) {
    if (cost[j] === cost[j + 1] && cost[j + 1] === cost[j + 2]) {
      ans += cost[j] * 2;
      cost = [...cost.slice(0, j), ...cost.slice(j + 3)];
      j--;
      console.log(ans, j, cost);
    } else {
      j++;
    }
  }
  cost = cost.sort((a, b) => b - a);
  while (cost.length > 2) {
    const list: number[] = [cost.shift()!, cost.shift()!, cost.shift()!];
    ans += list[0] + list[1];
  }
  if (cost.length === 2) {
    ans += cost.shift()! + cost.shift()!;
  } else if (cost.length === 1) {
    ans += cost.shift()!;
  }
  return ans;
}
