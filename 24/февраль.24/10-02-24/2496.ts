function maximumValue(strs: string[]): number {
  const regex = /^\d+$/;
  return Math.max(
    ...strs.map((e) => {
      if (regex.test(e)) {
        return Number(e);
      } else {
        return e.length;
      }
    }),
  );
}
