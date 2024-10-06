function knightDialer(n: number): number {
  const map: number[][] = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [0, 3, 9],
    [],
    [0, 1, 7],
    [2, 6],
    [1, 3],
    [2, 4],
  ];
  let answer = 0;
  let mod = 10 ** 9 + 7;
  for (let i = 0; i <= 9; i++) {
    let array: number[] = new Array(10).fill(0);
    array[i] = 1;

    for (let j = 1; j < n; j++) {
      let arrayBuffer: number[] = new Array(10).fill(0);
      for (let k = 0; k < array.length; k++) {
        map[k].forEach((elem) => {
          arrayBuffer[elem] = (arrayBuffer[elem] + array[k]) % mod;
        });
      }
      array = [...arrayBuffer];
    }

    for (let j = 0; j < array.length; j++) {
      answer = (answer + array[j]) % mod;
    }
  }
  return answer;
}
