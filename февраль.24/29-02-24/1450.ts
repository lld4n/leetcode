function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number,
): number {
  const l = Math.max(Math.max(...endTime) + 1, queryTime + 1);
  const list: number[] = new Array(l).fill(0);
  for (let i = 0; i < startTime.length; i++) {
    for (let j = startTime[i]; j <= endTime[i]; j++) {
      list[j]++;
    }
  }
  return list[queryTime];
}
