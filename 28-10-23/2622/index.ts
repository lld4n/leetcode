class TimeLimitedCache {
  obj: {
    [key: number]: {
      value: number;
      duration: number;
      created: number;
    };
  };
  constructor() {
    this.obj = {};
  }

  set(key: number, value: number, duration: number): boolean {
    if (this.obj[key]) {
      this.obj[key].value = value;
      this.obj[key].duration = duration;
      this.obj[key].created = new Date().getTime();
      return true;
    } else {
      this.obj[key] = {
        value: 0,
        duration: 0,
        created: 0,
      };
      this.obj[key].value = value;
      this.obj[key].duration = duration;
      this.obj[key].created = new Date().getTime();
      return false;
    }
  }

  get(key: number): number {
    const now = new Date().getTime();
    if (this.obj[key]) {
      if (now - this.obj[key].created <= this.obj[key].duration) {
        return this.obj[key].value;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }

  count(): number {
    let result = 0;
    const now = new Date().getTime();
    for (let key in this.obj) {
      if (now - this.obj[key].created <= this.obj[key].duration) {
        result++;
      }
    }
    return result;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
