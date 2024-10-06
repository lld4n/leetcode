function reductionOperations(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let answer = 0;
  let map: {
    [key: number]: number;
  } = {};

  for (let el of nums) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }

  let list = Object.keys(map);
  if (list.length === 1) return 0;
  for (let i = 1; i < list.length; i++) {
    answer += map[Number(list[i])] * i;
  }

  return answer;
}
