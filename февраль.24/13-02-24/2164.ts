function sortEvenOdd(nums: number[]): number[] {
  const even = nums.filter((e, i) => i % 2 === 0).sort((a, b) => a - b);
  const odd = nums.filter((e, i) => i % 2 !== 0).sort((a, b) => b - a);
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      const b = even.shift();
      if (b) ans.push(b);
    } else {
      const b = odd.shift();
      if (b) ans.push(b);
    }
  }
  return ans;
}
