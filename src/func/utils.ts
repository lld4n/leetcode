import { LEN, LEN_STRIP } from "../constants";

export function complete(str: string) {
  while (str.length < LEN) str += " ";
  return str;
}

export function strip(up: number, down: number) {
  const x = (up * LEN_STRIP) / down;
  let i = 1;
  let result = "";
  while (i !== LEN_STRIP) {
    if (i < x) {
      result += "█";
    } else {
      result += "░";
    }
    i++;
  }
  return result + " ";
}

export function percentage(up: number, down: number) {
  let value = String(((up / down) * 100).toFixed(2));
  while (value.length !== 5) {
    value = "0" + value;
  }
  return value + " %";
}
