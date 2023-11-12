const getStopAndBusMap = (routes: number[][]) => {
  const stopAndBusMap = new Map<number, number[]>();

  for (let i = 0; i < routes.length; i++) {
    for (const stop of routes[i]) {
      const buses = stopAndBusMap.get(stop) || [];
      buses.push(i);
      stopAndBusMap.set(stop, buses);
    }
  }
  return stopAndBusMap;
};

function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number,
): number {
  if (source === target) return 0;
  const stopAndBusMap = getStopAndBusMap(routes);
  if (!stopAndBusMap.has(target) || !stopAndBusMap.has(source)) return -1;

  const visitedStops = new Set<number>();
  visitedStops.add(source);
  let q = [source];
  let level = 1;

  while (q.length) {
    const newQ = new Set<number>();

    while (q.length) {
      const stop = q.pop();
      for (const bus of stopAndBusMap.get(stop)) {
        for (const newStop of routes[bus]) {
          if (newStop === target) return level;
          if (visitedStops.has(newStop)) continue;

          visitedStops.add(stop);
          newQ.add(newStop);
        }
      }
    }

    level++;
    q = [...newQ];
  }

  return -1;
}
