let reverseList = function(head) {
  let node = head;
  let previous = null;
  let tmp = null;

  while (node) {
    tmp = node.next;
    node.next = previous;

    previous = node;
    node = tmp;
  }
  return previous;
};
