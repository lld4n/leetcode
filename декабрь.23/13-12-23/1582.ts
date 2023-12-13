function numSpecial(mat: number[][]): number {
  let elements: [number, number][] = [];

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    let column = -1;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
        column = j;
      }
    }
    if (count === 1) {
      elements.push([i, column]);
    }
  }
  let answer = 0;
  for (let elem of elements) {
    answer += checkColumn(mat, elem[1]);
  }
  return answer;
}

function checkColumn(mat: number[][], index: number) {
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][index]) {
      count++;
    }
  }
  return count === 1 ? 1 : 0;
}
