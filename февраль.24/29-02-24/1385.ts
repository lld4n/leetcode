function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number,
): number {
  let ans = 0;
  for (let i = 0; i < arr1.length; i++) {
    let flag = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        flag = false;
        break;
      }
    }
    if (flag) ans++;
  }
  return ans;
}
