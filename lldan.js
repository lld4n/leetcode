import fs from "fs";
import matter from "gray-matter";
import { exec, spawnSync } from "child_process";

const currentTimestamp = new Date().toLocaleString("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});
spawnSync("git", ["add", "."], { stdio: "inherit" });
spawnSync("git", ["commit", "-m", `${currentTimestamp}`], { stdio: "inherit" });
spawnSync("git", ["push"], { stdio: "inherit" });
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
