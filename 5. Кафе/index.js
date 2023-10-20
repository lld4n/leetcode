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
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== -1) {
        if (array[i] > 100) {
          sum += array[i];
          const maxIndex = findMaxIndex(array, i);
          if (maxIndex !== -1) {
            coupon.push(maxIndex);
            array[maxIndex] = -1;
          } else {
            coupon.push(-1);
          }
        } else {
          sum += array[i];
        }
      }
    }
    console.log(sum);
    let unused = 0;
    let used = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === -1) {
        used++;
      }
    }
    console.log(coupon.length - used + ' ' + used);
    for (let el of coupon) {
      if (el !== -1) {
        console.log(el + 1);
      }
    }
  }
});

function findMaxIndex(arr, startIndex) {
  if (startIndex + 1 >= arr.length) {
    return -1;
  }
  let maxIndex = startIndex + 1;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}
