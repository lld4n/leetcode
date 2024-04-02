import ky from "ky";
import { complete, percentage, strip } from "./utils";

type dataType = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
};

type returnType = {
  total: [number, number];
  easy: [number, number];
  medium: [number, number];
  hard: [number, number];
  [key: string]: [number, number];
};

export async function leetcode() {
  const data = await get();
  if (data === null) return "";
  let res = "leetcode\n```text\n";
  for (const key in data) {
    res += complete(key);
    res += complete(data[key][0] + " tasks");
    res += strip(data[key][0], data[key][1]);
    res += complete(percentage(data[key][0], data[key][1]));
    res += "\n";
  }
  res += "```\n\n";
  return res;
}

async function get(): Promise<returnType | null> {
  try {
    const data = await ky.get(
      "https://leetcodestats.cyclic.app/lldan",
    );
    const j: dataType = await data.json();
    return {
      total: [j.totalSolved, j.totalQuestions],
      easy: [j.easySolved, j.totalEasy],
      medium: [j.mediumSolved, j.totalMedium],
      hard: [j.hardSolved, j.totalHard],
    };
  } catch (e) {
    return null;
  }
}
