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
  let value = String(((up / down) * 100).toFixed(2));
  while (value.length !== 5) {
    value = "0" + value;
  }
  return value + " %";
}

export function _time(unixTime: number): string {
  const date = new Date(unixTime);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date
    .getFullYear()
    .toString()
    .slice(-2)
    .padStart(2, "0");

  return `${day}-${month}-${year}`;
}
