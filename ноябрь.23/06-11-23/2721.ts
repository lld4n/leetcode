type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    let result = new Array<T>(functions.length);
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((res) => {
          result[i] = res;
          if (i === functions.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
