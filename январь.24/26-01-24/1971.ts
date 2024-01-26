function validPath(
  n: number,
  edges: [number, number][],
  source: number,
  destination: number,
): boolean {
  const map: Map<number, Set<number>> = new Map();

  for (const el of edges) {
    if (map.has(el[0])) {
      map.get(el[0])?.add(el[1]);
    } else {
      map.set(el[0], new Set());
      map.get(el[0])?.add(el[1]);
    }
    if (map.has(el[1])) {
      map.get(el[1])?.add(el[0]);
    } else {
      map.set(el[1], new Set());
      map.get(el[1])?.add(el[0]);
    }
  }

  const dfs = (node: number, visited: boolean[]) => {
    if (node === destination) {
      return true;
    }
    const set = Array.from(map.get(node)!);
    for (const index of set) {
      if (!visited[index]) {
        visited[index] = true;
        if (dfs(index, visited)) {
          return true;
        }
      }
    }
    return false;
  };
  const visited = new Array(n + 1).fill(false);
  return dfs(source, visited);
}
