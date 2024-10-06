function countSymmetricIntegers(low: number, high: number): number {
  let ans = 0;
  for (let i = low; i <= high; i++) {
    const str = String(i);
    if (str.length % 2 === 0) {
      let sumF = 0;
      for (let j = 0; j < str.length / 2; j++) {
        sumF += Number(str[j]);
      }
      let sumS = 0;
      for (let j = str.length / 2; j < str.length; j++) {
        sumS += Number(str[j]);
      }
      ans += sumS === sumF ? 1 : 0;
    }
  }
  return ans;
}
