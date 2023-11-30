function compress(chars: string[]): number {
  let answer = "";
  let cnts: string[] = [];
  let character = "";
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== character) {
      answer += character;
      cnts.push(String(count));
      character = chars[i];
      count = 1;
    } else {
      count++;
    }
  }
  answer += character;
  cnts.push(String(count));
  cnts = cnts.slice(1);
  chars = [];
  for (let i = 0; i < answer.length; i++) {
    chars.push(answer[i]);
    for (let el of cnts[i]) {
      chars.push(el);
    }
  }
  console.log(answer, cnts);
  return chars.length;
}
