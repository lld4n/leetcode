function bestHand(ranks: number[], suits: string[]): string {
  if (suits.every((e) => e === suits[0])) {
    return 'Flush';
  }
  const map: { [key: number]: number } = {};
  for (const rank of ranks) {
    map[rank] = map[rank] ? map[rank] + 1 : 1;
    if (map[rank] === 3) {
      return 'Three of a Kind';
    }
  }

  for (const key in map) {
    if (map[key] === 2) {
      return 'Pair';
    }
  }

  return 'High Card';
}
