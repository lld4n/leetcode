function decode(encoded: number[], first: number): number[] {
  const ans: number[] = [first];
  for (const item of encoded) {
    ans.push(item ^ ans[ans.length - 1]);
  }
  return ans;
}
