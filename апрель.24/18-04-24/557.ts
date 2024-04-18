function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");
}
