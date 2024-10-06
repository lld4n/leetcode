class MyQueue {
  list: number[];
  constructor() {
    this.list = [];
  }

  push(x: number): void {
    this.list.push(x);
  }

  pop(): number {
    return this.list.shift()!;
  }

  peek(): number {
    return this.list[0];
  }

  empty(): boolean {
    return this.list.length !== 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
