function insertNodeAtTail(head, data) {
  if (head == null) {
    head = new SinglyLinkedListNode(data);
  } else {
    let node = new SinglyLinkedListNode();
    node = head;
    while (node.next != null) {
      node = node.next;
    }
    node.next = new SinglyLinkedListNode(data);
  }
  return head;
}
