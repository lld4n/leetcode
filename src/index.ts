// import { constants } from "./constants";
import { generateStats } from "./stats";
import * as fs from "fs";
import { spawnSync } from "child_process";

let result = `<h5 align='center'>Неважно, возможно это или нет. Я это сделаю, потому что хочу сделать.</h5><p align="center">モンキー･D･ルフィ</p>`;
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
