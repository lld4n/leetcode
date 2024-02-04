function triangleType(nums: [number, number, number]): string {
  if (nums.every((el) => el === nums[0])) return "equilateral";

  if (
    nums[0] + nums[1] > nums[2] &&
    nums[0] + nums[2] > nums[1] &&
    nums[1] + nums[2] > nums[0]
  ) {
    if (nums[0] === nums[1]) {
      return "isosceles";
    }
    if (nums[0] === nums[2]) {
      return "isosceles";
    }
    if (nums[1] === nums[2]) {
      return "isosceles";
    }
    return "scalene";
  }
  return "none";
}
