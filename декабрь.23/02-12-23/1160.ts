function countCharacters(words: string[], chars: string): number {
  let list: number[] = new Array(123).fill(0);
  for (let el of chars) {
    list[el.charCodeAt(0)]++;
  }
  let answer = 0;
  for (let element of words) {
    let buffer: number[] = new Array(123).fill(0);
    for (let e of element) {
      buffer[e.charCodeAt(0)]++;
    }
    let flag = true;
    for (let i = 80; i < list.length; i++) {
      if (buffer[i] !== 0 && buffer[i] > list[i]) {
        flag = false;
      }
    }
    if (flag) {
      answer += element.length;
    }
  }
  return answer;
}
