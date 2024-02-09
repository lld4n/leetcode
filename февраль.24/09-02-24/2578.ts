function splitNum(num: number): number {
  const list = String(num)
    .split("")
    .map(Number)
    .sort((a, b) => a - b);
  let f: number[] = [];
  let s: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      f.push(list[i]);
    } else {
      s.push(list[i]);
    }
  }
  return Number(f.map(String).join("")) + Number(s.map(String).join(""));
}
