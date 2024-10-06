function minSteps(s: string, t: string): number {
  let l1 = new Array(123).fill(0);
  let l2 = new Array(123).fill(0);
  s.split("").forEach((el) => l1[el.charCodeAt(0)]++);
  t.split("").forEach((el) => l2[el.charCodeAt(0)]++);
  l1 = l1.slice(97);
  l2 = l2.slice(97);
  let answer = 0;
  for (let i = 0; i < l1.length; i++) {
    if (l2[i]) {
      answer += Math.abs(l2[i] - l1[i]);
    } else {
      answer += l1[i];
    }
  }
  return answer / 2;
}
