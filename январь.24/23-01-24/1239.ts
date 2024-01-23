function maxLength(arr: string[]): number {
  let ans = 0;
  const checkUnique = (str: string) => {
    const buffer = str
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    for (let i = 0; i < buffer.length - 1; i++) {
      if (buffer[i] === buffer[i + 1]) {
        return false;
      }
    }
    return true;
  };
  const dfs = (index: number, str: string) => {
    if (index >= arr.length) {
      return;
    } else {
      for (let i = index; i < arr.length; i++) {
        const item = str + arr[i];
        if (checkUnique(item)) {
          ans = Math.max(ans, item.length);
          dfs(i + 1, item);
        }
      }
    }
  };
  dfs(0, "");
  return ans;
}
