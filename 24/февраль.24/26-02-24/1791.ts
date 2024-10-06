function findCenter(edges: number[][]): number {
  const map: { [key: number]: number } = {};
  for (const [p, v] of edges) {
    map[p] = map[p] ? map[p] + 1 : 1;
    map[v] = map[v] ? map[v] + 1 : 1;
  }
  const c = Object.keys(map).length - 1;
  for (const key in map) {
    if (map[key] === c) return Number(key);
  }
  return -1;
}
