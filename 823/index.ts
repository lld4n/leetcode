function numFactoredBinaryTrees(arr: number[]): number {
  let obj = {};
  const mod = 10 ** 9 + 7;

  for (let el of arr) {
    obj[el] = 1;
  }
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0) {
        obj[arr[i] / arr[j]] =
          (obj[arr[i] / arr[j]] + obj[arr[j]] * obj[arr[i]]) % mod;
      }
    }
  }

  let result = 0;
  for (let k in obj) {
    result = (result + obj[k]) % mod;
  }
  return result;
}
