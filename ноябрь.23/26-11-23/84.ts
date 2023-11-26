// function largestRectangleArea(heights: number[]): number {
//   let bufferHeights: number[] = [];
//   let bufferPos: number[] = [];
//   let answer: number = 0;
//   for (let i = 0; i < heights.length; i++) {
//     if (bufferHeights.length === 0) {
//       bufferHeights.unshift(heights[i]);
//       bufferPos.unshift(0);
//     } else if (heights[i] >= bufferHeights[0]) {
//       bufferHeights.unshift(heights[i]);
//       bufferPos.unshift(bufferPos[0] + 1);
//     } else {
//       while (bufferHeights.length > 0 && heights[i] < bufferHeights[0]) {
//         const h = bufferHeights.shift();
//         const p = bufferPos.shift();
//         if (h && p) {
//           answer = Math.max(answer, h * (i - p));
//         }
//       }
//       if (bufferHeights.length === 0) {
//         bufferHeights.unshift(heights[i]);
//         bufferPos.unshift(0);
//       } else {
//         bufferHeights.unshift(heights[i]);
//         bufferPos.unshift(bufferPos[0] + 1);
//       }
//     }
//   }
//   return answer;
// }

function largestRectangleArea(heights: number[]): number {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < heights.length; i++) {
    let idx = i;
    while (stack.length > 0 && stack[stack.length - 1][0] > heights[i]) {
      const popped = stack.pop();
      // @ts-ignore
      answer = Math.max(answer, (i - popped[1]) * popped[0]);
      // @ts-ignore
      idx = Math.min(popped[1], idx);
    }
    stack.push([heights[i], idx]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    answer = Math.max(answer, (heights.length - stack[i][1]) * stack[i][0]);
  }

  return answer;
}
