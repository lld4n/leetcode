function eliminateMaximum(dist: number[], speed: number[]): number {
  let mas: number[] = [];
  for (let i = 0; i < dist.length; i++) {
    mas.push(findCount(dist[i], speed[i]));
  }

  mas = mas.sort((a, b) => a - b);
  console.log(mas);
  let count = 1;
  mas.shift();
  for (let i = 0; i < mas.length; i++) {
    if (i + 1 >= mas[i]) {
      break;
    }
    count++;
  }
  return count;
}

function findCount(dist: number, speed: number) {
  return Math.ceil(dist / speed);
}
