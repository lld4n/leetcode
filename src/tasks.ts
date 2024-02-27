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
  result += printRecordDay(tsks);
  return result;
}
function getMapMonth(tsks) {
  const month: { [key: string]: number } = {};
  for (const folder of _folders) {
    month[folder] = 0;
  }
  for (const item of tsks) {
    month[item.month]++;
  }

  return month;
}
function printRecordDay(tsks: tType[]) {
  const month = getMapMonth(tsks);
  const q: { [key: string]: string } = {};
  const map: { [key: string]: number } = {};
  for (const item of tsks) {
    const cur = _time(item.birth);
    q[cur] = item.month;
    map[cur] = map[cur] ? map[cur] + 1 : 1;
  }
  const list = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  let result = "✅ **Day Stats** ( monthly interest )\n";
  result += "```text\n";
  for (const [key, count] of list) {
    result += _complete(_get_emoji(key) + " " + key);
    result += _complete(String(count) + " tasks");
    result += _strip(count, month[q[key]]) + " ";
    result += _complete(_percentage(count, month[q[key]]));
    result += "\n";
  }
  result += _complete(" ...");
  result += _complete("...");
  result += _complete("...");
  result += "\n";
  result += "```\n\n";
  return result;
}

function printMonth(tsks: tType[]) {
  const map = getMapMonth(tsks);

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
