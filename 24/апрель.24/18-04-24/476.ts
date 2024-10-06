function findComplement(num: number): number {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((e) => {
        if (e === "1") return "0";
        else return "1";
      })
      .join(""),
    2,
  );
}
