import {readdir} from "node:fs/promises";
import {complete, percentage, strip} from ".";
import {FOLDERS} from "../constants.ts";

const extension2name: {
  [key: string]: string;
} = {
  ".ts": "typescript",
  ".cpp": "c++",
  ".js": "javascript",
  ".pdf": "pdf",
  ".py": "python",
  ".md": "markdown",
  ".sql": "sql",
  ".txt": "input",
  ".out": "compiled cpp",
  ".rs": "rust",
  ".go": "go"
};

const map: {
  [key: string]: number;
} = {};

export async function files() {
  let all: string[] = [];
  for (const item of [...FOLDERS, "другое"]) {
    const files = await readdir(`./${item}`, {recursive: true});
    for (const one of files) {
      const m = one.match(/\/[^\/]+\..+/);
      if (m !== null) {
        all.push(...m);
      }
    }
  }
  all = all
    .map((e) => {
      const b = e.match(/\..+/);
      if (b === null) {
        return [""];
      }
      return [...b];
    })
    .flat();

  let c = 0;
  for (const f of all) {
    c++;
    if (map[f]) {
      map[f]++;
    } else {
      map[f] = 1;
    }
  }

  const entities = Object.entries(map).sort((a, b) => b[1] - a[1]);
  let res = "**files**\n```text\n";
  for (const item of entities) {
    res += complete(extension2name[item[0]] || item[0]);
    res += complete(item[1] + " files");
    res += strip(item[1], c);
    res += complete(percentage(item[1], c));
    res += "\n";
  }
  res += "```\n\n";
  return res;
}
