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
  const unique = content.map((e) => e.id);
  if (new Set(unique).size !== unique.length)
    console.log("ЕСТЬ ПОВТОРЯЮЩИЕСЯ ЗАДАЧИ");

  let res = "<div align='center'><table><tbody>";
  const map = JSON.parse(fs.readFileSync("./src/map.json").toString());
  let date = new Date(content[0].birth).toLocaleString("RU-ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  res += `<tr><th colspan="2"><b>${date}</b></th></tr>`;
  for (let i = 0; i < content.length; i++) {
    const curDate = new Date(content[i].birth).toLocaleString("RU-ru", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const time = new Date(content[i].birth).toLocaleString("RU-ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    let div;
    if (i !== 0) {
      div = new Date(
        new Date(content[i - 1].birth).getTime() -
          new Date(content[i].birth).getTime(),
      ).toLocaleString("RU-ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    if (curDate !== date) {
      res += `<tr><th colspan="2"><b>${curDate}</b></th></tr>`;
      date = curDate;
    }
    res += `<tr><th><a href="https://leetcode.com/problems/${
      map[content[i].id]
    }">${
      content[i].id
    }</a></th><th><sub>${time}</sub><sup>${div}</sup></th></tr>`;
  }
  res += "</tbody></table></div>";
  return res;
}
