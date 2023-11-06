function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const reverse = Number(String(x).split('').reverse().join(''));

  return reverse === x;
}
