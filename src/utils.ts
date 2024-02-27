import { _len } from "./constants";

export function _complete(str: string) {
  while (str.length < _len) {
    str += " ";
  }
  return str;
}
