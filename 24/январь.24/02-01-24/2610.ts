function findMatrix(nums: number[]): number[][] {
  let answer: number[][] = [[]];
  for (const elem of nums) {
    let flag = true;
    for (let i = 0; i < answer.length; i++) {
      if (!answer[i].includes(elem)) {
        answer[i].push(elem);
        flag = false;
        break;
      }
    }
    if (flag) {
      answer.push([elem]);
    }
  }
  return answer;
}
