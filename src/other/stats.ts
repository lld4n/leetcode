import { stats } from "./constants";

export function generateStats() {
  let res = "<div align='center'>";
  res += `<img src="${stats.wakatime}"><br><br>`;
  for (const c of stats.com) {
    res += `<img src="${c}" width="50" height="50">  `;
  }
  res += "<br>";
  for (const badge of stats.badges) {
    res += `<img src="${badge}" width="50" height="50">  `;
  }
  res += `<br><br><img src="${stats.leetcode}"></div>`;
  return res;
}