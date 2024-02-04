import fs from "fs";
import { spawnSync } from "child_process";

const throws = [
  ".DS_Store",
  ".git",
  ".gitignore",
  ".idea",
  ".vscode",
  "README.md",
  "lldan.js",
  "node_modules",
  "package.json",
  "tsconfig.json",
  "yarn.lock",
  "index.json",
  ".prettierignore",
  "venv",
];
let object = {};
const dirs = fs.readdirSync("./");
for (let element of dirs) {
  if (!throws.includes(element)) {
    object[element] = {};
    const dirs2 = fs.readdirSync("./" + element);
    for (let elem of dirs2) {
      if (elem !== ".DS_Store") {
        const readme = fs.readFileSync(
          "./" + element + "/" + elem + "/README.md",
        );
        object[element][elem] = parseReadme(String(readme).split("\n"));
      }
    }
  }
}
fs.writeFileSync("index.json", JSON.stringify(object));

function parseReadme(lines) {
  const list = [];
  let buffer = {};
  for (let elem of lines) {
    if (elem[0] === "#") {
      if (Object.values(buffer).length > 0) {
        list.push(buffer);
        buffer = {};
      }
      buffer.title = elem.replace("# ", "").trim();
    } else if (elem.includes("url")) {
      buffer.url = elem.replace("- `url`", "").trim();
    } else if (elem.includes("time")) {
      buffer.time = elem.replace("- `time`", "").trim();
    } else if (elem.includes("source")) {
      buffer.source = elem.replace("- `source`", "").trim();
    } else if (elem.includes("tags")) {
      buffer.tags = elem.replace("- `tags`", "").trim();
    }
  }
  if (Object.values(buffer).length > 0) {
    list.push(buffer);
  }
  return list;
}

let result =
  "# Неважно, возможно ли это\n[![wakatime](https://wakatime.com/badge/user/018afba7-2ebc-4282-8545-d0250012991b/project/018b347c-0b9d-4d3e-9cc5-745948186d06.svg)](https://wakatime.com/badge/user/018afba7-2ebc-4282-8545-d0250012991b/project/018b347c-0b9d-4d3e-9cc5-745948186d06)\n\n⬆️ Здесь считается не только работа над кодом, но и файлы README и скрипты для создания общего README\n\n";

let time = [];
for (let key1 in object) {
  result += `# ${key1}\n`;
  for (let key2 in object[key1]) {
    result += `## ${key2} [count ${object[key1][key2].length}]\n`;
    result += "|title|link|time|source|tag|\n|---|---|---|---|---|\n";
    for (let element of object[key1][key2]) {
      time.push(element.time);
      result += `|${element.title}|${element.url}|${element.time}|${element.source}|${element.tags}|\n`;
    }
  }
}
console.log("Произошел рефакторинг");
fs.writeFileSync("README.md", result);

function getMonth(str) {
  const strSplit = str.split("-");
  const month = strSplit[1];
  let monthStr = "";
  switch (month) {
    case "1":
      monthStr = "январь";
      break;
    case "2":
      monthStr = "февраль";
      break;
    case "3":
      monthStr = "март";
      break;
    case "4":
      monthStr = "апрель";
      break;
    case "5":
      monthStr = "май";
      break;
    case "6":
      monthStr = "июнь";
      break;
    case "7":
      monthStr = "июль";
      break;
    case "8":
      monthStr = "август";
      break;
    case "9":
      monthStr = "сентябрь";
      break;
    case "10":
      monthStr = "октябрь";
      break;
    case "11":
      monthStr = "ноябрь";
      break;
    case "12":
      monthStr = "декабрь";
      break;
  }

  return monthStr + "." + strSplit[2];
}

const currentTimestamp = new Date().toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});
spawnSync("git", ["add", "."], { stdio: "inherit" });
spawnSync("git", ["commit", "-m", `${currentTimestamp}`], { stdio: "inherit" });
spawnSync("git", ["push"], { stdio: "inherit" });
