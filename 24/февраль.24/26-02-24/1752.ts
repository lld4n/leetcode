function check(nums: number[]): boolean {
  const c = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    if (c([...nums.slice(i), ...nums.slice(0, i)])) return true;
  }
  return false;
}
