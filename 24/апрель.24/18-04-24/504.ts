function convertToBase7(num: number): string {
  let ans = "";
  let flag = num < 0;
  num = Math.abs(num);

  while (num > 0) {
    ans += String(num % 7);
    num = Math.floor(num / 7);
  }
  return (flag ? "-" : "") + ans.split("").reverse().join("");
}
