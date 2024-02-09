function pickGifts(gifts: number[], k: number): number {
  for (let i = 0; i < k; i++) {
    const index = gifts.indexOf(Math.max(...gifts));
    const sqrt = Math.floor(Math.sqrt(gifts[index]));
    const ost = gifts[index] - sqrt;
    gifts[index] -= ost;
  }
  return _.sum(gifts);
}
