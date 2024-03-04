class Heap {
  array: number[];
  constructor() {
    this.array = [];
  }

  add(item: number) {
    this.array.push(item);
    this.up(this.array.length - 1);
  }

  up(index: number) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.array[parentIndex] < this.array[index]) {
      [this.array[parentIndex], this.array[index]] = [
        this.array[index],
        this.array[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove() {
    const max = this.array[0];
    this.array[0] = this.array.pop()!;
    this.down(0);
    return max;
  }

  down(index: number) {
    let cur = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let ind = index;
    if (
      left < this.array.length &&
      this.array[left] > this.array[cur]
    ) {
      cur = left;
    }

    if (
      right < this.array.length &&
      this.array[right] > this.array[cur]
    ) {
      cur = right;
    }

    if (cur !== index) {
      [this.array[index], this.array[cur]] = [
        this.array[cur],
        this.array[index],
      ];
      this.down(cur);
    }
  }
}
