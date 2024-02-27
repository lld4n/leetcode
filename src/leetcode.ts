import LeetCode from "leetcode-query";

export async function getLeetcode() {
  _get();
}

export async function _get() {
  const leetcode = new LeetCode();
  const l = await leetcode.user("lldan");
  console.log(l.allQuestionsCount);
  // console.log(user.matchedUser?.submitStats);
}
