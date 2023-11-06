/**
 * @title 389
 * @url https://leetcode.com/problems/find-the-difference/?envType=study-plan-v2&envId=programming-skills
 * @time 8m
 * @source leetcode
 * @tags good
 */

function findTheDifference(s: string, t: string): string {
  let sMap: {
    [key: string]: number;
  } = {};
  let tMap: {
    [key: string]: number;
  } = {};

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]]++;
    } else {
      sMap[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tMap[t[i]]) {
      tMap[t[i]]++;
    } else {
      tMap[t[i]] = 1;
    }
  }

  for (let key in tMap) {
    if (sMap[key]) {
      if (sMap[key] < tMap[key]) {
        return key;
      }
    } else {
      return key;
    }
  }
}
