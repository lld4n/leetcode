function networkDelayTime(times: number[][], n: number, k: number): number {
  let b = [k];
  let result = 0;
  let used = new Set();
  while (b.length !== 0) {
    let buffer: number[] = [];
    let resultBuffer: number[] = [];
    for (let i = 0; i < b.length; i++) {
      for (let el of times) {
        if (el[0] === b[i] && !used.has(el[1])) {
          buffer.push(el[1]);
          resultBuffer.push(el[2]);
          used.add(el[1]);
        }
      }
    }
    if (resultBuffer.length > 0) {
      result += Math.max(...resultBuffer);
    }

    b = buffer;
  }
  if (result === 0) return -1;
  return result;
}
