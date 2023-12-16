type map242 = {
  [key: string]: number;
};
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  let mapS: map242 = {};
  let mapT: map242 = {};
  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]] ) {
      mapS[s[i]] = mapS[s[i]] + 1;
    } else {
      mapS[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (mapT[t[i]]) {
      mapT[t[i]] = mapT[t[i]] + 1;
    } else {
      mapT[t[i]] = 1;
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
