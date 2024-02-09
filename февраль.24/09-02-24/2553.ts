function separateDigits(nums: number[]): number[] {
  return nums.map((e) => String(e).split("").map(Number)).flat();
}
