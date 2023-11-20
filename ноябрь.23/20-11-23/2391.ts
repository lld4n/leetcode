function garbageCollection(garbage: string[], travel: number[]): number {
  let res = 0;
  res += gt("M", garbage, travel);
  res += gt("P", garbage, travel);
  res += gt("G", garbage, travel);
  return res;
}

function gt(character: string, garbage: string[], travel: number[]) {
  let res = 0;
  for (let i = 0; i < garbage.length; i++) {
    if (garbage[i].includes(character)) {
      let none = "";
      let count = 0;
      for (let elem of garbage[i].split("")) {
        if (elem === character) {
          count++;
        } else {
          none += elem;
        }
      }
      res += count;
      garbage[i] = none;
    }
    let flag = false;
    for (let j = i + 1; j < garbage.length; j++) {
      if (garbage[j].includes(character)) {
        flag = true;
        break;
      }
    }
    if (flag && i !== travel.length) {
      res += travel[i];
    }
  }
  return res;
}
