function reverseString(word: string): string {
  let reversedString = "";
  if (!word) return "word is empty";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString += word[i];
  }
  return reversedString;
}

const word = "Reverse this sentence";
console.log(reverseString(word));
