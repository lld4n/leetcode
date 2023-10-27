type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  let result: { params: any; answer: any }[] = [];
  return function (...params) {
    for (let i = 0; i < result.length; i++) {
      if (result[i].params === params) {
        return result[i].answer;
      }
    }

    const answer = fn(params);
    result.push({ params, answer });
    return answer;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
