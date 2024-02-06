import { stats } from "./constants";

export function generateStats() {
  let res = "<div align='center'>";
  res += `<img src="${stats.wakatime}"><br>`;
  for (const badge of stats.badges) {
    res += `<img src="${badge}" width="30" height="30">  `;
  }
  res += `<br><img src="${stats.leetcode}"></div>`;
  return res;
}
