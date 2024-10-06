function maximumUnits(
  boxTypes: number[][],
  truckSize: number,
): number {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  let ans = 0;
  for (const [c, items] of boxTypes) {
    if (c <= truckSize) {
      truckSize -= c;
      ans += c * items;
    } else {
      ans += truckSize * items;
      truckSize = 0;
      break;
    }
  }
  return ans;
}
