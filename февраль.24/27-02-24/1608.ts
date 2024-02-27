function specialArray(nums: number[]): number {
  for (let x = 0; x <= 100; x++) {
    let c = 0;
    for (const n of nums) {
      if (n >= x) c++;
    }
    if (c === x) return x;
  }
  return 0;
}
