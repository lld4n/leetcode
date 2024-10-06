type map242 = {
  [key: string]: number;
};
function isAnagram(s: string, t: string): boolean {
  let mapS: map242 = {};
  let mapT: map242 = {};
  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]]) {
      mapS[s[i]]++;
    } else {
      mapS[s[i]] = 0;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (mapT[t[i]]) {
      mapT[t[i]]++;
    } else {
      mapT[t[i]] = 0;
    }
  }

  for (let key in mapS) {
    if (!mapT[key]) {
      return false;
    } else {
      if (mapS[key] !== mapT[key]) {
        return false;
      }
    }
  }
  return true;
}
