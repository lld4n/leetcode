function minFallingPathSum(matrix: number[][]): number {
  const mas: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    mas.push(new Array(matrix.length + 2).fill(Infinity));
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      mas[i][j + 1] = matrix[i][j];
    }
  }
  for (let i = mas.length - 2; i >= 0; i--) {
    for (let j = 1; j < mas[i].length - 1; j++) {
      mas[i][j] = Math.min(
        mas[i][j] + mas[i + 1][j - 1],
        mas[i][j] + mas[i + 1][j],
        mas[i][j] + mas[i + 1][j + 1],
      );
    }
  }
  let answer = Infinity;
  for (let i = 1; i < mas[0].length; i++) {
    answer = Math.min(answer, mas[0][i]);
  }
  return answer;
}
