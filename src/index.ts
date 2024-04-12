import { badges, files, leetcode, sync, wakaMini } from "./func";

async function main() {
  const start = new Date().getTime();

  let result = "";
  console.log("пошла возня");
  result += badges();
  console.log("badges");
  // result += await waka();
  result += await leetcode();
  console.log("leetcode");
  result += await files();
  console.log("files");
  result += await wakaMini();
  console.log("wakatime");
  Bun.write("./README.md", result);
  sync();
  const end = new Date().getTime();
  console.log("finished by " + (end - start) / 1000);
}

main();
