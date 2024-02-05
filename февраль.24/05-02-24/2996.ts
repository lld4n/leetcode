function missingInteger(nums: number[]): number {
  const prefix: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const last = prefix.pop();
    if (last === undefined) break;
    if (nums[i] - 1 === last) {
      prefix.push(last);
      prefix.push(nums[i]);
    } else {
      prefix.push(last);
      break;
    }
  }
  let s = prefix.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  );
  while (nums.includes(s)) {
    s++;
  }
  return s;
}
