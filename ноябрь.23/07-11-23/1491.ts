function average(salary: number[]): number {
  salary = salary.sort((a, b) => a - b);
  let res = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    res += salary[i];
  }
  return res / (salary.length - 2);
}
