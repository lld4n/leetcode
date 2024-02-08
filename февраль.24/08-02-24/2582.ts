function passThePillow(n: number, time: number): number {
  let reverse = false;
  let i = 1;
  while (time !== 0) {
    if (i === n) {
      reverse = true;
    }
    if (i === 1) {
      reverse = false;
    }
    if (reverse) {
      time--;
      i--;
    } else {
      time--;
      i++;
    }
  }
  return i;
}
