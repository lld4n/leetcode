function maxUniqueSplit(s: string): number {
  const f = (q: string, set: string[]): number => {
    if (q.length === 0) {
      return set.length;
    }

    let ans = -1;

    for (let i = 0; i < q.length; i++) {
      const buffer = q.substring(0, i + 1);

      if (buffer.length === 0) {
        continue;
      }

      if (set.includes(buffer)) {
        continue;
      }

      ans = Math.max(ans, f(q.substring(i + 1), [...set, buffer]));
    }

    return ans;
  };

  return f(s, []);
}
