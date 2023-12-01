function containsDuplicate(nums: number[]): boolean {
  let map: {
    [key: number]: number;
  } = {};
  for (let el of nums) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }

  for (let key in map) {
    if (map[key] > 1) return true;
  }
  return false;
}
