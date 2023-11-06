module.exports = function (mapString) {
  let timeInSec = 0;

  const split = mapString.split("\n");

  let hole = [];
  const regex = /\d/;
  for (let i = 0; i < split[0].length; i++) {
    if (regex.test(split[0][i])) {
      hole.push([0, i]);
    }
    if (regex.test(split[split.length - 1][i])) {
      hole.push([split.length - 1, i]);
    }
  }
  for (let i = 1; i < split.length - 1; i++) {
    if (regex.test(split[i][0])) {
      hole.push([i, 0]);
    }
    if (regex.test(split[i][split[0].length - 1])) {
      hole.push([i, split[0].length - 1]);
    }
  }

  for (let i = 1; i < split.length - 1; i++) {
    for (let j = 1; j < split[i].length - 1; j++) {
      if (split[i][j] !== " ") {
        let buffer = Infinity;
        for (let el of hole) {
          const lll = Math.abs(i - el[0]) + Math.abs(j - el[1]);
          if (lll < buffer) {
            buffer = lll;
          }
        }
        if (buffer + 1 > timeInSec) {
          timeInSec = buffer + 1;
        }
      }
    }
  }

  return timeInSec;
};

// export function lesgo(mapString) {
//   let timeInSec = 0;
//
//   const split = mapString.split("\n");
//
//   let hole = [];
//   const regex = /\d/;
//   for (let i = 0; i < split[0].length; i++) {
//     if (regex.test(split[0][i])) {
//       hole.push([0, i]);
//     }
//     if (regex.test(split[split.length - 1][i])) {
//       hole.push([split.length - 1, i]);
//     }
//   }
//   for (let i = 1; i < split.length - 1; i++) {
//     if (regex.test(split[i][0])) {
//       hole.push([i, 0]);
//     }
//     if (regex.test(split[i][split[0].length - 1])) {
//       hole.push([i, split[0].length - 1]);
//     }
//   }
//
//   for (let i = 1; i < split.length - 1; i++) {
//     for (let j = 1; j < split[i].length - 1; j++) {
//       if (split[i][j] !== " ") {
//         let buffer = Infinity;
//         for (let el of hole) {
//           const lll = Math.abs(i - el[0]) + Math.abs(j - el[1]);
//           if (lll < buffer) {
//             buffer = lll;
//           }
//         }
//         if (buffer + 1 > timeInSec) {
//           timeInSec = buffer + 1;
//         }
//       }
//     }
//   }
//
//   return timeInSec;
// }
