function capitalizeTitle(title: string): string {
  const ans: string[] = [];
  const list = title.split(" ");
  for (const item of list) {
    if (item.length > 2) {
      ans.push(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    } else {
      ans.push(item.toLowerCase());
    }
  }
  return ans.join(" ");
}
