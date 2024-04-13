import { readdir } from "node:fs/promises";
import { FOLDERS } from "../constants.ts";

export async function days() {
  const map: { [key: string]: number } = {};
  for (const top of FOLDERS) {
    const medium = await readdir("./" + top);
    for (const bottom of medium) {
      try {
        const tasks = await readdir("./" + top + "/" + bottom);
        map[top + "/" + bottom] = tasks.length;
      } catch (e) {
        //
      }
    }
  }
  console.log(map);

  // let res = "**files**\n```text\n";
  // for (const item of entities) {
  //   res += complete(extension2name[item[0]] || item[0]);
  //   res += complete(item[1] + " files");
  //   res += strip(item[1], c);
  //   res += complete(percentage(item[1], c));
  //   res += "\n";
  // }
  // res += "```\n\n";
  return "";
}
