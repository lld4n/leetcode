function canBeEqual(target: number[], arr: number[]): boolean {
  return _.isEqual(
    target.sort((a, b) => a - b),
    arr.sort((a, b) => a - b),
  );
}
