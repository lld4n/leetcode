import fs from "fs";
import matter from "gray-matter";
import { exec } from "child_process";
const currentTimestamp = new Date().toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});
exec("git add .", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
exec(`git commit -m "${currentTimestamp}"`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
exec("git push", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
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

const dir = fs.readdirSync("./");
console.log(dir);
