function chalkReplacer(chalk: number[], k: number): number {
  let i = 0;
  while (k >= chalk[i]) {
    k -= chalk[i];
    if (i < chalk.length - 1) i++;
    else i = 0;
  }
  return i % chalk.length;
}
