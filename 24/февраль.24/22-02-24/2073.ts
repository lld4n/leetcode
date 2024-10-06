function timeRequiredToBuy(tickets: number[], k: number): number {
  let index = k;
  let ans = 0;
  while (tickets[index] !== 0) {
    if (index === 0) {
      const f = tickets.shift()! - 1;
      ans++;
      if (f === 0) {
        return ans;
      } else {
        tickets.push(f);
        index = tickets.length - 1;
      }
    } else {
      const f = tickets.shift()! - 1;
      ans++;
      index--;
      if (f !== 0) {
        tickets.push(f);
      }
    }
  }
  return ans;
}
