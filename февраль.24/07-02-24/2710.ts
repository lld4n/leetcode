function removeTrailingZeros(num: string): string {
  const list: string[] = num.split("");
  let l = list.pop();
  while (l === "0") {
    l = list.pop();
  }
  list.push(l);
  return list.join("");
}
