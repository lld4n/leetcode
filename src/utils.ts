import { _emojis, _len, _len_strip } from "./constants";

export function _complete(str: string) {
  while (str.length < _len) {
    str += " ";
  }
  return str;
}

export function _strip(up: number, down: number) {
  const x = (up * _len_strip) / down;
  let i = 1;
  let result = "";
  while (i !== _len_strip) {
    if (i < x) {
      result += "█";
    } else {
      result += "░";
    }
    i++;
  }
  return result + " ";
}

export function _get_emoji(dif: string): string {
  if (_emojis[dif]) {
    return _emojis[dif];
  }
  return "";
}

export function _percentage(up: number, down: number) {
  let value = String((up / down).toFixed(2));
  while (value.length !== 5) {
    value = "0" + value;
  }
  return value + " %";
}
