function simplifyPath(path: string): string {
  const stack: string[] = [];

  const p = path.split("/");

  for (const el of p) {
    if (el === "" || el === ".") {
      continue;
    }

    if (el === "..") {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(el);
    }
  }

  return "/" + stack.join("/");
}
