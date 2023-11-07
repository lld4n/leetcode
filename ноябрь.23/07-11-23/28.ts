function strStr(haystack: string, needle: string): number {
  const list = zfunction(needle + "#" + haystack);
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    if (list[i] === needle.length) {
      return i - needle.length - 1;
    }
  }
  return -1;
}

function zfunction(s: string) {
  let z: number[] = new Array(s.length).fill(0);
  let r = 0;
  let l = 0;
  for (let i = 1; i < s.length; i++) {
    if (i < r) {
      z[i] = Math.min(r - i, z[i - l]);
    }

    while (i + z[i] < s.length && s[i + z[i]] === s[z[i]]) {
      z[i]++;
    }
    if (i + z[i] > r) {
      l = i;
      r = i + z[i];
    }
  }
  return z;
}
