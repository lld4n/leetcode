function kthDistinct(arr: string[], k: number): string {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const s = arr.indexOf(arr[i]);
    const e = arr.lastIndexOf(arr[i]);
    if (s === e) {
      count++;
      if (count === k) return arr[i];
    }
  }
  return "";
}
