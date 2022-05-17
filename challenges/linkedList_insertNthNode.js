/* Implement an InsertNth() function which can insert a new node at any index within a list.

Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index.

InsertNth() should return the head of the list. 

https://www.codewars.com/kata/55cacc3039607536c6000081
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function insertNth(head, index, data) {
  // handles empty list
  if (head === null) {
    return new Node(data);
  }

  // inserts at head of list
  if (index === 0) {
    return new Node(data, head);
  }

  let current = head; // starts at the beginning
  let previous = head;
  let count = 0;

  while (count < index) {
    previous = current;
    count++;
    current = current.next;
  }

  let node = new Node(data);
  node.next = current;
  previous.next = node;

  return head;
}
