declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  let result: Record<string, any[]> = {};

  for (let el of this) {
    let key: string = fn(el);
    if (result[key]) {
      result[key].push(el);
    } else {
      result[key] = [el];
    }
  }
  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
export {};
