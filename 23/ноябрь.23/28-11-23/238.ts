function productExceptSelf(nums: number[]): number[] {
  let answer: number[] = [];
  let mul = 1;
  let count = 0;
  for (let el of nums) {
    if (el !== 0) {
      mul *= el;
    } else {
      count++;
    }
  }

  for (let el of nums) {
    if (count > 1) {
      answer.push(0);
    } else {
      if (el === 0) {
        answer.push(mul);
      } else if (count === 0) {
        answer.push(mul / el);
      } else {
        answer.push(0);
      }
    }
  }
  return answer;
}
