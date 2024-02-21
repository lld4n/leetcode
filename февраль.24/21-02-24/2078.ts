function maxDistance(colors: number[]): number {
  let ans = -1;
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[j] !== colors[i]) {
        ans = Math.max(ans, Math.abs(j - i));
      }
    }
  }
  return ans;
}
