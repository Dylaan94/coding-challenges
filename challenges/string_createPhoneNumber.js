/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

https://www.codewars.com/kata/525f50e3b73515a6db000b83 */

function createPhoneNumber(numbers) {
  let strArray = numbers.map((e) => e.toString());
  strArray.splice(0, 0, "(");
  strArray.splice(4, 0, ")");
  strArray.splice(5, 0, " ");
  strArray.splice(9, 0, "-");

  let phoneNum = strArray.join("");

  return phoneNum;
}
