const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function buildMagistral(n, heights) {
  let totalArea = 0;

  for (let i = 1; i < n; i++) {
    totalArea += Math.abs(heights[i] - heights[i - 1]);
  }

  let currentArea = 0;
  let targetHeight = 0;

  for (let i = 1; i < n; i++) {
    const diff = Math.abs(heights[i] - heights[i - 1]);
    currentArea += diff;

    if (currentArea * 2 >= totalArea) {
      // Мы нашли высоту, на которой нужно построить магистраль
      const remainingArea = totalArea - currentArea;
      const ratio = remainingArea / diff;
      targetHeight = heights[i - 1] + ratio * (heights[i] - heights[i - 1]);
      break;
    }
  }

  return targetHeight.toFixed(4);
}

rl.question("Введите число районов в городе (n): ", (n) => {
  rl.question(
    "Введите уровни районов города через пробел: ",
    (heightsInput) => {
      const heights = heightsInput.split(" ").map(Number);

      const result = buildMagistral(parseInt(n), heights);

      rl.close();
    },
  );
});
