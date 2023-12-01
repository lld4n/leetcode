function sortedSquares(nums: number[]): number[] {
  let i = -1;
  let answer: number[] = [];
  for (let el of nums) {
    if (el >= 0) {
      while (i >= 0 && positive(nums[i]) <= el) {
        answer.push(nums[i] ** 2);
        i--;
      }
      answer.push(el ** 2);
    } else {
      i++;
    }
  }
  while (i >= 0) {
    answer.push(nums[i] ** 2);
    i--;
  }
  return answer;
}

function positive(num: number): number {
  return num >= 0 ? num : -num;
}
