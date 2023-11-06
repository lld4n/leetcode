type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timeo;
  return function (...args) {
    if (timeo !== undefined) clearTimeout(timeo);
    timeo = setTimeout(() => {
      fn(...args);
    }, t);
  };
}
