function largestSubmatrix(matrix: number[][]): number {
  let buffer: number[] = matrix[0];
  let answer = findMaxArea([...buffer].sort((a, b) => a - b));
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        buffer[j] = 0;
      } else {
        buffer[j] += 1;
      }
    }
    answer = Math.max(answer, findMaxArea([...buffer].sort((a, b) => a - b)));
  }
  return answer;
}

function findMaxArea(heights: number[]): number {
  let stack: [number, number][] = [];
  let answer = 0;
  for (let i = 0; i < heights.length; i++) {
    let pos = i;
    while (stack.length > 0 && stack[stack.length - 1][0] > heights[i]) {
      const pp = stack.pop();
      if (pp) {
        answer = Math.max(answer, pp[0] * (i - pp[1]));
        pos = Math.min(pos, pp[1]);
      }
    }
    stack.push([heights[i], pos]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    answer = Math.max(answer, stack[i][0] * (heights.length - stack[i][1]));
  }
  return answer;
}
