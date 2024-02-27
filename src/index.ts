import { generateStats } from "./stats";
import * as fs from "fs";
import { spawnSync } from "child_process";
import { generateContent, generateList } from "./content";
import { generateMap } from "./count";

let result = `<p align="center">неважно, возможно это или нет</p>`;
result += `<div align="center"><code>モンキー･D･ルフィ</code></div><br>`;
result += generateStats();

const map = generateMap();
console.log(map);
const content = generateContent();
result += generateList(content);

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
