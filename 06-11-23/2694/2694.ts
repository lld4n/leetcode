type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};
type mapType = {
  [key: string]: {
    func: Callback;
    index: number;
  }[];
};
class EventEmitter {
  map: mapType;
  index: number;
  indexes: number[];
  constructor() {
    this.map = {};
    this.index = 0;
    this.indexes = [];
  }
  subscribe(eventName: string, callback: Callback): Subscription {
    if (this.map[eventName]) {
      this.map[eventName].push({
        func: callback,
        index: this.index,
      });
    } else {
      this.map[eventName] = [
        {
          func: callback,
          index: this.index,
        },
      ];
    }
    this.index++;

    let indexBuffer = this.index - 1;
    return {
      unsubscribe: () => {
        this.indexes.push(indexBuffer);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (this.map[eventName]) {
      let result: any[] = [];
      for (let el of this.map[eventName]) {
        if (!this.indexes.includes(el.index)) {
          result.push(el.func(...args));
        }
      }
      return result;
    } else {
      return [];
    }
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
