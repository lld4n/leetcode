import fs from "fs";
import matter from "gray-matter";
const throws = [
  "-1",
  ".git",
  ".gitignore",
  ".idea",
  ".vscode",
  "README.md",
  "node_modules",
  "package.json",
  "tsconfig.json",
  "yarn.lock",
  ".DS_Store",
];
const elements = fs.readdirSync("../");
for (let el of elements) {
  if (!throws.includes(el)) {
    try {
      const tasks = fs.readdirSync("../" + el);
      for (let element of tasks) {
        const data = fs.readFileSync("../" + el + "/" + element + "/README.md");
        if (matter(data).data.created !== el) {
          console.log(element);
        }
      }
    } catch (e) {
      console.log("--");
    }
  }
}
