function findDifferentBinaryString(nums: string[]): string {
  let buffer = "";
  for (let i = 0; i < nums[0].length; i++) {
    buffer += "0";
  }

  for (let i = 0; i < nums.length * 2; i++) {
    if (!nums.includes(buffer)) {
      return buffer;
    }
    buffer = addOnePoint(buffer);
  }

  return "";
}

function addOnePoint(buffer: string): string {
  let res = (parseInt(buffer, 2) + 1).toString(2);
  let index = 0;
  for (let i = 0; i < buffer.length; i++) {
    if (index >= res.length) {
      res = "0" + res;
    }
    index++;
  }
  return res;
}
