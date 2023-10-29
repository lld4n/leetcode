function binary_search(sortedArray, element) {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    const guess = sortedArray[mid];
    if (guess === element) {
      return mid;
    } else if (guess < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function selection_sort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMax = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[indexMax]) {
        indexMax = j;
      }
    }

    if (indexMax !== i) {
      let buffer = array[i];
      array[i] = array[indexMax];
      array[indexMax] = buffer;
    }
  }
}

function quick_sort(array) {
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let support = array[Math.floor(array.length / 2)];
  array.splice(Math.floor(array.length / 2), 1);
  for (let el of array) {
    if (el < support) {
      left.push(el);
    } else {
      right.push(el);
    }
  }
  return quick_sort(left).concat(support, quick_sort(right));
}
