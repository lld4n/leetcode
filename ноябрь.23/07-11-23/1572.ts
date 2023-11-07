function diagonalSum(mat: number[][]): number {
  let left = -1;
  let right = mat.length;
  let result = 0;
  for (let i = 0; i < mat.length; i++) {
    left++;
    right--;
    if (right === left) result += mat[i][right];
    else result += mat[i][left] + mat[i][right];
  }
  return result;
}
