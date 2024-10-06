// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function join(arr1: JSONValue[], arr2: JSONValue[]): JSONValue[] {
  let obj: any = {};
  for (let el of arr1) {
    obj[el["id"]] = el;
  }

  for (let el of arr2) {
    if (obj[el["id"]]) {
      for (let key of Object.keys(el)) {
        obj[el["id"]][key] = el[key];
      }
    } else {
      obj[el["id"]] = el;
    }
  }
  return Object.values(obj);
}
