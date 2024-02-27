import { _main_badges, _secondary_badges } from "./constants";

export function getBadges() {
  let res = '<div align="center">';
  for (const b of _main_badges) {
    res += `<img src="${b}" width="30" height="30"> `;
  }
  for (const b of _secondary_badges) {
    res += `<img src="${b}" width="30" height="30"> `;
  }
  res += `</div>\n\n`;
  return res;
}
