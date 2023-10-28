declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number,
): number[][] {
  if (this.length !== rowsCount * colsCount) {
    return [];
  } else {
    let indexes: number[][] = [];
    for (let i = 0; i < colsCount; i++) {
      let indexesBuffer: number[] = [];

      if (i % 2 === 0) {
        for (let j = i * rowsCount; j < i * rowsCount + rowsCount; j++) {
          indexesBuffer.push(this[j]);
        }
      } else {
        for (let j = (i + 1) * rowsCount - 1; j >= i * rowsCount; j--) {
          indexesBuffer.push(this[j]);
        }
      }
      indexes.push(indexesBuffer);
    }
    const result: number[][] = [];
    for (let i = 0; i < rowsCount; i++) {
      let buffer: number[] = [];
      for (let j = 0; j < colsCount; j++) {
        buffer.push(indexes[j][i]);
      }
      result.push(buffer);
    }
    return result;
  }
};

export {};
