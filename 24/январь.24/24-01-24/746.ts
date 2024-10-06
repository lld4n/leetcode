function minCostClimbingStairs(cost: number[]): number {
  cost.push(0);
  cost.push(0);
  for (let i = cost.length - 3; i >= 0; i--) {
    const c = cost[i];
    cost[i] = Math.min(cost[i + 1] + c, cost[i + 2] + c);
  }
  return Math.min(cost[0], cost[1]);
}
