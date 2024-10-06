function circularGameLosers(n: number, k: number): number[] {
  const circle = new Array(n).fill(false);
  let i = 1;
  let cur = 0;
  while (true) {
    if (circle[cur] === true) {
      break;
    } else {
      circle[cur] = true;
      cur = (cur + i * k) % n;
      i++;
    }
  }
  const ans: number[] = [];
  for (let i = 0; i < circle.length; i++) {
    if (circle[i] === false) ans.push(i + 1);
  }
  return ans;
}
