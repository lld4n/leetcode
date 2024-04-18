function constructRectangle(area: number): number[] {
  let l = 1;
  let list: [number, number][] = [];
  while (l <= area) {
    if (area % l === 0) {
      const w = Math.floor(area / l);
      if (l >= w) {
        list.push([l, w]);
      }
    }
    l++;
  }
  list = list.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  return list[0];
}
