function rowAndMaximumOnes(mat: number[][]): number[] {
  const list: number[] = mat.map((e) => e.filter((i) => i === 1).length);
  return [list.indexOf(Math.max(...list)), Math.max(...list)];
}
