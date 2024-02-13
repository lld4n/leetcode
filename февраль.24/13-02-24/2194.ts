function cellsInRange(s: string): string[] {
  const ans: string[] = [];
  const list = s.split(":");
  const startCol = list[0][0].charCodeAt(0);
  const startRow = Number(list[0][1]);
  const endCol = list[1][0].charCodeAt(0);
  const endRow = Number(list[1][1]);

  for (let i = startCol; i <= endCol; i++) {
    for (let j = startRow; j <= endRow; j++) {
      ans.push(String.fromCharCode(i) + String(j));
    }
  }
  return ans;
}
