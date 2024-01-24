function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => b - a);
  let maxSum = 0;
  let currentSum = 0;

  for (const satisfactionLevel of satisfaction) {
    currentSum += satisfactionLevel;
    if (currentSum > 0) {
      maxSum += currentSum;
    } else {
      break;
    }
  }

  return maxSum;
}
