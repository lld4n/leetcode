function latestTimeCatchTheBus(
  buses: number[],
  passengers: number[],
  capacity: number,
): number {
  passengers = passengers.sort((a, b) => a - b);
  buses = buses.sort((a, b) => a - b);
  let result = -1;
  let index = 0;
  let count = 0;
  for (let i = 0; i < passengers.length; i++) {
    if (count === capacity) {
      index++;
      count = 0;
    }
    if (index === buses.length) {
      break;
    }

    if (count < capacity) {
      result = f(passengers[i], passengers);
      count++;
    }
  }
  return result;
}

function f(end: number, passengers: number[]) {
  for (let i = end - 1; i > 0; i--) {
    if (!passengers.includes(i)) {
      return i;
    }
  }
  return 0;
}
