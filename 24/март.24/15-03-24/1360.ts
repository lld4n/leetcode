function daysBetweenDates(date1: string, date2: string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.abs(
    (d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24),
  );
}
