function findRelativeRanks(score: number[]): string[] {
  let list: [number, number][] = [];
  for (let i = 0; i < score.length; i++) {
    list.push([score[i], i]);
  }
  list = list.sort((a, b) => b[0] - a[0]);
  const ans: string[] = new Array(list.length).fill("");
  for (let i = 0; i < list.length; i++) {
    if (i === 0) ans[list[i][1]] = "Gold Medal";
    else if (i === 1) ans[list[i][1]] = "Silver Medal";
    else if (i === 2) ans[list[i][1]] = "Bronze Medal";
    else ans[list[i][1]] = String(i + 1);
  }
  return ans;
}
