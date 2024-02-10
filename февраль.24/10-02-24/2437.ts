function countTime(time: string): number {
  const list = time.split(":");
  let left = 0;
  if (list[0][0] === "?" && list[0][1] === "?") {
    left = 24;
  } else if (list[0][0] === "?") {
    for (let i = 0; i <= 9; i++) {
      const buffer = Number(String(i) + list[0][1]);
      if (buffer >= 0 && buffer <= 23) {
        left++;
      }
    }
  } else if (list[0][1] === "?") {
    for (let i = 0; i <= 9; i++) {
      const buffer = Number(list[0][0] + String(i));
      if (buffer >= 0 && buffer <= 23) {
        left++;
      }
    }
  } else {
    left = 1;
  }
  let right = 0;
  if (list[1][0] === "?" && list[1][1] === "?") {
    right = 60;
  } else if (list[1][0] === "?") {
    for (let i = 0; i <= 9; i++) {
      const buffer = Number(String(i) + list[1][1]);
      if (buffer >= 0 && buffer <= 59) {
        right++;
      }
    }
  } else if (list[1][1] === "?") {
    for (let i = 0; i <= 9; i++) {
      const buffer = Number(list[1][0] + String(i));
      if (buffer >= 0 && buffer <= 59) {
        right++;
      }
    }
  } else {
    right = 1;
  }
  return left * right;
}
