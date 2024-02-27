import axios from "axios";
import { _waka } from "./constants";

export async function getWaka() {
  const mins = await _getWaka();

  let result = "**Time Stats**\n\n```text\n";
  result += "wakatime          ";
  result += mins;
  result += "\n```\n\n";
  return result;
}

async function _getWaka() {
  const svg = (await axios.get(_waka)).data
    .match(/\d+ hrs \d+ mins/g)[0]
    .match(/\d+/g)
    .map(Number);

  const minutes = String(svg[0] * 60 + svg[1]) + " mins";
  return minutes;
}
