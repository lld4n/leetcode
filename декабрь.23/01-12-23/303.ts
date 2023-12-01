class NumArray {
  prefix: number[];
  constructor(nums: number[]) {
    let s = 0;
    let prefix: number[] = [];
    for (let el of nums) {
      s += el;
      prefix.push(s);
    }
    this.prefix = prefix;
  }

  sumRange(left: number, right: number): number {
    if (left === 0) {
      return this.prefix[right];
    }
    return this.prefix[right] - this.prefix[left - 1];
  }
}
