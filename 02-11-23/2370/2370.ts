function longestIdealString(s: string, k: number): number {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const buff: {
    [key: string]: number;
  } = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < s.length; i++) {
    const index = alphabet.findIndex((el) => el === s[i]);
    let buffer = [];
    for (let j = 1; j <= k; j++) {
      if (alphabet[index + j]) {
        buffer.push(alphabet[index + j]);
      }
      if (alphabet[index - j]) {
        buffer.push(alphabet[index - j]);
      }
    }
    buffer = buffer.map((el) => buff[el]);
    buff[s[i]] = Math.max(...buffer) + 1;
  }
  let mm = -1;
  for (let key in buff) {
    mm = Math.max(mm, buff[key]);
  }
  return mm;
}
