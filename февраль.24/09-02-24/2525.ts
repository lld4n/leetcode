function categorizeBox(
  length: number,
  width: number,
  height: number,
  mass: number,
): string {
  let bulky = false;
  let heavy = false;
  if (
    length >= 10 ** 4 ||
    width >= 10 ** 4 ||
    height >= 10 ** 4 ||
    mass >= 10 ** 4 ||
    length * width * height >= 10 ** 9
  ) {
    bulky = true;
  }
  if (mass >= 100) heavy = true;

  if (bulky && heavy) return "Both";
  if (!bulky && !heavy) return "Neither";
  if (bulky) return "Bulky";
  return "Heavy";
}
