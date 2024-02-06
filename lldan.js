import fs from "fs";
import { spawnSync } from "child_process";
import { LeetCode } from "leetcode-query";
const folders = [
  "октябрь.23",
  "ноябрь.23",
  "декабрь.23",
  "январь.24",
  "февраль.24",
];
const leetcode = new LeetCode();

let result = "# Неважно, возможно ли это\n";
result += await generateStats();
const content = generateContent();
result += generateRecords(content);
result += generateList();
pushReadme();

function pushReadme() {
  fs.writeFileSync("README.md", result);

  const currentTimestamp = new Date().toLocaleString("RU-ru", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
  spawnSync("git", ["add", "."], { stdio: "inherit" });
  spawnSync("git", ["commit", "-m", `${currentTimestamp}`], {
    stdio: "inherit",
  });
  spawnSync("git", ["push"], { stdio: "inherit" });
}

function generateRecords(content) {
  let res = "";
  const DateToIds = {};
  for (const item of content) {
    const dat = new Date(item.birth).toLocaleString("RU-ru", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
    if (DateToIds[dat]) {
      DateToIds[dat].push(item.id);
    } else {
      DateToIds[dat] = [item.id];
    }
  }
  res += "**Рекорды в один день 🚀**  \n\n";
  res += "```text\n";
  Object.entries(DateToIds)
    .map((el) => [el[0], el[1].length])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach((el) => {
      result += `${el[0]}\t\t${el[1]}\n`;
    });
  res += "```  \n";
  return res;
}

function generateContent() {}

async function generateStats() {
  let res = "";
  const user = await leetcode.user("lldan");
  res += "**Статистика ✨**  \n\n";
  res +=
    "![wakatime](https://wakatime.com/badge/user/018afba7-2ebc-4282-8545-d0250012991b/project/018b347c-0b9d-4d3e-9cc5-745948186d06.svg)  ";

  for (const badge of user.matchedUser.badges) {
    if (badge.icon.includes("http")) {
      res += `<img src="${badge.icon}" width="30" height="30">  `;
    } else {
      res += `<img src="https://leetcode.com/${badge.icon}" width="30" height="30">  `;
    }
  }

  res +=
    "\n![stats](https://leetcode-stats-six.vercel.app/?username=lldan&theme=dark)  \n";
  return res;
}

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
  fs.writeFileSync("map.json", JSON.stringify(map));
}

function findDuplicates(arr) {
  let duplicates = [];
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}

function generateList() {
  let res = "";
  res += "**Список решенных задач ✅**  \n\n";
  const map = JSON.parse(fs.readFileSync("./map.json").toString());
  for (const item of content) {
    res += `[${item.id}](https://leetcode.com/problems/${
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
  return res;
}
