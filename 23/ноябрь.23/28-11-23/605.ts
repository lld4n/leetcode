function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0;
  while (i < flowerbed.length) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 0) {
        if (flowerbed[i + 2] === 0) {
          n--;
          i += 2;
        } else {
          n--;
          i += 4;
        }
      } else {
        if (i === flowerbed.length - 1) {
          i++;
          n--;
        } else {
          i += 3;
        }
      }
    } else {
      i += 2;
    }
  }

  return n === 0;
}
