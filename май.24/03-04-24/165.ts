function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split(".").map(Number);
  const v2 = version2.split(".").map(Number);
  while (v1.length !== v2.length) {
    if (v1.length < v2.length) {
      v1.push(0);
    } else if (v1.length > v2.length) {
      v2.push(0);
    }
  }
  for (let i = 0; i < v1.length; i++) {
    if (v1[i] < v2[i]) {
      return -1;
    } else if (v1[i] > v2[i]) {
      return 1;
    }
  }
  return 0;
}
