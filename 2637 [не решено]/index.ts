type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  const start = new Date().getTime();
  return async function (...args) {
    const now = new Date().getTime();
    if (now - start <= t) {
      return fn(args);
    } else {
      return "Time Limit Exceeded";
    }
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
