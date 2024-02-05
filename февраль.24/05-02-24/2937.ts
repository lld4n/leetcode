function findMinimumOperations(s1: string, s2: string, s3: string): number {
  let index = -1;
  for (let i = 0; i < Math.min(s1.length, s2.length, s3.length); i++) {
    if (s1[i] === s2[i] && s3[i] === s2[i]) index = i;
    else break;
  }
  if (index === -1) return -1;
  return (
    s1.length - index - 1 + (s2.length - index - 1) + (s3.length - index - 1)
  );
}
