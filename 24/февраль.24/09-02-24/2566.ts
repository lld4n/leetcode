function minMaxDifference(num: number): number {
  const str = String(num);
  const list: string[] = [];
  for (let i = 0; i <= 9; i++) {
    const regex = new RegExp(String(i), "g");
    for (let j = 0; j <= 9; j++) {
      list.push(str.replace(regex, String(j)));
    }
  }
  const arr = list.map(Number);
  return Math.max(...arr) - Math.min(...arr);
}
