function areaOfMaxDiagonal(dimensions: [number, number][]): number {
  let list: { a: number; d: number }[] = [];
  for (const di of dimensions) {
    list.push({
      a: di[0] * di[1],
      d: Math.sqrt(di[0] ** 2 + di[1] ** 2),
    });
  }

  list = list.sort((a, b) => {
    if (a.d > b.d) {
      return -1;
    }
    if (a.d < b.d) {
      return 1;
    }
    if (a.a > b.a) {
      return -1;
    }
    if (a.a < b.a) {
      return 1;
    }
    return 0;
  });
  return list[0].a;
}
