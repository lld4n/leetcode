function reverseBits(n: number): number {
  let q = n.toString(2);
  while (q.length != 32) {
    q = "0" + q;
  }
  return Number.parseInt(q.split("").reverse().join(""), 2);
}
