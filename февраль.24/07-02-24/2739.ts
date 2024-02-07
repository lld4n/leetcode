function distanceTraveled(mainTank: number, additionalTank: number): number {
  let km = 0;
  for (let i = 1; i <= mainTank; i++) {
    km += 10;
    if (i % 5 === 0) {
      if (additionalTank > 0) {
        additionalTank--;
        mainTank++;
      }
    }
  }
  return km;
}
