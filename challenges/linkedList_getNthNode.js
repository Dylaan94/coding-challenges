/*Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

https://www.codewars.com/kata/55befc42bfe4d13ab1000007
*/


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function getNth(node, index) {
  let current = node;
  let count = 0;

  while (current) {
    if (index === count) {
      return current;
    }
    current = current.next;
    count++;
  }

  throw console.log(error);
}
