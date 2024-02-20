const n = 10;
const str = "QAZQAZ";

const arr = new Array(123).fill(0);
for (const char of str) arr[char.charCodeAt(0)]++;
let middle = "";
let left: string[] = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    while (arr[i] > 1) {
      left.push(String.fromCharCode(i));
      arr[i] -= 2;
    }
    if (arr[i] === 1 && middle === "") {
      middle = String.fromCharCode(i);
    }
  }
}
console.log(left.join("") + middle + left.reverse().join(""));
