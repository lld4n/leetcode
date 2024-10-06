function checkString(s: string): boolean {
  let flag = false;
  for (const letter of s) {
    if (letter === "b") {
      flag = true;
    }
    if (letter === "a" && flag) {
      return false;
    }
  }
  return true;
}
