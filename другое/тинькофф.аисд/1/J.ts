const count = 5;
const arr: [number, number][] = [
  [1, 3],
  [4, 7],
  [1, 10],
  [3, 3],
  [3, 5],
  [3, 1],
  [10, 1],
];

function L(n: number, m: number, k: number) {
  return (((n - 1) * m * n + (k + 1) * n) * k) / 2;
}
function R(n: number, m: number, k: number) {
  return (((n - 1) * m * n + (k + 1 + m) * n) * (m - k)) / 2;
}

function U(n: number, m: number, k: number) {
  return ((k * m ** 2 + m) * k) / 2;
}

function D(n: number, m: number, k: number) {
  return (((k + n) * m ** 2 + m) * (n - k)) / 2;
}

function horizontal(n: number, m: number) {
  const binary = () => {
    let low = 1;
    let high = n;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (U(n, m, mid) <= D(n, m, mid)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low - 1;
  };
  const roots = findRoots(2 * m ** 2, 2 * m, -(n ** 2 * m ** 2) - n * m);
  if (roots.length === 1) {
    const k = Math.ceil(roots[0]);
    const div1 = Math.abs(D(n, m, k) - U(n, m, k));
    const div2 = Math.abs(U(n, m, k + 1) - D(n, m, k + 1));
    if (div1 < div2) {
      return [k, div1];
    } else {
      return [k + 1, div2];
    }
  } else {
    const k = binary();
    const div1 = Math.abs(D(n, m, k) - U(n, m, k));
    const div2 = Math.abs(U(n, m, k + 1) - D(n, m, k + 1));
    if (div1 < div2) {
      return [k, div1];
    } else {
      return [k + 1, div2];
    }
  }
}

function vertical(n: number, m: number) {
  const binary = () => {
    let low = 1;
    let high = m;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (L(n, m, mid) <= R(n, m, mid)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low - 1;
  };

  const roots = findRoots(
    -2 * n,
    2 * m * n - 2 * m * n ** 2 - 2 * n,
    m ** 2 * n ** 2 + m * n,
  );
  if (roots.length === 1) {
    const k = Math.ceil(roots[0]);
    const div1 = Math.abs(L(n, m, k) - R(n, m, k));
    const div2 = Math.abs(L(n, m, k + 1) - R(n, m, k + 1));
    if (div1 < div2) {
      return [k, div1];
    } else {
      return [k + 1, div2];
    }
  } else {
    const k = binary();
    const div1 = Math.abs(L(n, m, k) - R(n, m, k));
    const div2 = Math.abs(L(n, m, k + 1) - R(n, m, k + 1));
    if (div1 < div2) {
      return [k, div1];
    } else {
      return [k + 1, div2];
    }
  }
}

for (const item of arr) {
  const [n, m] = item;
  const vert = vertical(n, m);
  const hor = horizontal(n, m);
  if (vert[1] < hor[1]) {
    console.log("V " + String(vert[0] + 1));
  } else {
    console.log("H " + String(hor[0] + 1));
  }
}

function findRoots(A: number, B: number, C: number): number[] {
  const discriminant = B * B - 4 * A * C;
  if (discriminant > 0) {
    const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
    const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
    if (root1 < 0 && root2 < 0) {
      return [];
    } else if (root1 < 0) {
      return [root2];
    } else if (root2 < 0) {
      return [root1];
    } else {
      return [root1, root2];
    }
  } else if (discriminant === 0) {
    const root = -B / (2 * A);
    if (root < 0) {
      return [];
    } else {
      return [root];
    }
  } else {
    return [];
  }
}
