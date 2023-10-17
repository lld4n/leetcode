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
  if (line.split(' ').length === 2) {
    const vertices = line
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    console.log(vertices[1] - vertices[0]);
  } else if (line.split(' ').length === 3) {
    const vertices = line
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);
    console.log(vertices[1] - vertices[0] + (vertices[2] - vertices[1]));
  } else if (line.split(' ').length > 2) {
    const vertices = line
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);
    const arr = [];

    for (let i = 0; i < vertices.length; i++) {
      arr.push(false);
    }

    let sum =
      vertices[1] - vertices[0] + (vertices[vertices.length - 1] - vertices[vertices.length - 2]);

    arr[0] = true;
    arr[1] = true;
    arr[arr.length - 1] = true;
    arr[arr.length - 2] = true;

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        if (vertices[i] - vertices[i - 1] <= vertices[i + 1] - vertices[i]) {
          sum += vertices[i] - vertices[i - 1];
          arr[i] = true;
          arr[i - 1] = true;
        } else {
          sum += vertices[i + 1] - vertices[i];
          arr[i] = true;
          arr[i + 1] = true;
        }
      }
    }
    console.log(sum);
  }

  rl.close();
});
