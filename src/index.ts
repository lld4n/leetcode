// import { constants } from "./constants";
import { generateStats } from "./stats";
import * as fs from "fs";
import { spawnSync } from "child_process";

let result = `<h1 align="center">неважно, возможно это или нет</h1>`;
result += `<h2 align="center">я это сделаю, потому что хочу сделать</h2>`;
result += `<h3 align="center">モンキー･D･ルフィ</h3>`;
result += generateStats();
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
