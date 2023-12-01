function findDisappearedNumbers(nums: number[]): number[] {
  let map: {
    [key: number]: number;
  } = {};
  for (let i = 1; i <= nums.length; i++) {
    map[i] = 0;
  }

  for (let el of nums) {
    map[el]++;
  }
  let answer: number[] = [];
  for (let key in map) {
    if (map[key] === 0) answer.push(Number(key));
  }
  return answer;
}
