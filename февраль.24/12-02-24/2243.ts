function digitSum(s: string, k: number): string {
  while (s.length > k) {
    console.log(s);
    let buffer = "";
    let sum = Number(s[0]);
    for (let i = 1; i < s.length; i++) {
      if (i % k === 0) {
        console.log(sum);
        buffer += String(sum);
        sum = Number(s[i]);
      } else {
        sum += Number(s[i]);
      }
      if (i === s.length - 1) {
        buffer += String(sum);
      }
    }
    s = buffer;
  }
  return s;
}
