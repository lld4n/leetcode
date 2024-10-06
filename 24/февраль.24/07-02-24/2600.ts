function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number,
): number {
  const list: number[] = [];
  for (let i = 0; i < numOnes; i++) list.push(1);
  for (let i = 0; i < numZeros; i++) list.push(0);
  for (let i = 0; i < numNegOnes; i++) list.push(-1);
  let ans = 0;
  for (let i = 0; i < k; i++) {
    const lst = list.shift();
    ans += lst;
  }
  return ans;
}
