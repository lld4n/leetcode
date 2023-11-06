import { lesgo } from "./index.js";

const line =
  "+----------------0---------------+\n" +
  "|                                |\n" +
  "|                                |\n" +
  "|          U        D            |\n" +
  "|     L                          |\n" +
  "|              R                 |\n" +
  "|           L                    |\n" +
  "|  U                             1\n" +
  "3        U    D                  |\n" +
  "|         L              R       |\n" +
  "|                                |\n" +
  "+----------------2---------------+";
const l = line.split("\n");
let b = [];
for (let i = 0; i < l.length; i++) {
  let a = [];
  for (let j = 0; j < l[i].length; j++) {
    if (
      l[i][j] !== " " &&
      l[i][j] !== "+" &&
      l[i][j] !== "-" &&
      l[i][j] !== "|"
    ) {
      a.push([i, j, l[i][j]]);
    }
  }
  if (a.length) {
    b.push(a);
  }
}
console.log(b);

console.log(lesgo(line));
