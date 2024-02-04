const month: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function reformatDate(date: string): string {
  const splitted: string[] = date.split(" ");
  const index = month.findIndex((e) => e === splitted[1]);
  const day = splitted[0].length === 4 ? splitted[0] : "0" + splitted[0];
  return (
    splitted[2] +
    "-" +
    (index + 1 >= 10 ? index + 1 : "0" + (index + 1)) +
    "-" +
    day.slice(0, 2)
  );
}
