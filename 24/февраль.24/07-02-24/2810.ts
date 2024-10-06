function finalString(s: string): string {
  let list: string[] = [];
  for (const item of s) {
    if (item === "i") {
      list = list.reverse();
    } else {
      list.push(item);
    }
  }
  return list.join("");
}
