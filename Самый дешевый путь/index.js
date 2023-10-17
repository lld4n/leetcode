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
let t = 0;
let n = 0;
let m = 0;
let arr = [];
let massive = [];
rl.on('line', (line) => {
  if (t === 0) {
    const b = line.split(' ').map(Number);
    n = b[0];
    m = b[1];
    t++;
    for (let i = 0; i <= n + 1; i++) {
      let buffer = [];
      for (let j = 0; j <= m + 1; j++) {
        buffer.push(0);
      }
      arr.push(buffer);
    }
    rl.close();
  } else {
    const b = line.split(' ').map(Number);
    massive.push([...b]);
    t++;
  }

  if (t === n + 1) {
    for (let i = 1; i < arr.length - 1; i++) {
      for (let j = 1; j < arr[i].length - 1; j++) {
        if (j === 1) {
          arr[i][j] = arr[i - 1][j] + massive[i - 1][j - 1];
        } else if (i === 1) {
          arr[i][j] = arr[i][j - 1] + massive[i - 1][j - 1];
        } else {
          arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + massive[i - 1][j - 1];
        }
      }
    }
    console.log(arr[n][m]);
  }
});
