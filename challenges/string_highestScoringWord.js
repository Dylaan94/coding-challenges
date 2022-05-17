/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272 */

function high(x) {
  let arr = x.split(" ");
  let count = 0;
  let highest = "";

  arr.forEach((e) => {
    let sum = 0;
    let wordArr = e.split("");

    wordArr.forEach((c) => {
      sum += c.charCodeAt(0) - 96;
    });

    if (sum === count) {
      return;
    } else if (sum >= count) {
      count = sum;
      highest = e.toString();
    }
  });

  return highest;
}