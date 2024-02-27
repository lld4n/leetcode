import LeetCode from "leetcode-query";

export async function getLeetcode() {
  const stats = await _get();
  console.log(stats);
}

export async function _get() {
  const leetcode = new LeetCode();
  const l = await leetcode.user("lldan");

  const map = {
    All: [0, 0],
    Easy: [0, 0],
    Medium: [0, 0],
    Hard: [0, 0],
  };
  if (l.matchedUser) {
    for (const item of l.matchedUser.submitStats.acSubmissionNum) {
      map[item.difficulty][0] = item.count;
    }
  }
  for (const item of l.allQuestionsCount) {
    map[item.difficulty][1] = item.count;
  }
  return map;
}
