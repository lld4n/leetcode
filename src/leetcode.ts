import LeetCode from "leetcode-query";
import * as fs from "fs";

export async function generateDivergency(count: number) {
  const leetcode = new LeetCode();
  const user = await leetcode.user("lldan");
  if (user.matchedUser) {
    console.log(user.matchedUser?.submitStats.acSubmissionNum);
  }
  fs.writeFileSync("./user.json", JSON.stringify(user));
}

generateDivergency(1);
