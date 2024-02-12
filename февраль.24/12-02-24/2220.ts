function minBitFlips(start: number, goal: number): number {
  const ans = (goal ^ start).toString(2);
  return ans.split("").filter((e) => e === "1").length;
}
