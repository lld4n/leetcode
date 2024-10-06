function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string,
): number {
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const m = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const aa = m[Number(arriveAlice.split('-')[0])] + Number(arriveAlice.split('-')[1]);
  const la = m[Number(leaveAlice.split('-')[0])] + Number(leaveAlice.split('-')[1]);
  const ab = m[Number(arriveBob.split('-')[0])] + Number(arriveBob.split('-')[1]);
  const lb = m[Number(leaveBob.split('-')[0])] + Number(leaveBob.split('-')[1]);
  let ans = 0;
  for (let i = 0; i <= 365; i++) {
    if (i >= aa && i <= la && i >= ab && i <= lb) ans++;
  }
  return ans;
}
