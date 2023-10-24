// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Данные во входном потоке могут состоять из нескольких строк.
// Чтобы прочитать их, можно использовать метод rl.on(),
// который вызывается каждый раз при появлении новой строки
// в потоке ввода.
// Чтобы вывести результат в поток вывода (stdout),
// можно использовать метод console.log().
// Пример:
// console.log('Результат:', result);

// Пример решения задачи "Вычислите сумму A+B":
// rl.on('line', line => {
// const [a, b] = line.split(' ').map(Number);
//  console.log(a + b);
//  rl.close();
// });
let n = -1;
rl.on('line', (line) => {
  n = Number(line);
  minOperations(n);
});

function minOperations(N) {
  let dp = new Array(N + 1).fill(Infinity);
  dp[1] = 0;
  let prev = new Array(N + 1);
  for (let i = 2; i <= N; i++) {
    if (i % 2 === 0) {
      let temp = dp[i / 2] + 1;
      if (temp < dp[i]) {
        dp[i] = temp;
        prev[i] = i / 2;
      }
    }

    if (i % 3 === 0) {
      let temp = dp[i / 3] + 1;
      if (temp < dp[i]) {
        dp[i] = temp;
        prev[i] = i / 3;
      }
    }

    let temp = dp[i - 1] + 1;
    if (temp < dp[i]) {
      dp[i] = temp;
      prev[i] = i - 1;
    }
  }

  let sequence = [];
  let current = N;
  while (current !== undefined) {
    sequence.push(current);
    current = prev[current];
  }
  sequence.reverse();
  console.log(dp[N]);
  console.log(sequence.join(' '));
}
