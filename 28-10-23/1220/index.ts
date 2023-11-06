function countVowelPermutation(n: number): number {
  let answer: {
    [key: string]: number;
  } = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  const mod = 10 ** 9 + 7;
  let keys: {
    [key: string]: string[];
  } = {
    a: ["e"],
    e: ["a", "i"],
    i: ["a", "e", "o", "u"],
    o: ["i", "u"],
    u: ["a"],
  };

  while (n !== 1) {
    let pys: {
      [key: string]: number;
    } = {};
    for (let key in answer) {
      let buffer = 0;
      for (let el of keys[key]) {
        buffer = (buffer + answer[el]) % mod;
      }
      pys[key] = buffer;
    }

    answer = pys;

    n--;
  }
  let res = 0;
  for (let key in answer) {
    res = (res + answer[key]) % mod;
  }
  return res;
}
