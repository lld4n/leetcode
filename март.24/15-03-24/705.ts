class MyHashSet {
  map: { [key: number]: number };
  constructor() {
    this.map = {};
  }

  add(key: number): void {
    this.map[key] = 1;
  }

  remove(key: number): void {
    delete this.map[key];
  }

  contains(key: number): boolean {
    return Boolean(this.map[key]);
  }
}
