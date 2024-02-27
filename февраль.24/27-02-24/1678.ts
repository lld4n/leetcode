function interpret(command: string): string {
  return command
    .replace(/\(\)/g, "o")
    .replace(/\(/g, "_")
    .replace(/\)/g, "_")
    .split("_")
    .filter((e) => e !== "")
    .join("");
}
