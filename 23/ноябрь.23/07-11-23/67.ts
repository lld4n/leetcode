function addBinary(a: string, b: string): string {
  let aList: number[] = a.split("").reverse().map(Number);
  let bList: number[] = b.split("").reverse().map(Number);

  let iA = 0;
  let iB = 0;
  let answer: number[] = [];
  let ost = 0;
  while (iA !== aList.length && iB !== bList.length) {
    let buffer = aList[iA] + bList[iB] + ost;
    answer.push(buffer % 2);
    ost = Math.floor(buffer / 2);
    iA++;
    iB++;
  }

  while (iA !== aList.length) {
    let buffer = aList[iA] + ost;
    answer.push(buffer % 2);
    ost = Math.floor(buffer / 2);
    iA++;
  }
  while (iB !== bList.length) {
    let buffer = bList[iB] + ost;
    answer.push(buffer % 2);
    ost = Math.floor(buffer / 2);
    iB++;
  }
  if (ost !== 0) {
    answer.push(ost);
  }
  return answer.reverse().map(String).join("");
}
