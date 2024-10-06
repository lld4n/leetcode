class SeatManager {
  list: boolean[];

  constructor(n: number) {
    this.list = new Array(n).fill(false);
  }

  reserve(): number {
    const index = this.list.findIndex((el) => el === false);
    this.list[index] = true;
    return index + 1;
  }

  unreserve(seatNumber: number): void {
    this.list[seatNumber - 1] = false;
    return;
  }
}
