import fs from "fs";
import { spawnSync } from "child_process";
import { LeetCode } from "leetcode-query";
const leetcode = new LeetCode();

let result = "# Неважно, возможно ли это\n";
async function generateMap() {
  const totalCount = (await leetcode.problems({ limit: 1 })).total;
  const map = {};
  for (let i = 1; i <= totalCount; i += 10) {
    const problem = await leetcode.problems({ limit: 10, offset: i });
    for (const item of problem.questions) {
      map[item.questionFrontendId] = item.titleSlug;
    }
    console.log(i);
  }
  fs.writeFileSync("index.json", JSON.stringify(map));
}
function containsOnlyDigits(str) {
  return /^\d+$/.test(str);
}

const user = await leetcode.user("lldan");

result +=
  "![wakatime](https://wakatime.com/badge/user/018afba7-2ebc-4282-8545-d0250012991b/project/018b347c-0b9d-4d3e-9cc5-745948186d06.svg)  ";

for (const badge of user.matchedUser.badges) {
  if (badge.icon.includes("http")) {
    result += `<img src="${badge.icon}" width="30" height="30">  `;
  } else {
    result += `<img src="https://leetcode.com/${badge.icon}" width="30" height="30">  `;
  }
}

result +=
  "\n![stats](https://leetcode-stats-six.vercel.app/?username=lldan&theme=dark)  \n";

const folders = [
  "октябрь.23",
  "ноябрь.23",
  "декабрь.23",
  "январь.24",
  "февраль.24",
];
let content = [];
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
// fs.writeFileSync("problem.json", JSON.stringify(content));

const map = JSON.parse(fs.readFileSync("./index.json").toString());
for (const item of content) {
  result += `[${item.id}](https://leetcode.com/problems/${
    map[item.id]
  })&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`${new Date(item.birth).toLocaleString(
    "RU-ru",
    {
      day: "numeric",
      month: "short",
      year: "2-digit",
      hour: "numeric",
      minute: "numeric",
    },
  )}\`  \n`;
}
fs.writeFileSync("README.md", result);

const currentTimestamp = new Date().toLocaleString("RU-ru", {
  day: "numeric",
  month: "short",
  year: "2-digit",
  hour: "numeric",
  minute: "numeric",
});
spawnSync("git", ["add", "."], { stdio: "inherit" });
spawnSync("git", ["commit", "-m", `${currentTimestamp}`], { stdio: "inherit" });
spawnSync("git", ["push"], { stdio: "inherit" });
