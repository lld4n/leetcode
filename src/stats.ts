import { stats } from "./constants";

export function generateStats() {
  let res = "<div align='center'>";
  res += `<img src="${stats.wakatime}"><br>`;
  for (const badge of stats.badges) {
    res += `<img src="${badge}" width="50" height="50">  `;
  }
  res += `<br><img src="${stats.leetcode}"></div>`;
  return res;
}
