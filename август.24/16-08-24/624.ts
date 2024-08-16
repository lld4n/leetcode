function maxDistance(arrays: number[][]): number {
  let minNum = arrays[0][0];
  let maxNum = arrays[0][arrays[0].length - 1];
  let distance = 0;

  for (let i = 1; i < arrays.length; i++) {
    const first = arrays[i][0];
    const last = arrays[i][arrays[i].length - 1];

    distance = Math.max(
      distance,
      Math.abs(last - minNum),
      Math.abs(maxNum - first),
    );

    minNum = Math.min(minNum, first);
    maxNum = Math.max(maxNum, last);
  }

  return distance;
}
