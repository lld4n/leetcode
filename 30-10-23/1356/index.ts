function sortByBits(arr: number[]): number[] {
  let map: number[][] = [];

  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    const two = arr[i].toString(2);
    let count = 0;
    for (let j = 0; j < two.length; j++) {
      if (two[j] === "1") {
        count++;
      }
    }

    if (map[count]) {
      map[count].push(arr[i]);
    } else {
      map[count] = [arr[i]];
    }
  }

  let result: number[] = [];
  for (let el of map) {
    if (el) {
      for (let elem of el) {
        result.push(elem);
      }
    }
  }
  return result;
}
