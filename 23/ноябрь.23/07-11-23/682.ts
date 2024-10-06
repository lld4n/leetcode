function calPoints(operations: string[]): number {
  let list: number[] = [];
  for (let elem of operations) {
    if (elem === "+") {
      list.unshift(list[0] + list[1]);
    } else if (elem === "D") {
      list.unshift(list[0] * 2);
    } else if (elem === "C") {
      list.shift();
    } else {
      list.unshift(Number(elem));
    }
  }

  return list.reduce((acc, value) => {
    return acc + value;
  }, 0);
}
