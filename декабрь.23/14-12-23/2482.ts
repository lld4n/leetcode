type gridType = {
  zero: number;
  one: number;
};
function onesMinusZeros(grid: number[][]): number[][] {
  let column: gridType[] = [];
  let row: gridType[] = [];
  for (let i = 0; i < grid.length; i++) {
    let buffer: gridType = {
      zero: 0,
      one: 0,
    };
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        buffer.one++;
      } else {
        buffer.zero++;
      }
    }
    row.push(buffer);
  }

  for (let j = 0; j < grid[0].length; j++) {
    let buffer: gridType = {
      zero: 0,
      one: 0,
    };
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j] === 1) {
        buffer.one++;
      } else {
        buffer.zero++;
      }
    }
    column.push(buffer);
  }
  let answer: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    let buffer: number[] = [];
    for (let j = 0; j < grid[i].length; j++) {
      let zeros = row[i].zero + column[j].zero;
      let ones = row[i].one + column[j].one;

      buffer.push(ones - zeros);
    }
    answer.push(buffer);
  }
  return answer;
}
