function maxDivScore(nums: number[], divisors: number[]): number {
  let list: { or: number; count: number }[] = [];
  for (const div of divisors) {
    list.push({
      or: div,
      count: nums.filter((e) => e % div === 0).length,
    });
  }
  list = list.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    if (a.count < b.count) {
      return 1;
    }
    if (a.or < b.or) {
      return -1;
    }
    if (a.or > b.or) {
      return 1;
    }
    return 0;
  });
  console.log(list);
  return list[0].or;
}
