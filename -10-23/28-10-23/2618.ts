function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  return (
    obj != null &&
    typeof classFunction === "function" &&
    Object(obj) instanceof classFunction
  );
}
