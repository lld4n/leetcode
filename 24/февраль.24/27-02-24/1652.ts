function decrypt(code: number[], k: number): number[] {
  const yes = Math.abs(k);
  const n = code.length;
  const list = [...code, ...code, ...code];
  const c = (i: number): number => {
    if (k < 0) {
      return _.sum(list.slice(i + n - yes, i + n));
    } else if (k > 0) {
      return _.sum(list.slice(i + n, i + n + yes));
    } else {
      return 0;
    }
  };

  const ans: number[] = [];
  for (let i = 0; i < code.length; i++) {
    ans.push(c(i));
  }
  return ans;
}
