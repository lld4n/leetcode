function makeEqual(words: string[]): boolean {
  let map: {
    [key: string]: number;
  } = {};

  for (let element of words) {
    for (let i = 0; i < element.length; i++) {
      if (map[element[i]]) {
        map[element[i]]++;
      } else {
        map[element[i]] = 1;
      }
    }
  }

  for (let key in map) {
    if (map[key] % words.length !== 0) return false;
  }
  return true;
}
