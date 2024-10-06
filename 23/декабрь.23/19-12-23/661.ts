let list: [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
function imageSmoother(img: number[][]): number[][] {
  img.push(new Array(img[0].length).fill(-1));
  img.unshift(new Array(img[0].length).fill(-1));
  for (let i = 1; i < img.length - 1; i++) {
    img[i].push(-1);
    img[i].unshift(-1);
  }
  let answer: number[][] = [];
  for (let i = 1; i < img.length - 1; i++) {
    let buffer: number[] = [];
    for (let j = 1; j < img[i].length - 1; j++) {
      let ss = 0;
      let count = 0;
      for (let element of list) {
        if (img[i + element[0]][j + element[1]] >= 0) {
          ss += img[i + element[0]][j + element[1]];
          count++;
        }
      }
      buffer.push(Math.floor(ss / count));
    }
    answer.push(buffer);
  }
  return answer;
}
