function countGoodRectangles(rectangles: number[][]): number {
  return rectangles
    .map((e) => Math.min(...e))
    .filter(
      (e) => e === Math.max(...rectangles.map((e) => Math.min(...e))),
    ).length;
}
