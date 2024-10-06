function sortVowels(s: string): string {
  const check = ["u", "U", "E", "A", "I", "O", "a", "e", "i", "o"];
  let buffer: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (check.includes(s[i])) {
      buffer.push(s[i]);
    }
  }
  buffer = buffer.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  let answer = "";
  let ind = 0;
  for (let i = 0; i < s.length; i++) {
    if (check.includes(s[i])) {
      answer += buffer[ind];
      ind++;
    } else {
      answer += s[i];
    }
  }
  return answer;
}
