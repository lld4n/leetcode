function areSimilar(mat: number[][], k: number): boolean {
  const q = k % mat[0].length;
  if (q === 0) return true;
  for (let i = 0; i < mat.length; i++) {
    if (i % 2 === 0) {
      const buffer: number[] = [];
      for (let j = q; j < mat[i].length; j++) {
        buffer.push(mat[i][j]);
      }
      for (let j = 0; j < q; j++) {
        buffer.push(mat[i][j]);
      }
      if (!equal(buffer, mat[i])) return false;
    } else {
      const buffer: number[] = [];
      for (let j = mat[i].length - q; j < mat[i].length; j++) {
        buffer.push(mat[i][j]);
      }
      for (let j = 0; j < mat[i].length - q; j++) {
        buffer.push(mat[i][j]);
      }
      if (!equal(buffer, mat[i])) return false;
    }
  }
  return true;
}

function equal(arr: number[], arr2: number[]) {
  if (arr.length !== arr2.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) return false;
  }
  return true;
}
