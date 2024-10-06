function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
    } else if (s[i] === '[') {
      stack.push('[');
    } else if (s[i] === '{') {
      stack.push('{');
    } else if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    } else if (s[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        return false;
      }
    } else if (s[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
