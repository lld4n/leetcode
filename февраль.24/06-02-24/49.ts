function groupAnagrams(strs: string[]): string[][] {
  const map: {
    [key: string]: string[];
  } = {};
  for (const str of strs) {
    const buffer = new Array(123).fill(0);
    for (const s of str) {
      buffer[s.charCodeAt(0)]++;
    }
    const key = buffer.map((e) => e + "-").join("");
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }
  return Object.values(map);
}
