function reformatNumber(number: string): string {
  const list: string[] = [];
  for (const l of number) {
    if (/\d/g.test(l)) list.push(l);
  }
  const ans: string[] = [];
  while (list.length > 0) {
    if (list.length === 4) {
      ans.push(list.shift()!);
      ans.push(list.shift()!);
      ans.push("-");
      ans.push(list.shift()!);
      ans.push(list.shift()!);
      ans.push("-");
    } else if (list.length === 3) {
      ans.push(list.shift()!);
      ans.push(list.shift()!);
      ans.push(list.shift()!);
      ans.push("-");
    } else if (list.length === 2) {
      ans.push(list.shift()!);
      ans.push(list.shift()!);
      ans.push("-");
    } else if (list.length > 4) {
      ans.push(list.shift()!);
      ans.push(list.shift()!);
      ans.push(list.shift()!);
      ans.push("-");
    }
  }

  if (ans[ans.length - 1] === "-") {
    ans.pop();
  }
  return ans.join("");
}
