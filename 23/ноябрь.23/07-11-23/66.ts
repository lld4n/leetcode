function plusOne(digits: number[]): number[] {
  let buffer = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const buf = digits[i] + 1;
    digits[i] = buf % 10;
    buffer = Math.floor(buf / 10);
    if (buffer === 0) {
      break;
    }
  }
  if (buffer !== 0) {
    digits.unshift(buffer);
  }
  return digits;
}
