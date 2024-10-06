function gcdOfStrings(str1: string, str2: string): string {}

function prefix_function(s: string) {
  const p = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    let current = p[i - 1];
    while (s[i] !== s[current] && current > 0) {
      current = p[current - 1];
    }
    if (s[i] === s[current]) {
      p[i] = current + 1;
    }
  }
  return p;
}

function check(s: string): number {
  const p = prefix_function(s);
  let k = s.length - p[s.length - 1];
  if (s.length % k === 0) {
    return k;
  } else {
    return s.length;
  }
}
