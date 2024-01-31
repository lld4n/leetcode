function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [0];
  const ans = new Array(temperatures.length).fill(0);
  for (let i = 1; i < temperatures.length; i++) {
    let last = stack.pop();
    if (temperatures[i] <= temperatures[last!]) {
      stack.push(last!);
      stack.push(i);
    } else {
      while (temperatures[last!] < temperatures[i]) {
        ans[last!] = i - last!;
        last = stack.pop();
      }
      if (temperatures[i] <= temperatures[last!]) {
        stack.push(last!);
      }
      stack.push(i);
    }
  }
  return ans;
}
