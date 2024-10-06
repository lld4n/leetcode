function arraySign(nums: number[]): number {
  let countNeg = 0;
  for (let el of nums) {
    if (el === 0) return 0;
    if (el < 0) countNeg++;
  }

  if (countNeg % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
}
