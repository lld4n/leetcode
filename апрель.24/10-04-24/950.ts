function deckRevealedIncreasing(deck: number[]): number[] {
  deck = deck.sort((a, b) => a - b);
  const list: number[] = [];
  const ans: number[] = new Array(deck.length).fill(-1);
  for (let i = 0; i < deck.length; i++) list.push(i);
  let i = 0;
  while (list.length > 0) {
    const f = list.shift()!;
    const l = list.shift();
    if (l) {
      list.push(l);
    }
    ans[f] = deck[i];
    i++;
  }
  return ans;
}
