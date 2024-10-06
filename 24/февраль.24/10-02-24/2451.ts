function oddString(words: string[]): string {
  const alp = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let dif: string[] = [];
  for (const word of words) {
    let buffer = "";
    for (let i = 0; i < word.length - 1; i++) {
      buffer += String(alp[word[i + 1]] - alp[word[i]]);
    }
    dif.push(buffer);
  }
  for (let i = 0; i < dif.length; i++) {
    const lst = dif.lastIndexOf(dif[i]);
    const frs = dif.indexOf(dif[i]);
    if (lst === i && frs === i) {
      return words[i];
    }
  }
  return "";
}
