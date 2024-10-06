function minimumSum(num: number): number {
  const list = String(num).split("");
  let ans: number[] = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      for (let k = 0; k < list.length; k++) {
        for (let h = 0; h < list.length; h++) {
          if (new Set([i, j, k, h]).size === 4) {
            const buffer = list[i] + list[j] + list[k] + list[h];
            ans.push(Number(buffer.slice(0, 1)) + Number(buffer.slice(1)));
            ans.push(Number(buffer.slice(0, 2)) + Number(buffer.slice(2)));
            ans.push(Number(buffer.slice(0, 3)) + Number(buffer.slice(3)));
          }
        }
      }
    }
  }
  console.log(ans.length);
  return Math.min(...ans);
}
