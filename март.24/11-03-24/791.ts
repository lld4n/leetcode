function customSortString(order: string, s: string): string {
  const map: { [key: string]: number } = {};
  for (const l of s) {
    map[l] = map[l] ? map[l] + 1 : 1;
  }
  let result = "";
  for (const o of order) {
    if (map[o]) {
      while (map[o] > 0) {
        result += o;
        map[o]--;
      }
    }
  }
  for (const key in map) {
    if (map[key] !== 0) {
      while (map[key] > 0) {
        result += key;
        map[key]--;
      }
    }
  }
  return result;
}
