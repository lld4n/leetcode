import { badges, leetcode, sync, waka } from "./func";

async function main() {
  const start = new Date().getTime();

  let result = "";
  result += badges();
  result += "";
  result += await waka();
  result += await leetcode();
  result += "";

  Bun.write("./README.md", result);
  sync();
  const end = new Date().getTime();
  console.log("finished by " + (end - start) / 1000);
}

main();
