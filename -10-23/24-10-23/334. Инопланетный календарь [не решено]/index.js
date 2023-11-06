/** @returns string */
module.exports = function (inputString) {
  const imp = ["ta'so", "ta'ko", "ta'ta", "ta'qa", "ta'goo"];
  inputString = inputString.toLowerCase().split(" ");
  let date = 0;
  let res = "";
  for (let i = 0; i < inputString.length; i++) {
    const regex = /\d/;
    if (imp.includes(inputString[i])) {
      res = inputString[i].replace("ta'", "");
    }

    if (regex.test(inputString[i])) {
      date = Number(inputString[i]);
    }
  }
  return res + " " + date;
};
