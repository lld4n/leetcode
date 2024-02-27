import LeetCode from "leetcode-query";

export async function getLeetcode() {
  _get();
}

export async function _get() {
  const leetcode = new LeetCode();
  const user = await leetcode.user("lldan");
  console.log(user.matchedUser?.submitStats);
}
