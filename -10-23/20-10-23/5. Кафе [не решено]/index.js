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
let array = [];

let sum = 0;
let coupon = [];
rl.on('line', (line) => {
  if (t === 0) {
    n = Number(line);
    t++;
  } else {
    array.push(Number(line));
    t++;
  }

  if (t === n + 1) {
    lesgo();
  }
});

function lesgo() {
  let countHun = 0;
  for (let el of array) {
    if (el > 100) countHun++;
  }

  for (let i = 0; i <= countHun; i++) {
    checkCo(i);
  }
}

function checkCo(count) {
  const mas = Array.from(array);
}
