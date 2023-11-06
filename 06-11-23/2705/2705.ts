type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;
type JSONType = (value: JSONValue, index: number, array: JSONValue[]) => Obj;
function compactObject(obj: Obj): Obj {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean)?.map(compactObject);

  if (typeof obj !== "object") return obj;

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key] as Obj);
    if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
}
