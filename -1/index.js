import fs from "fs";
import matter from "gray-matter";
const direct = fs
  .readdirSync("../", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => {
    if (
      d.name !== ".git" &&
      d.name !== ".idea" &&
      d.name !== ".vscode" &&
      d.name !== "-1" &&
      d.name !== "node_modules"
    ) {
      return d.name;
    }
  })
  .filter((d) => d !== undefined);
let dat = [];
for (let el of direct) {
  try {
    const content = fs.readFileSync("../" + el + "/README.md");
    dat.push(matter(content).data);
  } catch (e) {
    console.log("не фартануло", el);
  }
}
const titles = new Set();
for (let el of dat) {
  for (let e in el) {
    titles.add(e);
  }
}

console.log(titles);

let result = "# Дорогая грусть, прости, не вернусь\n|";
for (let el of titles) {
  result += el + "|";
}
result += "\n|";
for (let el of titles) {
  result += "---|";
}
result += "\n|";

dat = dat.sort((a, b) => {
  if (a.source < b.source) {
    return -1;
  }
  if (a.source > b.source) {
    return 1;
  }
  // Если значения source равны, тогда сортируем по полю title
  if (a.created < b.created) {
    return -1;
  }
  if (a.created > b.created) {
    return 1;
  }
  return 0;
});

for (let element of dat) {
  for (let elem of titles) {
    if (element[elem]) {
      if (elem === "url") {
        result += "[link](" + element[elem] + ")|";
      } else if (elem === "title") {
        result +=
          "[" +
          element[elem] +
          "](https://github.com/lld4n/leetcode/tree/master/" +
          String(element[elem])
            .replace(/ /g, "%20")
            .replace("[", "%5B")
            .replace("]", "%5D") +
          ")|";
      } else {
        if (element[elem] !== undefined) {
          result += element[elem] + "|";
        } else {
          result += " |";
        }
      }
    } else {
      if (element[elem] !== undefined) {
        result += element[elem] + "|";
      } else {
        result += " |";
      }
    }
  }
  result += "\n|";
}
let time = 0;
const regex = /\d*h?\d+m/;
for (let elem of dat) {
  if (regex.test(elem["time"])) {
    const numb = elem["time"].match(/\d+/g);
    if (numb.length === 2) {
      time += Number(numb[0]) * 60;
      time += Number(numb[1]);
    } else {
      time += Number(numb[0]);
    }
  }
}

result +=
  "count: " +
  dat.length +
  "| | |" +
  Math.floor(time / 60) +
  "h" +
  (time % 60) +
  "m| | | |";

fs.writeFileSync("../README.md", result.slice(0, result.length - 1));
