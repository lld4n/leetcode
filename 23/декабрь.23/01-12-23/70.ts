function climbStairs(n: number): number {
  let array: number[] = [0, 1, 1];
  for (let i = 3; i <= n + 1; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array[n + 1];
}
