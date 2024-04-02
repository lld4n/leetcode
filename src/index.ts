import { badges, files, leetcode, sync, wakaMini } from "./func";

async function main() {
  const start = new Date().getTime();

  let result = "";
  result += badges();
  // result += await waka();
  result += await leetcode();
  result += await files();

  result += await wakaMini();
  Bun.write("./README.md", result);
  sync();
  const end = new Date().getTime();
  console.log("finished by " + (end - start) / 1000);
}

main();
