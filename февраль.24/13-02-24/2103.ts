function countPoints(rings: string): number {
  const list: Set<string>[] = [];
  for (let i = 0; i < 10; i++) {
    list.push(new Set());
  }
  for (let i = 0; i < rings.length; i += 2) {
    list[Number(rings[i + 1])].add(rings[i]);
  }
  return list.filter((e) => e.size === 3).length;
}
