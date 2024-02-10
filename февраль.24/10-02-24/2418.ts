function sortPeople(names: string[], heights: number[]): string[] {
  let list: { n: string; h: number }[] = [];
  for (let i = 0; i < names.length; i++) {
    list.push({
      n: names[i],
      h: heights[i],
    });
  }
  list = list.sort((a, b) => b.h - a.h);
  return list.map((e) => e.n);
}
