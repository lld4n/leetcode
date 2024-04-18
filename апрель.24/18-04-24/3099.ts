import _ from "lodash";
function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const s = _.sum(String(x).split("").map(Number));
  if (x % s === 0) return s;
  return -1;
}
