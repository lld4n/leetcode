function romanToInt(s: string): number {
  let double = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 500,
    CM: 900,
  };
  let single = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let i = 0;
  while (i < s.length) {
    if (double[s[i] + s[i + 1]]) {
      result += double[s[i] + s[i + 1]];
      i += 2;
    } else {
      result += single[s[i]];
      i++;
    }
  }
  return result;
}
