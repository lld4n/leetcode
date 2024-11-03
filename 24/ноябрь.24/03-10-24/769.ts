function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  let c = s.length;
  const arr = s.split("");

  while (c > 0) {
    const first = arr.shift();
    arr.push(first!);

    if (arr.join("") === goal) {
      return true;
    }

    c--;
  }

  return false;
}
