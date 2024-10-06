function countPrefixSuffixPairs(words: string[]): number {
  const isPrefixAndSuffix = (str1: string, str2: string): boolean => {
    if (str2.length < str1.length) return false;
    let i = 0;
    while (i !== str1.length) {
      if (str1[i] !== str2[i]) return false;
      i++;
    }
    const str3 = str1.split("").reverse();
    const str4 = str2.split("").reverse();
    i = 0;
    while (i !== str3.length) {
      if (str3[i] !== str4[i]) return false;
      i++;
    }
    return true;
  };
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) ans++;
    }
  }
  return ans;
}
