function countHomogenous(s: string): number {
  let list: number[] = [];
  let buffer = '';
  let answer = 0;
  let mod = 10 ** 9 + 7;
  for (let i = 0; i < s.length; i++) {
    if (buffer !== s[i]) {
      buffer = s[i];
      list.push(1);
    } else {
      list[list.length - 1]++;
    }
  }
  for (let el of list) {
    answer = (answer + generate(el)) % mod;
  }
  return answer;
}

function generate(num: number): number {
  let res = 0;
  let mod = 10 ** 9 + 7;
  for (let i = 1; i <= num; i++) {
    res = (res + i) % mod;
  }
  return res;
}
