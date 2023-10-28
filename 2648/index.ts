function* fibGenerator(): Generator<number, any, number> {
  let index = 0;
  let arr = [0, 1, 1];
  while (true) {
    if (index > 2) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    yield arr[index];
    index++;
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
