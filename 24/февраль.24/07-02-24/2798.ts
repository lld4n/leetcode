function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number,
): number {
  return hours.filter((e) => e >= target).length;
}
