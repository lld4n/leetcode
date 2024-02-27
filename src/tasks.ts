import { _folders } from "./constants";
import * as fs from "fs";
import { _complete, _get_emoji, _percentage, _strip } from "./utils";
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
  return result;
}

function printMonth(tsks: tType[]) {
  const map: { [key: string]: number } = {};
  for (const folder of _folders) {
    map[folder] = 0;
  }
  let count = 0;
  for (const item of tsks) {
    map[item.month]++;
    count++;
  }

  let result = "👊 **Months Stats**\n";
  result += "```text\n";
  for (const key in map) {
    result += _complete(_get_emoji(key) + " " + key);
    result += _complete(String(map[key]) + " tasks");
    result += _strip(map[key], count) + " ";
    result += _complete(_percentage(map[key], count));
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
