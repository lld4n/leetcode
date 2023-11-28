function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let answer: boolean[] = [];
  const mmmmmmmm = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= mmmmmmmm) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
}
