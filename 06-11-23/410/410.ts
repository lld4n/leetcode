function shipWithinDays(weights: number[], days: number): number {
  let mn = Math.max(...weights);
  let mx = 0;
  for (let el of weights) {
    mx += el;
  }

  while (mn !== mx) {
    let mid = Math.floor((mx + mn) / 2);
    let countDays = 0;
    let buffer = 0;
    for (let i = 0; i < weights.length; i++) {
      if (weights[i] + buffer <= mid) {
        buffer += weights[i];
      } else {
        buffer = 0;
        countDays++;
      }
    }

    if (countDays === days) {
      mn = mid + 1;
    } else {
      mx = mid;
    }
  }
  return mn;
}

function splitArray(nums: number[], k: number): number {
  let mn = -Infinity;
  let mx = 0;
  for (let el of nums) {
    mn = Math.max(mn, el);
    mx += el;
  }

  while (mn !== mx) {
    let mid = Math.floor((mx + mn) / 2);

    let countK = 0;
    let buffer = 0;
    for (let el of nums) {
      buffer += el;
      if (buffer > mid) {
        buffer = el;
        countK++;
      }
    }

    if (countK > k) {
      mn = mid + 1;
    } else {
      mx = mid;
    }
  }
  return mn;
}
