import { _main_badges, _secondary_badges, _size } from "./constants";

export function getBadges() {
  let res = '<div align="center">';
  for (const b of _main_badges) {
    res += `<img src="${b}" width="${_size}" height="${_size}"> `;
  }
  for (const b of _secondary_badges) {
    res += `<img src="${b}" width="${_size}" height="${_size}"> `;
  }
  res += `</div>\n\n`;
  return res;
}
