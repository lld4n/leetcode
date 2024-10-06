import _ from "lodash";

function checkPerfectNumber(num: number): boolean {
  if (num === 1) return false;
  const set: Set<number> = new Set<number>([1]);
  for (let i = 2; i < num ** 0.5 + 1; i++) {
    if (num % i === 0) {
      set.add(Math.floor(num / i));
      set.add(i);
    }
  }
  return _.sum(Array.from(set)) === num;
}
