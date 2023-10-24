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

let result = "|";
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
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
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
        result += element[elem] + "|";
      }
    } else {
      result += element[elem] + " |";
    }
  }
  result += "\n|";
}

console.log(result);

fs.writeFileSync("../README.md", result.slice(0, result.length - 1));
