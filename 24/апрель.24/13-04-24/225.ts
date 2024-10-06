class MyStack {
  queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    const buffer: number[] = [];
    while (this.queue.length !== 1) {
      buffer.push(this.queue.shift()!);
    }
    const top = this.queue.shift()!;
    this.queue = buffer;
    return top;
  }

  top(): number {
    const buffer: number[] = [];
    while (this.queue.length !== 1) {
      buffer.push(this.queue.shift()!);
    }
    const top = this.queue.shift()!;
    buffer.push(top);
    this.queue = buffer;
    return top;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
