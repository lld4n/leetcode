function findDiagonalOrder(nums: number[][]): number[] {
  const map = new Map<number, number[]>();
  nums.forEach((row, i) =>
    row.forEach((num, j) =>
      map.has(i + j) ? map.get(i + j).unshift(num) : map.set(i + j, [num]),
    ),
  );
  return [].concat(...Array.from(map.values()));
}
