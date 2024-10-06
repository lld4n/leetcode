function convertToTitle(columnNumber: number): string {
  let str: string = "";
  let num: number;

  while (columnNumber > 0) {
    num = (columnNumber - 1) % 26;
    str = String.fromCharCode(num + 65) + str;
    columnNumber = Math.floor((columnNumber - num) / 26);
  }
  return str;
}
