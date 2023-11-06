/** @returns Boolean */
module.exports = function (nums, k) {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    const wanted = k - nums[i];
    if (nums.includes(wanted, i + 1)) {
      return true;
    }
  }
  return false;
};
