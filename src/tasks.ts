import { _folders } from "./constants";
import * as fs from "fs";
import {
  _complete,
  _get_emoji,
  _percentage,
  _strip,
  _time,
} from "./utils";
type tType = {
  birth: number;
  path: string;
  id: string;
  month: string;
};

export function getTasks() {
  const tsks = _get();
  let result = "";
  result += printMonth(tsks);
  printRecordDay(tsks);
  return result;
}

function printRecordDay(tsks: tType[]) {
  const map: { [key: string]: number } = {};
  for (const item of tsks) {
    const cur = _time(item.birth);
    map[cur] = map[cur] ? map[cur] + 1 : 1;
  }
  console.log(map);
  return;
  let result = "👊 **Months Stats**\n";
  result += "```text\n";
  for (const key in map) {
    result += _complete(_get_emoji(key) + " " + key);
    result += _complete(String(map[key]) + " tasks");
    result += _strip(map[key], tsks.length) + " ";
    result += _complete(_percentage(map[key], tsks.length));
    result += "\n";
  }
  result += "```\n\n";
  return result;
}

function printMonth(tsks: tType[]) {
  const map: { [key: string]: number } = {};
  for (const folder of _folders) {
    map[folder] = 0;
  }
  for (const item of tsks) {
    map[item.month]++;
  }

  let result = "👊 **Months Stats**\n";
  result += "```text\n";
  for (const key in map) {
    result += _complete(_get_emoji(key) + " " + key);
    result += _complete(String(map[key]) + " tasks");
    result += _strip(map[key], tsks.length) + " ";
    result += _complete(_percentage(map[key], tsks.length));
    result += "\n";
  }
  result += "```\n\n";
  return result;
}

function _get(): tType[] {
  let tsks: tType[] = [];

  for (const folder of _folders) {
    const folderDir = fs.readdirSync("./" + folder);
    for (const f of folderDir) {
      if (f !== ".DS_Store") {
        const problems = fs.readdirSync("./" + folder + "/" + f);

        for (const p of problems) {
          const stat = fs.statSync("./" + folder + "/" + f + "/" + p);
          tsks.push({
            birth: stat.mtimeMs,
            path: folder + "/" + f + "/" + p,
            id: p.split(".")[0],
            month: folder,
          });
        }
      }
    }
  }
  tsks = tsks.sort((a, b) => b.birth - a.birth);
  return tsks;
}
