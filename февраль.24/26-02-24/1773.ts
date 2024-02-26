function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string,
): number {
  let ans = 0;
  for (const [type, color, name] of items) {
    if (
      (ruleKey === "type" && type === ruleValue) ||
      (ruleKey === "color" && color === ruleValue) ||
      (ruleKey === "name" && name === ruleValue)
    ) {
      ans++;
    }
  }
  return ans;
}
