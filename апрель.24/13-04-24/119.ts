function getRow(rowIndex: number): number[] {
  let i = 1;
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  let triagle = [1, 1];
  while (i !== rowIndex) {
    i++;
    let buffer = [1];
    for (let j = 0; j < triagle.length - 1; j++) {
      buffer.push(triagle[j] + triagle[j + 1]);
    }
    buffer.push(1);
    triagle = buffer;
  }
  return triagle;
}
