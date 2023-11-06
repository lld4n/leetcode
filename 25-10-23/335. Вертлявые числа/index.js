/**
 * @param {string} password
 * @returns {boolean}
 */
module.exports = (password) => {
  // Your solution

  return check(password, 0);
};

/**
 *
 * @param {string} password
 * @param {number} index
 * @returns {boolean}
 */
function check(password, index) {
  if (index >= password.length) {
    return true;
  }
  if (password[index] === "1") {
    if (password.length - index < 4) {
      return false;
    } else {
      if (password.substring(index, index + 4) === "1111") {
        return check(password, index + 4);
      } else {
        return false;
      }
    }
  } else if (password[index] === "7") {
    if (
      password[index + 1] &&
      password[index + 1] === "1" &&
      password[index + 2] &&
      password[index + 2] === "1"
    ) {
      return check(password, index + 3) || check(password, index + 1);
    } else {
      return check(password, index + 1);
    }
  } else {
    return false;
  }
}
