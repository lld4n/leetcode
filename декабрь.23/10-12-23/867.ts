function transpose(matrix: number[][]): number[][] {
  let answer: number[][] = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let buffer: number[] = [];
    for (let j = 0; j < matrix.length; j++) {
      buffer.push(matrix[j][i]);
    }
    answer.push(buffer);
  }
  return answer;
}
