function evenOddBit(n: number): number[] {
  const bit = n.toString(2).split("").reverse();
  let even = 0;
  let odd = 0;
  for (let i = 0; i < bit.length; i++) {
    if (bit[i] === "1") {
      if (i % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }
  return [even, odd];
}
