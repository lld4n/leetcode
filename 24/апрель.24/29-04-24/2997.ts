function minOperations(nums: number[], k: number): number {
  let k2 = k.toString(2);
  let list: string[] = nums.map((e) => e.toString(2));
  const mm = Math.max(k2.length, ...list.map((e) => e.length));

  const add = (s: string): string => {
    while (s.length < mm) {
      s = "0" + s;
    }
    return s;
  };
  k2 = add(k2);
  list = list.map((e) => add(e));
  let ans = 0;

  for (let pos = 0; pos < k2.length; pos++) {
    let b = Number(list[0][pos]);
    for (let i = 1; i < list.length; i++) {
      b = b ^ Number(list[i][pos]);
    }
    if (k2[pos] === "0" && b === 1) ans += 1;
    if (k2[pos] === "1" && b === 0) ans += 1;
  }
  return ans;
}
