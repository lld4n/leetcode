function minOperations(logs: string[]): number {
  logs = logs.map((e) => e.replace("/", ""));
  const list: string[] = [""];
  for (const l of logs) {
    if (l === "..") {
      if (list.length > 1) list.pop();
    } else if (l !== ".") {
      list.push(l);
    }
  }
  return list.length - 1;
}
