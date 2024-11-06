function canSortArray(nums: number[]): boolean {
  const arr: number[][] = [[0]];

  for (const num of nums) {
    const lst = arr[arr.length - 1]!;
    const lstBit = lst[0]
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;

    const numBit = num
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;

    if (numBit === lstBit) {
      arr[arr.length - 1].push(num);
    } else {
      arr.push([num]);
    }
  }

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    const prev = arr[i - 1];

    if (Math.min(...cur) < Math.max(...prev)) {
      return false;
    }
  }

  return true;
}
