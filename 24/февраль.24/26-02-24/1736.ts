function maximumTime(time: string): string {
  const [h, m] = time.split(":");
  let hans = "";
  for (let i = 0; i < 24; i++) {
    const itog = i < 10 ? "0" + String(i) : String(i);
    if (
      (itog[0] === h[0] || h[0] === "?") &&
      (itog[1] === h[1] || h[1] === "?")
    ) {
      hans = itog;
    }
  }
  let mans = "";
  for (let i = 0; i < 60; i++) {
    const itog = i < 10 ? "0" + String(i) : String(i);
    if (
      (itog[0] === m[0] || m[0] === "?") &&
      (itog[1] === m[1] || m[1] === "?")
    ) {
      mans = itog;
    }
  }
  return hans + ":" + mans;
}
