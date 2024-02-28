function sumOddLengthSubarrays(arr: number[]): number {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j += 2) {
      ans += _.sum(arr.slice(i, j + 1));
    }
  }
  return ans;
}
