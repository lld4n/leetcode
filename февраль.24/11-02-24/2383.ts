function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[],
): number {
  let ans = 0;
  const ener = _.sum(energy) - initialEnergy;
  if (ener > 0) ans += ener;
  const div: number[] = [];
  let buffer = initialExperience;
  for (const exp of experience) {
    if (buffer >= exp) {
      div.push(0);
    } else {
      div.push(exp - buffer);
    }
    buffer += exp;
  }
  ans += Math.max(...div);
  return ans;
}
