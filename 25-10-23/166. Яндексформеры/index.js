/**
 * @param {number} N - целое число, количество сотрудников готовых к объединению
 * @param {number[]} staff - массив длины N с грейдами доступных сотрудников
 * @param {number} K - целое число, количество доступных клавиатур
 * @returns {number}
 */
module.exports = function (N, staff, K) {
  staff = staff.sort((a, b) => b - a);
  let x = 0;
  for (let i = 0; i < K; i++) {
    x += staff[i];
  }
  return x;
};
