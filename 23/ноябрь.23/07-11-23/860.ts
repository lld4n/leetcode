function lemonadeChange(bills: number[]): boolean {
  let check = {
    "5": 0,
    "10": 0,
  };

  for (let el of bills) {
    if (el === 5) {
      check["5"]++;
    } else if (el === 10) {
      if (check["5"] >= 1) {
        check["5"]--;
        check["10"]++;
      } else {
        return false;
      }
    } else if (el === 20) {
      if (check["5"] >= 1 && check["10"] >= 1) {
        check["5"]--;
        check["10"]--;
      } else if (check["5"] >= 3) {
        check["5"] -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
