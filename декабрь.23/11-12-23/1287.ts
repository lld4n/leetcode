function findSpecialInteger(arr: number[]): number {
  let map: {
    [key: number]: number;
  } = {};
  for (let el of arr) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }

  for (let key in map) {
    if (map[key] > arr.length / 4) {
      return Number(key);
    }
  }
  return 0;
}
