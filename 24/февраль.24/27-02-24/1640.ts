function canFormArray(arr: number[], pieces: number[][]): boolean {
  if (
    !_.isEqual(
      [...arr].sort((a, b) => a - b),
      pieces.flat().sort((a, b) => a - b),
    )
  )
    return false;

  for (const p of pieces) {
    if (p.length > 1) {
      const index = arr.indexOf(p[0]);
      if (index === -1) return false;
      for (let i = 1; i < p.length; i++) {
        if (p[i] !== arr[index + i]) return false;
      }
    }
  }
  return true;
}
