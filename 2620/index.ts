function createCounter(n: number): () => number {
  let b = n;
  return function () {
    return b++;
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
