import LeetCode from "leetcode-query";
import * as fs from "fs";

async function generateDivergency() {
  const leetcode = new LeetCode();
  const user = await leetcode.user("lldan");
  console.log(user);
  fs.writeFileSync("./user.json", JSON.stringify(user));
}

generateDivergency();
