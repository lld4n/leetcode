function removePalindromeSub(s: string): number {
  const palin = (str: string) => {
    return str.split("").reverse().join("") === s;
  };
  if (palin(s)) return 1;
  else return 2;
}
