import axios from "axios";
import { _len, _waka } from "./constants";
import { _complete, _get_emoji } from "./utils";

export async function getWaka() {
  try {
    const mins = await _get();
    let result = "⏱️ **Time Stats**\n";
    result += "```text\n";
    result += _complete(_get_emoji("wakatime") + " wakatime");
    result += _complete(String(mins) + " mins");
    result += _complete(
      String(Math.floor(mins / 60)) +
        " hrs " +
        String(mins % 60) +
        " mins",
    );
    result += "\n```\n\n";
    return result;
  } catch (e) {
    return "";
  }
}

async function _get() {
  try {
    const svg = (await axios.get(_waka)).data
      .match(/\d+ hrs \d+ mins/g)[0]
      .match(/\d+/g)
      .map(Number);

    return svg[0] * 60 + svg[1];
  } catch (e) {
    return null;
  }
}
