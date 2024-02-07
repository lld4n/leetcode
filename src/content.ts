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
  let res = "<div align='center'><table><tbody>";
  const map = JSON.parse(fs.readFileSync("./src/map.json").toString());
  let date = new Date(content[0].birth).toLocaleString("RU-ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  res += `<tr><th colspan="2"><b>${date}</b></th></tr>`;
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
      res += `<tr><th colspan="2"><b>${curDate}</b></th></tr>`;
      date = curDate;
    }
    res += `<tr><th><a href="https://leetcode.com/problems/${map[item.id]}">${
      item.id
    }</a></th><th><i>${time}</i></th></tr>`;
  }
  res += "</tbody></table></div>";
  return res;
}

// <table>
//   <thead>
//     <tr>
//       <th colspan="2"></th>
//   </tr>
//   </thead>
//   <tbody>
//   <tr>
//     <td></td>
//   <td></td>
//   </tr>
//   <tr>
//   <td></td>
//   <td></td>
//   </tr>
//   <tr>
//   <td></td>
//   <td></td>
//   </tr>
//   </tbody>
//   </table>
