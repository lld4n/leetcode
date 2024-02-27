class OrderedStream {
  list: string[];
  cur: number;
  constructor(n: number) {
    this.list = new Array(n + 1).fill("");
    this.cur = 1;
  }

  insert(idKey: number, value: string): string[] {
    this.list[idKey] = value;
    const res: string[] = [];
    for (let i = this.cur; i < this.list.length; i++) {
      if (this.list[i] !== "") {
        res.push(this.list[i]);
        this.cur++;
      } else {
        break;
      }
    }
    return res;
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
