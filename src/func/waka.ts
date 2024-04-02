import ky from "ky";
import { WAKA } from "../constants";
import { complete } from "./utils";

type dataType = {
  data: {
    total_seconds: number;
    text: string;
    daily_average: number;
    range: {
      start_text: string;
    };
  };
};

export async function waka() {
  const data: dataType | null = await getApi();
  if (data === null) return "";

  let res = "";
  res += "**wakatime**\n```text\n";
  res += complete("time");
  res += complete(data.data.text);
  res += "\n";
  res += complete("daily average");
  res += complete(
    String(Math.floor(data.data.daily_average / 60)) + " mins",
  );
  res += "\n```\n\n";
  return res;
}

async function getApi(): Promise<dataType | null> {
  try {
    const k = await ky.get(
      "https://wakatime.com/api/v1/users/018afba7-2ebc-4282-8545-d0250012991b/all_time_since_today?project=leetcode",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(Bun.env.WAKATIME as string).toString("base64")}`,
        },
      },
    );

    return (await k.json()) as dataType;
  } catch (e) {
    return null;
  }
}

async function get() {
  try {
    const data = await ky.get(WAKA).text();
    const time = data
      .replace(/<[^>]*>/g, "")
      .replace(/[a-z]+/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .map(Number)
      .splice(0, 2);
    return time[0] * 60 + time[1];
  } catch (e) {
    return 0;
  }
}
