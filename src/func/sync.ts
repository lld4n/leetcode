export function sync() {
  const currentTimestamp = new Date().toLocaleString("RU-ru", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
  Bun.spawnSync(["git", "add", "."]);
  Bun.spawnSync(["git", "commit", "-m", `${currentTimestamp}`]);
  Bun.spawnSync(["git", "push"]);

  // spawnSync("git", ["add", "."], { stdio: "inherit" });
  // spawnSync("git", ["commit", "-m", `${currentTimestamp}`], {
  //   stdio: "inherit",
  // });
  // spawnSync("git", ["push"], { stdio: "inherit" });
}
