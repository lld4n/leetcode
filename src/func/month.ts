import { readdir } from "node:fs/promises";
import { FOLDERS } from "../constants.ts";
import { complete, percentage, strip } from "./utils.ts";

export async function month() {
  const map: { [key: string]: number } = {};
  let c = 0;
  for (const top of FOLDERS) {
    const medium = await readdir("./" + top);
    for (const bottom of medium) {
      try {
        const tasks = (
          await readdir("./" + top + "/" + bottom)
        ).filter((e) => e !== ".DS_Store");
        map[top] = map[top] ? map[top] + tasks.length : tasks.length;
        c += tasks.length;
      } catch (e) {
        //
      }
    }
  }

  const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
  let res = "**month**\n```text\n";
  for (const item of entries) {
    res += complete(item[0]);
    res += complete(item[1] + " tasks");
    res += strip(item[1], c);
    res += complete(percentage(item[1], c));
    res += "\n";
  }
  res += "```\n\n";
  return res;
}
