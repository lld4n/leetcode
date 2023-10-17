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
let result = [];
rl.on('line', (line) => {
  if (t === 0) {
    const b = line.split(' ').map(Number);
    n = b[0];
    m = b[1];
    t++;
    for (let i = 0; i < n; i++) {
      let buffer = [];
      for (let j = 0; j < m; j++) {
        buffer.push(0);
      }
      arr.push(buffer);
    }
    for (let i = 0; i < n; i++) {
      let buffer = [];
      for (let j = 0; j < m; j++) {
        buffer.push('');
      }
      result.push(buffer);
    }
    rl.close();
  } else {
    const b = line.split(' ').map(Number);
    massive.push([...b]);
    t++;
  }

  if (t === n + 1) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (j === 0 && i === 0) {
          arr[i][j] = massive[i][j];
        } else if (j === 0) {
          arr[i][j] = arr[i - 1][j] + massive[i][j];
          result[i][j] = result[i - 1][j] + 'D ';
        } else if (i === 0) {
          arr[i][j] = arr[i][j - 1] + massive[i][j];
          result[i][j] = result[i][j - 1] + 'R ';
        } else {
          arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]) + massive[i][j];
          if (arr[i - 1][j] >= arr[i][j - 1]) {
            result[i][j] = result[i - 1][j] + 'D ';
          } else {
            result[i][j] = result[i][j - 1] + 'R ';
          }
        }
      }
    }
    console.log(arr[n - 1][m - 1]);
    console.log(result[n - 1][m - 1].trim());
  }
});
