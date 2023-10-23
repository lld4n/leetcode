module.exports = function (obj) {
  function assignParicipants() {
    const sports = obj['sports'];
    const participants = obj['participants'];
    let res = [];

    for (let i = 0; i < sports.length; i++) {
      res.push([sports[i], participants[participants.length - 1 - i]]);
    }
    return res;
  }

  return assignParicipants();
};
