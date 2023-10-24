function countStudents(students: number[], sandwiches: number[]): number {
  let count = students.length;
  let l = 0;

  while (l <= count * 3) {
    if (sandwiches[0] === students[0]) {
      students.shift();
      sandwiches.shift();
      count--;
      l = 0;
    } else {
      students.push(students.shift());
      l++;
    }
  }

  return students.length;
}
