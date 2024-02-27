import * as fs from "fs";
import { getBadges } from "./badges";
import { getWaka } from "./waka";
import { sync } from "./sync";
import { getLeetcode } from "./leetcode";
// let result = `<p align="center">неважно, возможно это или нет</p>`;
// result += `<div align="center"><code>モンキー･D･ルフィ</code></div><br>`;
// result += generateStats();

// const map = generateMap();
// result += generateMapRes(map);
// const content = generateContent();
// result += generateList(content);

async function main() {
  let result = "";
  result += getBadges();
  result += await getWaka();
  result += await getLeetcode();

  fs.writeFileSync("README.md", result);

  sync();
}
main();
