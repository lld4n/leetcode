function numDifferentIntegers(word: string): number {
  const set: Set<string> = new Set();
  let b = "";
  for (let i = 0; i < word.length; i++) {
    if (/\d/g.test(word[i])) {
      b += word[i];
    } else {
      if (b) {
        let res = "";
        let flag = false;
        for (const l of b) {
          if (l !== "0") {
            flag = true;
            res += l;
          } else {
            if (flag) {
              res += l;
            }
          }
        }
        set.add(res);
      }
      b = "";
    }
  }
  if (b) {
    let res = "";
    let flag = false;
    for (const l of b) {
      if (l !== "0") {
        flag = true;
        res += l;
      } else {
        if (flag) {
          res += l;
        }
      }
    }
    set.add(res);
  }
  return set.size;
}
