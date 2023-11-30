function findMaxAverage(nums: number[], k: number): number {
  let answer = -Infinity;
  let list: number[] = [];
  let sum = 0;
  for (let i = 0; i < k; i++) {
    list.push(nums[i]);
    sum += nums[i];
  }
  answer = Math.max(sum / k, answer);

  for (let i = k; i < nums.length; i++) {
    const b = list.shift();
    list.push(nums[i]);
    if (b) sum -= b;
    sum += nums[i];
    answer = Math.max(sum / k, answer);
  }
  return answer;
}
