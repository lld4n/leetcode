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
