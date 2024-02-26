function checkOnesSegment(s: string): boolean {
  const list = s.split("0").filter((e) => e !== "");
  return list.length <= 1;
}
