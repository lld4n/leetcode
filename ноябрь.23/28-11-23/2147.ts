function numberOfWays(corridor: string): number {
  let indexS: number[] = [];
  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === "S") {
      indexS.push(i);
    }
  }
  if (indexS.length % 2 !== 0) return 0;
  if (indexS.length === 0) return 0;

  indexS.shift();
  indexS.pop();

  let answer = 1;
  let mod = 10 ** 9 + 7;
  for (let i = 0; i < indexS.length - 1; i += 2) {
    answer = (answer * (indexS[i + 1] - indexS[i])) % mod;
  }
  return answer;
}
