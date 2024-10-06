function canThreePartsEqualSum(arr: number[]): boolean {
  let os = _.sum(arr);
  if (os % 3 !== 0) return false;
  os = Math.floor(os / 3);
  let f = 0;
  for (let i = 0; i < arr.length; i++) {
    f += arr[i];
    if (f === os && i < arr.length - 2) {
      let s = 0;
      for (let j = i + 1; j < arr.length; j++) {
        s += arr[i];
        if (s === os && j < arr.length - 1) return true;
      }
    }
  }
  return false;
}
