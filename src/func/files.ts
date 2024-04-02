import { readdir } from "node:fs/promises";

export async function files() {
  const files = await readdir(".");
  console.log(files);
}
