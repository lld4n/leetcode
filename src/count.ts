import * as fs from "fs";
import { folders } from "./constants";
type contentType = { [key: string]: number };
export function generateMap() {
  let map: contentType = {};
  for (const folder of folders) {
    const folderDir = fs.readdirSync("./" + folder);
    for (const f of folderDir) {
      if (f !== ".DS_Store") {
        const problems = fs.readdirSync("./" + folder + "/" + f);
        map[folder] = map[folder]
          ? map[folder] + problems.length
          : problems.length;
      }
    }
  }
  return map;
}
export function generateMapRes(map: contentType) {
  let res = "\n\n\n```text\n";
  const maxLenKey =
    Math.max(...Object.keys(map).map((e) => e.length)) + 20;
  const maxLenValue =
    Math.max(
      ...Object.values(map)
        .map((e) => String(e) + " tasks")
        .map((e) => e.length),
    ) + 20;

  let ss = 0;
  for (const key in map) {
    ss += map[key];
  }

  for (const key in map) {
    let name = key;
    while (name.length !== maxLenKey) {
      name += " ";
    }
    let count = String(map[key]) + " tasks";
    while (count.length !== maxLenValue) {
      count += " ";
    }

    const percentage = ((map[key] / ss) * 100).toFixed(2);
    const countPr = Math.ceil(map[key] / Math.ceil(ss / 25));
    let p = "";
    let i = 1;
    while (i !== 25) {
      if (i < countPr) {
        p += "█";
      } else {
        p += "░";
      }
      i++;
    }
    p += "  " + String(percentage) + " %";
    res += name + count + p + "\n";
  }
  res += "```\n\n\n";
  return res;
}
