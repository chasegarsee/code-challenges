function insertNodeAtHead(head, data) {
  let node = new SinglyLinkedListNode(data);
  node.next = head;
  return node;
}
