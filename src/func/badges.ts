import { MAIN_BADGES, SECONDARY_BADGES, SIZE } from "../constants";

export function badges() {
  let res = '<div align="center">';
  for (const b of MAIN_BADGES) {
    res += `<img src="${b}" width="${SIZE}" height="${SIZE}"> `;
  }
  for (const b of SECONDARY_BADGES) {
    res += `<img src="${b}" width="${SIZE}" height="${SIZE}"> `;
  }
  res += `</div>\n\n`;
  return res;
}
