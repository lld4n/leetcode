function numberOfBeams(bank: string[]): number {
  const list: number[] = bank
    .map((el) =>
      el.split("").reduce((previousValue, currentValue) => {
        if (currentValue === "1") return previousValue + 1;
        else return previousValue;
      }, 0),
    )
    .filter((el) => el !== 0);
  let answer = 0;
  for (let i = 0; i < list.length - 1; i++) {
    answer += list[i] * list[i + 1];
  }
  return answer;
}
