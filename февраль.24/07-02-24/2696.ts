function minLength(s: string): number {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "B") {
      const lst = stack.pop();
      if (lst === undefined) {
        stack.push(s[i]);
      } else if (lst !== "A") {
        stack.push(lst);
        stack.push(s[i]);
      }
    } else if (s[i] === "D") {
      const lst = stack.pop();
      if (lst === undefined) {
        stack.push(s[i]);
      } else if (lst !== "C") {
        stack.push(lst);
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length;
}
