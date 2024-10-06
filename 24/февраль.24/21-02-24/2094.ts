function findEvenNumbers(digits: number[]): number[] {
  const ans: Set<number> = new Set();

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (i !== j && j !== k && i !== k && digits[i] !== 0) {
          const b = Number(
            String(digits[i]) + String(digits[j]) + String(digits[k]),
          );
          if (b % 2 === 0) {
            ans.add(b);
          }
        }
      }
    }
  }
  return Array.from(ans).sort((a, b) => a - b);
}
