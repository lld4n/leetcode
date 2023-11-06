type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  if (n === 0) {
    return arr;
  } else {
    let result: MultiDimensionalArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        result.push(...flat(arr[i] as MultiDimensionalArray, n - 1));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
};
