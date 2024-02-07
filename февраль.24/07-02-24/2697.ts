function makeSmallestPalindrome(s: string): string {
  const list = s.split("");
  for (let i = 0; i < Math.floor(list.length / 2); i++) {
    if (list[i] !== list[s.length - 1 - i]) {
      if (list[i].charCodeAt(0) < list[s.length - 1 - i].charCodeAt(0)) {
        list[s.length - 1 - i] = list[i];
      } else {
        list[i] = list[s.length - 1 - i];
      }
    }
  }
  return list.join("");
}
