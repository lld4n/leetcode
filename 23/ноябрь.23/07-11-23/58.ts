function lengthOfLastWord(s: string): number {
  let answer = 0;
  for (let elem of s.split(" ")) {
    if (elem !== "") {
      answer = elem.length;
    }
  }
  return answer;
}
