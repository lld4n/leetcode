import { spawnSync } from "child_process";

export function sync() {
  const currentTimestamp = new Date().toLocaleString("RU-ru", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
  spawnSync("git", ["add", "."], { stdio: "inherit" });
  spawnSync("git", ["commit", "-m", `${currentTimestamp}`], {
    stdio: "inherit",
  });
  spawnSync("git", ["push"], { stdio: "inherit" });
}
