/**
 *
 * @param {string} message
 * @param {Replace[]} replaces
 * @returns {string}
 */
// decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]) === 'bar'
// decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]) === 'foo'
// decode('ab', [{ from: 'a', to: 'bar' }, { from: 'ab', to: 'foo' }]) === 'foo'
function decode(message, replaces) {
  if (replaces.length === 0) {
    return message;
  }

  let result = "";
  let i = 0;
  while (i < message.length) {
    let bool = true;
    for (let j = replaces.length - 1; j >= 0; j--) {
      if (message[i] === replaces[j].from[0]) {
        const buffer = dec(i, j, message, replaces);
        if (buffer !== -1) {
          i = buffer;
          result += replaces[j].to;
          bool = false;
          break;
        }
      }
    }
    if (bool) {
      result += message[i];
      i++;
    }
  }

  return result;
}

/**
 *
 * @param {number} indexMes
 * @param {number}  indexReplace
 * @param {string} message
 * @param {Replace[]} replaces
 * @returns number
 */
function dec(indexMes, indexReplace, message, replaces) {
  let index = -1;
  let j = 0;
  for (let i = indexMes; i < message.length + 1; i++) {
    if (j >= replaces[indexReplace].from.length) {
      index = i;
      break;
    } else if (replaces[indexReplace].from[j] === message[i]) {
      j++;
    } else {
      break;
    }
  }
  return index;
}
module.exports = { decode };
