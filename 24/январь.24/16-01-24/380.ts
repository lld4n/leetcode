class RandomizedSet {
  private set: Set<number>;
  private array: number[];

  constructor() {
    this.set = new Set<number>();
    this.array = [];
  }

  insert(val: number): boolean {
    if (this.set.has(val)) {
      return false;
    }
    this.set.add(val);
    this.array.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.set.has(val)) {
      return false;
    }
    this.set.delete(val);
    const index = this.array.indexOf(val);
    this.array[index] = this.array[this.array.length - 1];
    this.array.pop();
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
  }
}
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
