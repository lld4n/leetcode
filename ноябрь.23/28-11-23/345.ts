function reverseVowels(s: string): string {
  const list = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let chars: number[] = [];
  let vowels: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (list.includes(s[i])) {
      vowels.push(s[i]);
      chars.push(-1);
    } else {
      chars.push(i);
    }
  }

  vowels = vowels.reverse();

  let answer = "";
  let j = 0;
  for (let el of chars) {
    if (el === -1) {
      answer += vowels[j];
      j++;
    } else {
      answer += s[el];
    }
  }
  return answer;
}
