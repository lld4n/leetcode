/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let rows: number[] = [];
  let columns: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    }
  }
  console.log(rows, columns);
  for (let elem of rows) {
    for (let i = 0; i < matrix[elem].length; i++) {
      matrix[elem][i] = 0;
    }
  }

  for (let elem of columns) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][elem] = 0;
    }
  }
}
