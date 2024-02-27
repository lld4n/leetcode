import { _main_badges, _secondary_badges } from "./constants";

export function getBadges() {
  let res = '<div align="center">';
  for (const b of _main_badges) {
    res += `<img src="${b}" width="20" height="20"> `;
  }
  for (const b of _secondary_badges) {
    res += `<img src="${b}" width="20" height="20"> `;
  }
  res += `</div>\n\n`;
  return res;
}
