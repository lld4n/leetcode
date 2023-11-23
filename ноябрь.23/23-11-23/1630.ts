function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[],
): boolean[] {
  let answer: boolean[] = [];
  for (let i = 0; i < l.length; i++) {
    let list = [];
    for (let j = l[i]; j <= r[i]; j++) {
      list.push(nums[j]);
    }

    list = list.sort((a, b) => a - b);
    answer.push(checkArif(list));
  }
  return answer;
}

function checkArif(list: number[]) {
  if (list.length < 2) return false;
  let b = list[1] - list[0];

  for (let i = 1; i < list.length - 1; i++) {
    if (b !== list[i + 1] - list[i]) return false;
  }

  return true;
}
