function slowestKey(
  releaseTimes: number[],
  keysPressed: string,
): string {
  const keys = keysPressed.split("");
  keys.unshift("_");
  releaseTimes.unshift(0);
  let ans = 0;
  let cur = "";

  for (let i = 1; i < releaseTimes.length; i++) {
    const time = releaseTimes[i] - releaseTimes[i - 1];
    if (time > ans) {
      ans = time;
      cur = keys[i];
    } else if (time === ans) {
      if (cur.charCodeAt(0) < keys[i].charCodeAt(0)) {
        cur = keys[i];
      }
    }
  }
  console.log(ans);
  return cur;
}
