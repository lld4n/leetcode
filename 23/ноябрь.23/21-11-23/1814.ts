function countNicePairs(nums: number[]): number {
  let map: {
    [key: number]: number;
  } = {};
  let count = 0;
  let mod = 10 ** 9 + 7;
  for (let el of nums) {
    const b = el - rev(el);
    if (map[b]) {
      count = (count + map[b]) % mod;
      map[b]++;
    } else {
      map[b] = 1;
    }
  }

  return count;
}

function rev(num: number) {
  return Number(String(num).split("").reverse().join(""));
}
