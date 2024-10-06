function findChampion(grid: number[][]): number {
  const list = grid.map((el) =>
    el.reduce((previousValue, currentValue) => previousValue + currentValue, 0),
  );
  return list.findIndex((it) => it === Math.max(...list));
}
