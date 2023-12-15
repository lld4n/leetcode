function destCity(paths: [string, string][]): string {
  const end = paths.map((el) => el[1]);
  const start = paths.map((el) => el[0]);

  for (let el of end) {
    if (!start.includes(el)) {
      return el;
    }
  }
  return "";
}
