class KthLargest {
  nums: number[] = [];
  k: number;
  constructor(k: number, nums: number[]) {
    this.k = k;

    nums = nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i++) {
      if (i < k) {
        this.nums.push(nums[i]);
      }
    }
    this.nums = this.nums.reverse();
  }

  add(val: number): number {
    if (this.nums.length >= this.k && val < this.nums[0]) {
      return this.nums[0];
    } else {
      const left: number[] = [];
      const right: number[] = [];
      for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] < val) {
          left.push(this.nums[i]);
        } else {
          right.push(this.nums[i]);
        }
      }
      this.nums = [...left, val, ...right];
      while (this.nums.length !== this.k) {
        this.nums.shift();
      }
      return this.nums[0];
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
