/*
Given two arrays a and b write a function comp(a, b)  that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, 
that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 
361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19] 

https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
*/

function comp(array1, array2) {
  let count = 0;

  if (array2 === null) {
    return false;
  }
    
  try {
    array1.forEach((e) => {
      if (array2.includes(e * e)) { // check if array includes square
        count++;
        array2.splice(array2.indexOf(e * e), 1); // remove array item
      }
    });
  } catch (e) {
    return false;
  }
    
  return count === array1.length ? true : false;
}
