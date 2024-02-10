function haveConflict(event1: string[], event2: string[]): boolean {
  const e1: [number, number] = [
    Number(event1[0].split(":")[0]) * 60 + Number(event1[0].split(":")[1]),
    Number(event1[1].split(":")[0]) * 60 + Number(event1[1].split(":")[1]),
  ];
  const e2: [number, number] = [
    Number(event2[0].split(":")[0]) * 60 + Number(event2[0].split(":")[1]),
    Number(event2[1].split(":")[0]) * 60 + Number(event2[1].split(":")[1]),
  ];

  const line: number[] = new Array(24 * 60).fill(0);
  for (let i = e1[0]; i <= e1[1]; i++) line[i]++;
  for (let i = e2[0]; i <= e2[1]; i++) line[i]++;
  return line.includes(2);
}
