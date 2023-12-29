function minDifficulty(jobDifficulty: number[], d: number): number {
  if (jobDifficulty.length < d) return -1;

  function backtrack(
    i: number,
    remDays: number,
    dayDifficulty: number,
    memo: Record<string, number> = {},
  ): number {
    if (jobDifficulty.length - i < remDays || remDays < 0) return Infinity; // not enough jobs for remaining days or no more days
    if (i === jobDifficulty.length && remDays === 0) return dayDifficulty; // distributed last job to the last day

    const memoKey = `${remDays}_${i}_${dayDifficulty}`;
    if (memo[memoKey] !== undefined) return memo[memoKey];

    const val = Math.min(
      backtrack(
        i + 1,
        remDays,
        Math.max(dayDifficulty, jobDifficulty[i]),
        memo,
      ), // continue in the same day
      dayDifficulty + backtrack(i + 1, remDays - 1, jobDifficulty[i], memo), // move to the next day
    );

    memo[memoKey] = val;

    return val;
  }

  return backtrack(1, d - 1, jobDifficulty[0]);
}
