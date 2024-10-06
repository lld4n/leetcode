function minMovesToSeat(seats: number[], students: number[]): number {
  seats = seats.sort((a, b) => a - b);
  students = students.sort((a, b) => a - b);
  let ans = 0;
  while (seats.length !== 0) {
    ans += Math.abs(students.shift()! - seats.shift()!);
  }
  return ans;
}
