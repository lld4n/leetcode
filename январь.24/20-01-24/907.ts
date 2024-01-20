function sumSubarrayMins(arr: number[]): number {
  let ans = 0;
  let mod = 1e9 + 7;
  let stack = [-1]; // handle array index out boundary at begining
  arr.push(-Infinity); // handle array index out boundary at end
  for (let i = 0; i < arr.length; i++) {
    while (arr[stack[stack.length - 1]] > arr[i]) {
      let idx = stack.pop();
      // arr[i]*right*left
      ans += arr[idx] * (i - idx) * (idx - stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return ans % mod;
}
