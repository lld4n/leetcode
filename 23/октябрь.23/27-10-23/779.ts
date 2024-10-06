function kthGrammar(n: number, k: number): number {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    const string = "01";
    return Number(string[k]);
  } else if (n === 3) {
    const string = "0110";
    return Number(string[k]);
  } else {
    k = k % 8;
    const string = "01101001";
    return Number(string[k]);
  }
}
