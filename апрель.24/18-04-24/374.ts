/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const guess = function (num: number): number {
  return 0;
};
function guessNumber(n: number): number {
  let l = 1;
  let r = n;
  while (l < r) {
    const m = Math.floor((r + l) / 2);
    const g = guess(m);
    if (g === 0) return m;
    else if (g < 0) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
}
