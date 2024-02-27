import LeetCode from "leetcode-query";
import { _complete, _get_emoji, _percentage, _strip } from "./utils";

export async function getLeetcode() {
  const stats = await _get();
  let result = "🔥 **LeetCode Stats**\n";
  result += "```text\n";
  for (const key in stats) {
    result += _complete(_get_emoji(key) + " " + key);
    result += _complete(String(stats[key][0]) + " tasks");
    result += _strip(stats[key][0], stats[key][1]) + " ";
    result += _complete(_percentage(stats[key][0], stats[key][1]));
    result += "\n";
  }
  result += "```\n\n";
  return result;
}

async function _get() {
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
