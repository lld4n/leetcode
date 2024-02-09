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
  const map = JSON.parse(fs.readFileSync("./src/map.json").toString());
  let date = getColspanDate(content[0].birth);

  console.log(getDiv(content[0], content[1]));

  let res = "<div align='center'><table><tbody>";
  res += `<tr><th colspan="2"><b>${date}</b></th></tr>`;
  for (let i = 0; i < content.length; i++) {
    const curDate = getColspanDate(content[i].birth);
    const time = getClock(content[i].birth);
    const div = getDiv(content[i], content[i + 1]);
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

function getDiv(before: contentType, after: contentType) {
  if (!after) return "";
  const beforeTime = new Date(before.birth).getTime();
  const afterTime = new Date(after.birth).getTime();
  const minute = Math.floor((beforeTime - afterTime) / 60000);
  if (minute > 400) {
    return "";
  }
  return `+${minute}m`;
}

function getColspanDate(birth: number) {
  return new Date(birth).toLocaleString("RU-ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getClock(birth: number) {
  return new Date(birth).toLocaleString("RU-ru", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
