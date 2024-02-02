function sequentialDigits(low: number, high: number): number[] {
  const ans: number[] = [];
  for (let i = 1; i <= 9; i++) {
    let buffer = "";
    for (let j = i; j <= 9; j++) {
      buffer += String(j);
      if (Number(buffer) >= low && Number(buffer) <= high) {
        ans.push(Number(buffer));
      }
    }
  }
  return ans.sort((a, b) => a - b);
}
