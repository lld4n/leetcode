import {
  badges,
  days,
  files,
  leetcode,
  month,
  sync,
} from "./func";

async function main() {
  const start = new Date().getTime();

  let result = "";
  console.log("🅱 пошла возня");
  result += badges();
  console.log("🅱 badges");
  result += await leetcode();
  console.log("🅱 leetcode");
  result += await files();
  console.log("🅱 files");
  result += await month();
  console.log("🅱 month");
  result += await days();
  console.log("🅱 days");
  await Bun.write("./README.md", result);
  sync();
  const end = new Date().getTime();
  console.log("🅱 " + (end - start) / 1000 + " sec");
}

main();
