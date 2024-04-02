import { readdir } from "node:fs/promises";

const list = [
  "октябрь.23",
  "апрель.24",
  "другое",
  "февраль.24",
  "январь.24",
  "ноябрь.23",
  "декабрь.23",
  "март.24",
];

export async function files() {
  const set: Set<string> = new Set();
  for (const item of list) {
    const files = await readdir(`./${item}`, { recursive: true });
    for (const one of files) {
      const t = Bun.file(`./${item}/${one}`);
      set.add(t.name!);
    }
  }
  console.log(Array.from(set));
}
