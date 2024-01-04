function minOperations(nums: number[]): number {
  const freqMap: Record<number, number> = {};

  // Count frequencies of each element
  nums.forEach((num) => {
    freqMap[num] = (freqMap[num] || 0) + 1;
  });

  let operations = 0;

  for (const freq of Object.values(freqMap)) {
    if (freq === 1) {
      // If any number appears only once, return -1
      return -1;
    }

    // Calculate the number of operations of type 2
    operations += Math.floor(freq / 3);

    // If 1 or 2 elements are left, perform an operation of type 1
    if (freq % 3 > 0) {
      operations++;
    }
  }

  return operations;
}
