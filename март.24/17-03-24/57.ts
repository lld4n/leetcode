function insert(
  intervals: number[][],
  newInterval: number[],
): number[][] {
  intervals.push(newInterval);
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const ans: [number, number][] = [
    intervals.shift()! as [number, number],
  ];
  for (const [s, e] of intervals) {
    const [sl, el] = ans[ans.length - 1];
    if (sl === s) {
      ans.pop();
      ans.push([s, Math.max(el, e)]);
    } else if (s <= el) {
      ans.pop();
      ans.push([sl, Math.max(el, e)]);
    } else {
      ans.push([s, e]);
    }
  }
  return ans;
}
