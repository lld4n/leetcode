function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let list: number[] = [];
  let sum = 0;
  for (let i = 0; i < k; i++) {
    list.push(arr[i]);
    sum += arr[i];
  }
  let count = sum / k >= threshold ? 1 : 0;
  for (let i = k; i < arr.length; i++) {
    const b = list.shift();
    if (b) sum -= b;
    list.push(arr[i]);
    sum += arr[i];
    count += sum / k >= threshold ? 1 : 0;
  }
  return count;
}
