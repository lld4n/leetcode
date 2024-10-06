function singleNumber(nums: number[]): number {
  let answer = 0;
  for (let el of nums) {
    answer ^= el;
  }
  return answer;
}
