function removeDigit(number: string, digit: string): string {
  const list: string[] = number.split("");
  let ans: string[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] === digit) {
      ans.push([...list.slice(0, i), ...list.slice(i + 1)].join(""));
    }
  }
  ans = ans.sort();
  return ans.pop()!;
}
