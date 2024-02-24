import LeetCode from "leetcode-query";

async function g() {
  const leetcode = new LeetCode();
  const user = await leetcode.user("lldan");
  console.log(user);
}

g();
