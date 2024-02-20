const n = 5;
const arr: [number, number][] = [
  [1, 3],
  [4, 7],
  [1, 10],
  [3, 3],
  [3, 5],
  [3, 1],
  [10, 1],
];

for (const item of arr) {
  console.log("Item", item);
  const [n, m] = item;
  if (n === 1) {
    let best = 0;
    let div = Infinity;
    const S = (m * (m + 1)) / 2;
    const avg = Math.floor(S / 2);
    for (let i = m - 1; i >= 1; i--) {
      const b = (i * (i + 1)) / 2;
      const db = Math.abs(avg - b);
      if (db < div) {
        div = db;
        best = i;
      } else {
        break;
      }
    }
    console.log("V " + String(best + 1));
  } else if (m === 1) {
    let best = 0;
    let div = Infinity;
    const S = (n * (n + 1)) / 2;
    const avg = Math.floor(S / 2);
    for (let i = n - 1; i >= 1; i--) {
      const b = (i * (i + 1)) / 2;
      const db = Math.abs(avg - b);
      if (db < div) {
        div = db;
        best = i;
      } else {
        break;
      }
    }
    console.log("H " + String(best + 1));
  } else {
    const S = (m * n * (m * n + 1)) / 2;
    let sigma = 0;
    for (let i = 0; i < n; i++) {
      sigma += 1 + m * i;
    }
    const x = Math.floor((0.5 * S + n) / (sigma + n));
    const valueX = x * (sigma + n) - n;
    const divX = S - 2 * valueX;
    const ansY = solveQuadraticEquation(m ** 2, m, -S);
    if (ansY === null) {
      console.log("V " + String(x + 1));
    } else if (ansY.length === 1) {
      const y = ansY[0];
      const valueY = Math.floor((y * m * (y * m + 1)) / 2);
      const divY = S - 2 * valueY;
      if (divX < divY) {
        console.log("V " + String(x + 1));
      } else {
        console.log("H " + String(y + 1));
      }
    }
  }
}

function solveQuadraticEquation(
  A: number,
  B: number,
  C: number,
): number[] | null {
  const discriminant = B * B - 4 * A * C;
  if (discriminant < 0) {
    return null;
  } else {
    const x1 = Math.floor((-B + Math.sqrt(discriminant)) / (2 * A));
    const x2 = Math.floor((-B - Math.sqrt(discriminant)) / (2 * A));
    if (x1 <= 0 && x2 <= 0) {
      return null;
    } else if (x1 <= 0) {
      return [x2];
    } else if (x2 <= 0) {
      return [x1];
    } else {
      return [x1, x2];
    }
  }
}
