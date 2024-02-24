function squareIsWhite(coordinates: string): boolean {
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  return (
    (map[coordinates.split("")[0]] +
      Number(coordinates.split("")[1])) %
      2 !==
    0
  );
}
