function countVowelStrings(n: number): number {
  let list: string[] = ["a", "e", "i", "o", "u"];
  for (let i = 2; i <= n; i++) {
    const buffer: string[] = [];
    for (const el of list) {
      buffer.push(...ad(el));
    }
    list = buffer;
  }
  return list.length;
}

function ad(s: string): string[] {
  if (s === "a") {
    return ["a", "e", "i", "o", "u"];
  } else if (s === "e") {
    return ["e", "i", "o", "u"];
  } else if (s === "i") {
    return ["i", "o", "u"];
  } else if (s === "o") {
    return ["o", "u"];
  } else {
    return ["u"];
  }
}
