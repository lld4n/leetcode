function uniqueOccurrences(arr: number[]): boolean {
  let map: {
    [key: number]: number;
  } = {};
  for (const el of arr) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  const list = Object.values(map).sort((a, b) => a - b);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === list[i + 1]) return false;
  }
  return true;
}
