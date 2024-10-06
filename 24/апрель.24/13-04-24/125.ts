function isPalindrome(s: string): boolean {
  s = s
    .toLowerCase()
    .split("")
    .filter((e) => /(\d|[a-zA-Z])/.test(e))
    .join("");
  return s === s.split("").reverse().join("");
}
