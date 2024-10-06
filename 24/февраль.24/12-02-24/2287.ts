function rearrangeCharacters(s: string, target: string): number {
  const map: number[] = new Array(123).fill(0);
  for (const l of s) map[l.charCodeAt(0)]++;
  const tmap: number[] = new Array(123).fill(0);
  for (const l of target) tmap[l.charCodeAt(0)]++;
  const wtf: number[] = [];
  for (let i = 0; i < tmap.length; i++) {
    if (tmap[i] !== 0 && map[i] === 0) {
      return 0;
    }
  }
  for (let i = 0; i < tmap.length; i++) {
    if (tmap[i] !== 0 && map[i] !== 0) {
      wtf.push(Math.floor(map[i] / tmap[i]));
    }
  }
  if (wtf.length === 0) return 0;
  return Math.min(...wtf);
}
