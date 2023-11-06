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
rl.on('line', (line) => {
  const [n, m] = line.split(' ').map(Number);
  let arr = []; // создаем пустой массив

  // заполняем массив нулями
  for (let i = 0; i < n + 2; i++) {
    arr[i] = [];
    for (let j = 0; j < m + 2; j++) {
      arr[i][j] = 0;
    }
  }
  arr[2][2] = 1;
  for (let i = 2; i < n + 2; i++) {
    for (let j = 2; j < m + 2; j++) {
      if (i !== 2 && j !== 2) {
        arr[i][j] = arr[i - 2][j - 1] + arr[i - 1][j - 2];
      }
    }
  }

  console.log(arr[n + 1][m + 1]);
});
