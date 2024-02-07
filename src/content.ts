import * as fs from "fs";
import { folders } from "./constants";
import { containsOnlyDigits } from "./utils";
type contentType = { birth: number; path: string; id: string };
export function generateContent() {
  let content: contentType[] = [];
  for (const folder of folders) {
    const folderDir = fs.readdirSync("./" + folder);
    for (const f of folderDir) {
      if (f !== ".DS_Store") {
        const problems = fs.readdirSync("./" + folder + "/" + f);
        for (const p of problems) {
          const stat = fs.statSync("./" + folder + "/" + f + "/" + p);
          if (!containsOnlyDigits(p.split(".")[0])) {
            console.log(folder + "/" + f + "/" + p);
          } else {
            content.push({
              birth: stat.mtimeMs,
              path: folder + "/" + f + "/" + p,
              id: p.split(".")[0],
            });
          }
        }
      }
    }
  }
  content = content.sort((a, b) => b.birth - a.birth);
  return content;
}

export function generateList(content: contentType[]) {
  let res = "<div align='center'>";
  const map = JSON.parse(fs.readFileSync("./src/map.json").toString());
  let date = new Date(content[0].birth).toLocaleString("RU-ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  res += `<code>${date}</code><br>`;
  for (const item of content) {
    const curDate = new Date(item.birth).toLocaleString("RU-ru", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const time = new Date(item.birth).toLocaleString("RU-ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (curDate !== date) {
      res += `<br><code>${curDate}</code><br>`;
      date = curDate;
    }
    res += `<a href="https://leetcode.com/problems/${map[item.id]}">${
      item.id
    }</a>&#09;<code>${time}</code><br>`;
  }
  res += "</div>";
  return res;
}
